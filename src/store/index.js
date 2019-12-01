import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
      if (new Date(task.date) > new Date()) {
        const status = 'active'
        return { ...task, status }
      } else {
        const status = 'expired'
        return { ...task, status }
      }
    })
  },
  mutations: {
    createTaskMutation(state, task) {
      state.tasks.push(task);
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    updateTaskMutation(state, { id, date, description, tags }) {
      const status = new Date(date) > new Date() ? 'active' : 'expired';
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          return { ...task, date, description, status, tags }
        } else {
          return { ...task }
        }
      });
      // let tasks = state.tasks.concat()
      // let index = tasks.findIndex(task => task.id === id)
      // state.tasks[index] = { ...state.tasks[index], date, description, status }
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    },
    completeTaskMutation(state, id) {
      state.tasks = state.tasks.map(task => {
        if (task.id === id) {
          const status = 'completed';
          return { ...task, status }
        } else {
          return { ...task }
        }
      });
      localStorage.setItem('tasks', JSON.stringify(state.tasks));
    }


  },
  actions: {
    createTask(param, task) {
      param.commit('createTaskMutation', task)
    },
    updateTask(param, task) {
      param.commit('updateTaskMutation', task)
    },
    completeTask(param, id) {
      param.commit('completeTaskMutation', id)
    }
  },
  getters: {
    tasks: state => state.tasks,
    getTaskById: state => id => state.tasks.find(task => task.id === id)
  },
  modules: {
  }
})
