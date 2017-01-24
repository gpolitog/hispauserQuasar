import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  count: 0,
  currentPageTitle: null,
  session: {
    token: 98789789
  },
  user: {
    id: 756474,
    name: 'Zairuchis',
    lastname: 'Zairuch',
    motherlastname: 'Zairuvich',
    profileComplete: false,
    membership: {
      id: 9099,
      status: 'active', // inactive
      life: {
        activation: '',
        expiration: ''
      },
      kind: {
        type: 'family',  // individual
        subtype: 'plus' // o estandar
      },
      // family ->
      slots: 2,
      slotsasigned: [
        {
          id: 0,
          name: 'Esteban',
          lastname: 'Paterno',
          motherlastname: 'Materno',
          status: 'active', // inactive
          card: {
            id: 8799,
            type: 'digital', // fisica
            kind: 'individual',
            number: '8767876787678767',
            status: 'active'
          }
        },
        {
          id: 1,
          name: 'Pancho',
          lastname: 'Paterno',
          motherlastname: 'Materno',
          status: 'active', // inactive
          card: {
            id: 8799,
            type: 'digital', // fisica
            kind: 'individual',
            number: '8767876787678767',
            status: 'active'
          }
        },
        {
          id: 2,
          name: 'Juana',
          lastname: 'Paterno',
          motherlastname: 'Materno',
          status: 'active', // inactive
          card: {
            id: 8799,
            type: 'digital', // fisica
            kind: 'individual',
            number: '8767876787678767',
            status: 'active'
          }
        }
      ]
    }
  },
  features: [
    {
      id: 0,
      title: 'Llama al Doctor',
      subtitle: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit.',
      mainroute: 'llama-al-doctor',
      image: '/statics/llama-doctor.jpg',
      actions: [
        {
          title: 'Llamar al Doctor',
          route: '/ingresar'
        }
      ]
    },
    {
      id: 1,
      title: 'Red de Descuentos',
      subtitle: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit.',
      mainroute: 'red-de-descuentos',
      image: '/statics/descuentos.jpg',
      actions: [
        {
          title: 'Buscar descuentos',
          route: '/ingresar'
        }
      ]
    },
    {
      id: 2,
      title: 'Salud Dental',
      subtitle: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit.',
      mainroute: 'salud-dental',
      image: '/statics/salud-dental.jpg',
      actions: [
        {
          title: 'Agendar consulta',
          route: '/ingresar'
        }
      ]
    },
    {
      id: 3,
      title: 'Salud Visual',
      subtitle: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit.',
      mainroute: 'salud-visual',
      image: '/statics/salud-visual.jpg',
      actions: [
        {
          title: 'Agendar consulta',
          route: '/ingresar'
        }
      ]
    },
    {
      id: 4,
      title: 'Repatriación funeraria',
      subtitle: 'Lorem ipsum dolor.',
      description: 'Lorem ipsum dolor sit.',
      mainroute: 'repatriacion-funeraria',
      image: '/statics/repatriacion.jpg',
      actions: [
        {
          title: 'Solicitar',
          route: '/ingresar'
        }
      ]
    }
  ]
}

const mutations = {
  INCREMENT (state) {
    state.count++
  },
  DECREMENT (state) {
    state.count--
  },
  ACTUALIZATITULO (state, message) {
    state.currentPageTitle = message
  }
}

const getters = {
  currentProduct: state => {
    var url = state.route.params.producto // return url
    return state.features.filter(feature => feature.mainroute === url)
  },
  currentUrl: state => state.route.params.producto
}

const actions = {
  incrementAsync ({ commit }) {
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
