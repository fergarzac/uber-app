import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)
export const store = new Vuex.Store({
    state: {
        id:0,
        nombre: 0,
        grupo: 0,
        tipo: 0
    },
    getters: {
      getId(state) {
          return state.id;
      },
      getNombre: (state) => {
          return state.nombre;
      },
      getGrupo: (state) => {
          return state.grupo;
      },
      getTipo: (state) => {
          return state.tipo;
      }
    },
    mutations: {
      setId (state, id) {
        state.id = id
      },
      setNombre (state, nombre) {
        state.nombre = nombre
      },
      setGrupo (state, grupo) {
        state.grupo = grupo
      },
      setTipo (state, tipo) {
        state.tipo = tipo
      }
    }
  });