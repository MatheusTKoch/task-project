export default {
  async loginUser(context, data) {
    const user = {
      email: data[0],
      password: data[1],
      returnSecureToken: true,
    };

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBdZwMm5w7vRAmiRJXDlUr8NGcRPffqGCs",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    console.log(response);
  },
  async addNewUser(context, data) {
    const user = {
      email: data[0],
      password: data[1],
      returnSecureToken: true,
    };

    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBdZwMm5w7vRAmiRJXDlUr8NGcRPffqGCs",
      {
        method: "POST",
        body: JSON.stringify(user),
      }
    );

    context.commit("addUser", user);
    console.log(response);
  },
  async loadUsers() {
    
  }
};
