import Vue from 'vue'
import Vuex from 'vuex'
import { Machine } from 'xstate';

Vue.use(Vuex)

const lightMachine = Machine({
  key: "light",
  initial: "green",
  states: {
    green: {
      on: {
        TIMER: "yellow"
      }
    },
    yellow: {
      on: {
        TIMER: "red"
      }
    },
    red: {
      on: {
        TIMER: "green"
      }
    }
  }
})

export default new Vuex.Store({
  state: {
    currentState: lightMachine.initial
  },
  mutations: {
    transition(state, action) {
      state.currentState = lightMachine.transition(state.currentState, action).value
    }
  },
  getters: {
    getlightMachine: (state, getters) => {
      return lightMachine
    }
  },
})
