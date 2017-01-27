import Vue from 'vue'
import VueRouter from 'vue-router'
// import Index from './components/Index'

// Public
// login y registro
import ingresar from './components/views/public/ingresar'
import registrar from './components/views/public/registrar'
import recuperarContrasena from './components/views/public/recuperarContrasena'

// Private
import Home from './components/views/private/Home' // layout de private
import Landing from './components/views/private/user/Landing' // landing al entrar
import generic from './components/views/private/productos/generic' // vista generica de productos

// Perfil
import Perfil from './components/views/private/user/Perfil' // layout de la tienda
import PerfilLanding from './components/views/private/user/PerfilLanding' // layout de la tienda
import PerfilDirecciones from './components/views/private/user/PerfilDirecciones' // layout de la tienda
import PerfilDireccionTarjeta from './components/views/private/user/PerfilDireccionTarjeta' // layout de la tienda
import PerfilMetodosPago from './components/views/private/user/PerfilMetodosPago' // layout de la tienda

// paginas de la tienda
import Store from './components/views/private/store/Store' // layout de la tienda
import ProductFeed from './components/views/private/store/ProductFeed' // Landing de la tienda
import Carrito from './components/views/private/store/Carrito' // Carrito
import Pagar from './components/views/private/store/Pagar' // Pago y envio
import PagoResultado from './components/views/private/store/PagoResultado' // Pago y envio

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
            main: Perfil
          },
          children: [
            {
              path: '', // Vacio por que es el default del componente
              components: {
                PerfilTop: PerfilLanding,
                PerfilBottom: PerfilDirecciones
              },
              name: 'Perfil'
            },
            {
              path: 'direcciones', // Vacio por que es el default del componente
              components: {
                PerfilTop: PerfilDirecciones
              },
              name: 'Direcciones'
            },
            {
              path: 'metodo-pago', // Vacio por que es el default del componente
              components: {
                PerfilTop: PerfilMetodosPago
              },
              name: 'MetodosPago'
            },
            {
              path: 'direccion-tarjeta', // Vacio por que es el default del componente
              components: {
                PerfilTop: PerfilDireccionTarjeta
              },
              name: 'DireccionPago'
            }
          ]
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
          // name: 'Tienda'
          children: [
            {
              path: '',
              components: {
                StoreTop: ProductFeed
              }
            },
            {
              path: 'carrito',
              components: {
                StoreTop: Carrito
              }
            },
            {
              path: 'pagar',
              components: {
                StoreTop: Pagar
              }
            },
            {
              path: 'pago-resultado',
              components: {
                StoreTop: PagoResultado
              }
            }
          ]
        }
      ]
    }
  ]
})
