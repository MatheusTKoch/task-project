import { initializeApp } from "firebase/app";
import { 
  getDatabase, 
  ref, 
  onValue, 
  push, 
  set, 
  remove, 
  query, 
  orderByChild, 
  equalTo,
  child,
  get,
  off
} from "firebase/database";
import { 
  getAuth, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut,
  sendPasswordResetEmail,
  onAuthStateChanged
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "AIzaSyD6rOiOiFAkse6Y3_hdzvP-Z1zRv20wrJg",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "taskproject-caf25.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "taskproject-caf25",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "taskproject-caf25.firebasestorage.app",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "1061401138693",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:1061401138693:web:03fc3339b03b4cb79eee6c",
  databaseURL: import.meta.env.VITE_FIREBASE_DATABASE_URL || 'https://taskproject-caf25-default-rtdb.firebaseio.com/'
};


const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const auth = getAuth(app);

// Cache para otimização
const cache = new Map();
const CACHE_TTL = 5 * 60 * 1000; // 5 minutos

// Debounce para operações de escrita
const debounceMap = new Map();
const debounce = (key, fn, delay = 500) => {
  if (debounceMap.has(key)) {
    clearTimeout(debounceMap.get(key));
  }
  debounceMap.set(key, setTimeout(fn, delay));
};

// Validação de dados
const validateTask = (task) => {
  if (!task || typeof task !== 'object') {
    throw new Error('Task deve ser um objeto válido');
  }
  if (!task.taskText || typeof task.taskText !== 'string' || !task.taskText.trim()) {
    throw new Error('Texto da tarefa é obrigatório');
  }
  if (task.taskText.length > 500) {
    throw new Error('Texto da tarefa não pode exceder 500 caracteres');
  }
  if (!task.userUID || typeof task.userUID !== 'string') {
    throw new Error('UID do usuário é obrigatório');
  }
  return true;
};

// Tratamento centralizado de erros
const handleError = (error, context = '') => {
  console.error(`Firebase Error ${context}:`, error);
  

  const errorInfo = {
    code: error.code || 'unknown',
    message: error.message || 'Erro desconhecido',
    context,
    timestamp: new Date().toISOString(),
    user: auth.currentUser?.uid || 'anonymous'
  };
  
  return errorInfo;
};

export const authService = {
  async signIn(email, password) {
    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return { success: true, user: result.user };
    } catch (error) {
      const errorInfo = handleError(error, 'signIn');
      return { success: false, error: errorInfo };
    }
  },

  async signUp(email, password) {
    try {
      const result = await createUserWithEmailAndPassword(auth, email, password);
      return { success: true, user: result.user };
    } catch (error) {
      const errorInfo = handleError(error, 'signUp');
      return { success: false, error: errorInfo };
    }
  },

  async signOut() {
    try {
      await signOut(auth);
      cache.clear();
      return { success: true };
    } catch (error) {
      const errorInfo = handleError(error, 'signOut');
      return { success: false, error: errorInfo };
    }
  },

  async sendPasswordReset(email) {
    try {
      await sendPasswordResetEmail(auth, email);
      return { success: true };
    } catch (error) {
      const errorInfo = handleError(error, 'sendPasswordReset');
      return { success: false, error: errorInfo };
    }
  },

  onAuthStateChanged(callback) {
    return onAuthStateChanged(auth, callback);
  },

  getCurrentUser() {
    return auth.currentUser;
  }
};

// Serviços de Tarefas
export const taskService = {
  getUserTasks(userId, callback) {
    if (!userId || !callback) {
      console.error('getUserTasks: Missing userId or callback');
      return null;
    }

    try {
      const tasksQuery = query(
        ref(database, "tasks"),
        orderByChild("userUID"),
        equalTo(userId)
      );
      
      const unsubscribe = onValue(tasksQuery, (snapshot) => {
        const data = snapshot.val() || {};
        
        const cacheKey = `tasks_${userId}`;
        cache.set(cacheKey, {
          data,
          timestamp: Date.now()
        });
        
        callback({ success: true, data });
      }, (error) => {
        console.error('Firebase listener error:', error);
        const errorInfo = handleError(error, 'getUserTasks');
        callback({ success: false, error: errorInfo });
      });
      
      return unsubscribe;
    } catch (error) {
      console.error('Error setting up Firebase listener:', error);
      const errorInfo = handleError(error, 'getUserTasks');
      callback({ success: false, error: errorInfo });
      return null;
    }
  },

  async addTask(taskData) {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      return { success: false, error: { message: 'Usuário não autenticado' } };
    }

    try {
      validateTask({ ...taskData, userUID: userId });

      const task = {
        taskText: taskData.taskText.trim(),
        userUID: userId,
        completed: false,
        subtasks: taskData.subtasks || [],
        createdAt: Date.now(),
        updatedAt: Date.now()
      };

      const tasksRef = ref(database, "tasks");
      const result = await push(tasksRef, task);
      
      cache.delete(`tasks_${userId}`);
      
      return { success: true, id: result.key };
    } catch (error) {
      const errorInfo = handleError(error, 'addTask');
      return { success: false, error: errorInfo };
    }
  },

  async updateTask(taskId, updates) {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      return { success: false, error: { message: 'Usuário não autenticado' } };
    }

    try {
      const taskRef = ref(database, `tasks/${taskId}`);
      
      const snapshot = await get(taskRef);
      const currentTask = snapshot.val();
      
      if (!currentTask) {
        return { success: false, error: { message: 'Tarefa não encontrada' } };
      }
      
      if (currentTask.userUID !== userId) {
        return { success: false, error: { message: 'Acesso negado: tarefa não pertence ao usuário' } };
      }

      const updatedTask = {
        ...currentTask,
        ...updates,
        userUID: userId, 
        updatedAt: Date.now()
      };

      validateTask(updatedTask);

      await set(taskRef, updatedTask);
      

      cache.delete(`tasks_${userId}`);
      
      return { success: true };
    } catch (error) {
      const errorInfo = handleError(error, 'updateTask');
      return { success: false, error: errorInfo };
    }
  },


  async deleteTask(taskId) {
    const userId = auth.currentUser?.uid;
    if (!userId) {
      return { success: false, error: { message: 'Usuário não autenticado' } };
    }

    try {
      const taskRef = ref(database, `tasks/${taskId}`);

      const snapshot = await get(taskRef);
      const task = snapshot.val();
      
      if (!task) {
        return { success: false, error: { message: 'Tarefa não encontrada' } };
      }
      
      if (task.userUID !== userId) {
        return { success: false, error: { message: 'Acesso negado: tarefa não pertence ao usuário' } };
      }

      await remove(taskRef);
      
      cache.delete(`tasks_${userId}`);
      
      return { success: true };
    } catch (error) {
      const errorInfo = handleError(error, 'deleteTask');
      return { success: false, error: errorInfo };
    }
  },

  removeListener(unsubscribe) {
    if (typeof unsubscribe === 'function') {
      unsubscribe();
    }
  }
};

export { database, auth };
export default app;
