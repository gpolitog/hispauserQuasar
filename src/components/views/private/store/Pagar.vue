<template>
  <div>
    <div class="layout-padding">
        <div class="card">
          <div class="card-content">
            <div class="row gutter sm-column">
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Pedido:</b> Subtotal (1 producto): 
                  <span class="label bg-orange text-white">$2,384.29</span>
                  
                </div>
              </div>
              <div class="auto text-right">

                <button class="primary"  v-link=" '/usuario/tienda/pago-resultado'" >
                  Finalizar pedido
                </button>
              </div>
            </div>

            <div class="row gutter sm-column">
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Dirección de envio</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                  <router-link to="/usuario/perfil/direcciones">
                    Cambiar dirección
                  </router-link>
                </div>
              </div>
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Metodo de pago</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                  <router-link to="/usuario/perfil/metodo-pago">
                    Cambiar metodo
                  </router-link>
                </div>
              </div>
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Dirección de la tarjeta</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                  <router-link to="/usuario/perfil/direccion-tarjeta">
                    Cambiar dirección
                  </router-link>
                </div>
              </div>
            </div>

            <!-- Modulo con los datos del pedido -->
            <StoreOrderModule>
            </StoreOrderModule>

          </div>
          <div class="card-actions text-right">
            <button class="primary"  v-link=" '/usuario/tienda/pago-resultado'" >
              Finalizar pedido
            </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
// encabezado
import pageHeader from '../../../modules/pageHeader'

// Modulo con los productos de la orden
import StoreOrderModule from '../../../modules/StoreOrderModule'

// Modulo con el feed de productos para venta cruzada
import StoreProducts from '../../../modules/StoreProducts'

export default {
  data () {
    return {
      cart: [],
      features: this.$store.state.features
    }
  },
  components: {
    pageHeader,
    StoreProducts,
    StoreOrderModule
  }
}
</script>

<style>
</style>