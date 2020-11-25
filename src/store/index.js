import { createStore } from 'vuex'

export default createStore({
  state: {
    contador: 400
  },
  mutations: {
    incrementarContador(state, payload){
      state.contador = state.contador + payload;
    },
    disminuirContador(state, payload){
      state.contador = state.contador - payload;
    }
  },
  actions: {
    actionIncrementar({commit}){
      commit('incrementarContador', 100);
    },
    actionDisminuir({commit}, numero){
      commit('disminuirContador', numero);
    },
    actionBtn({commit}, objeto){
      if (objeto.estado) {
        commit('incrementarContador', objeto.numero);
      } else {
        commit('disminuirContador', objeto.numero);
      }
    }
  },
  modules: {
  }
})
