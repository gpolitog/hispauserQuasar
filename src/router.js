import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from './components/Index'
import ingresar from './components/views/public/ingresar'
import registrar from './components/views/public/registrar'
import recuperarContrasena from './components/views/public/recuperarContrasena'
import Home from './components/views/private/Home'
import generic from './components/views/private/productos/generic'
import Landing from './components/views/private/user/Landing'
import Store from './components/views/private/store/Store'

Vue.use(VueRouter)

// function load (component) {
//   return () => System.import(`components/${component}.vue`)
// }

export default new VueRouter({
  /*
   * NOTE! VueRouter "history" mode DOESN'T works for Cordova builds,
   * it is only to be used only for websites.
   *
   * If you decide to go with "history" mode, please also open /config/index.js
   * and set "build.publicPath" to something other than an empty string.
   * Example: '/' instead of current ''
   *
   * If switching back to default "hash" mode, don't forget to set the
   * build publicPath back to '' so Cordova builds work again.
   */
  mode: 'hash',

  routes: [
    { path: '/', component: ingresar }, // Default
    // { path: '*', component: load('Error404') }, // Not found
    {
      path: '/ingresar',
      component: ingresar,
      name: 'ingresar'
    },
    {
      path: '/registrar',
      component: registrar,
      name: 'registrar'
    },
    {
      path: '/recuperar-contrasena',
      component: recuperarContrasena,
      name: 'recuperar-contrasena'
    },
    // toda las rutas privadas van dentro del usuario
    {
      path: '/usuario',
      component: Home,
      // name: 'usuario',
      children: [
        {
          path: '',
          components: {
            main: Landing
          },
          name: 'Landing'
        },
        {
          path: 'perfil',
          components: {
            main: generic
          },
          name: 'Perfil'
        },
        {
          path: 'productos',
          components: {
            main: generic
          },
          name: 'productos'
        },
        {
          path: 'productos/:producto',
          components: {
            main: generic
          },
          name: 'producto'
        },
        // tienda
        {
          path: 'tienda',
          components: {
            main: Store
          },
          name: 'Tienda'
        }
      ]
    }
  ]
})
