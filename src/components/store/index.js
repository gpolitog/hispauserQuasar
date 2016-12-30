import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)

const state = {
  count: 0,
  features: [{
    id:0,
    done: true,
    title: 'Llama al Doctor',
    subtitle: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit.',
    mainroute: 'llama-al-doctor',
    actions:[{
      title: 'accion 1',
      route: '/ingresar',
      callback : function(){
        console.log("1");
      }
    },
    {
      title: 'accion 2',
      route: '/ingresar',
      callback : function(){
        console.log("2");
      }
    }]
  },{
    id:1,
    title: 'Red de Descuentos',
    subtitle: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit.',
    mainroute: 'red-de-descuentos',
    actions:[{
      title: 'accion 1',
      route: '/ingresar',
      callback : function(){
        console.log("1");
      }
    },
    {
      title: 'accion 2',
      route: '/ingresar',
      callback : function(){
        console.log("2");
      }
    }]
  },{
    id:2,
    title: 'Salud Dental',
    subtitle: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit.',
    mainroute: 'salud-dental',
    actions:[{
      title: 'accion 1',
      route: '/ingresar',
      callback : function(){
        console.log("1");
      }
    },
    {
      title: 'accion 2',
      route: '/ingresar',
      callback : function(){
        console.log("2");
      }
    }]
  },{
    id:3,
    title: 'Salud Visual',
    subtitle: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit.',
    mainroute: 'salud-visual',
    actions:[{
        title: 'accion 1',
        route: '/ingresar',
        callback : function(){
          console.log("1");
        }
      },
      {
        title: 'accion 2',
        route: '/ingresar',
        callback : function(){
          console.log("2");
        }
      }]
  },{
    id:4,
    title: 'Repatriación funeraria',
    subtitle: 'Lorem ipsum dolor.',
    description: 'Lorem ipsum dolor sit.',
    mainroute: 'repatriacion-funeraria',
    actions:[{
      title: 'accion 1',
      route: '/ingresar',
      callback : function(){
        console.log("1");
      }
    },
    {
      title: 'accion 2',
      route: '/ingresar',
      callback : function(){
        console.log("2");
      }
    }]
  }]
}

const mutations = {
  INCREMENT(state) {
    state.count++
  },
  DECREMENT(state) {
    state.count--
  }
}
const getters = {
  doneTodos: state => {
      var url = state.route.params.beneficio
      // return url
      return state.features.filter(feature => feature.mainroute === url)
  },
  currentUrl: state => state.route.params.beneficio
}

const actions = {
  incrementAsync({commit}) {
    setTimeout(() => {
      commit('INCREMENT')
    }, 200)
  }
}

const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
})

export default store
