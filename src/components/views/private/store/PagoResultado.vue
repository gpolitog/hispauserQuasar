<template>
  <div>
    <div class="layout-padding">
      <div class="card">
        <div class="card-content">

          <div class="succes-pay" v-if="paySuccess">
             <h5> 
              Muchas gracias por tu compra, tu pago se proceso exitosamente
              </h5>
              <div class="row gutter sm-column">
                <div class="auto">
                  <!-- Modulo con los datos del pedido -->
                  <StoreOrderModule :is-succes="true">
                  </StoreOrderModule>
                </div>
              </div>
          </div>

          <div class="succes-pay" v-if="!paySuccess">
             <h5> 
              Hubo un problema al procesar tu pago. Guardaremos tu pedido para que puedas pagarlo más tarde.
              </h5>
              <div class="row gutter sm-column">
                <div class="auto">
                  <!-- Modulo con los datos del pedido -->
                  <StoreOrderModule :is-succes="false">
                  </StoreOrderModule>
                </div>
              </div>
          </div>
         
        </div>

          <div class="card-actions text-right">

            <button class="primary"  v-link=" '/usuario'" >
              Ir a membresía
            </button>

          </div>
      </div>
    </div>
  </div>
</template>

<script>
// Modulo con los productos de la orden
import StoreOrderModule from '../../../modules/StoreOrderModule'

export default {
  data () {
    return {
      paySuccess: true
    }
  },
  components: {
    StoreOrderModule
  }
}
</script>

<style>
</style>