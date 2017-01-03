// === DEFAULT / CUSTOM STYLE ===
// WARNING! always comment out ONE of the two require() calls below.
// 1. use next line to activate CUSTOM STYLE (./src/themes)
// require(`./themes/app.${__THEME}.styl`)
// 2. or, use next line to activate DEFAULT QUASAR STYLE
require(`quasar/dist/quasar.${__THEME}.css`)
// ==============================

import Vue from 'vue'
import Quasar from 'quasar'
import {sync} from 'vuex-router-sync'
import router from './router'
import store from './components/store'
import VueResource from 'vue-resource'

Vue.use(Quasar) // Install Quasar Framework
sync(store, router)
Vue.use(VueResource)

Quasar.start(() => {
  /* eslint-disable no-new */
  new Vue({
    el: '#q-app',
    router,
    store,
    render: h => h(require('./App'))
  })
})

router.beforeEach((to, from, next) => {
  Vue.nextTick(function () {
    /*
    *  Agregar clase al body segun la ruta destino
    */

    var destino = to.name // ruta de destino desde el beforeEach
    var origen = from.name // ruta de origen desde el beforeEach

    /*
    *  Si el orign es undefined (Ej. Home) se agrega clase temporal
    */
    if (origen === undefined) {
      document.body.className += ' saltando'
      origen = 'saltando'
    }

    /*
    *  Switch de class del body reemaplazando el origen por el destino
    */
    document.body.className = document.body.className.replace(origen, destino)

    // Salida del beforeEach - Mandatorio
    next()
  })
})
