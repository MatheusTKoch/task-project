import actions from './actions.js';
import getters from './getters.js';
import mutations from './mutations.js';

export default {
    data () {
        return {
            taskArray: [],
            taskText: ""
        }
    },
    actions,
    getters,
    mutations
}

