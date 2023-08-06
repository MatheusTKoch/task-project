import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
    namespace: true,
    state() {
        return {
            taskArray: [],
            taskText: ""
        }
    },
    actions,
    getters,
    mutations
}

