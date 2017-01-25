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

                <button class="primary"  v-link=" '/usuario/tienda/pagar'" >
                  Finalizar pedido
                </button>
              </div>
            </div>

            <div class="row gutter sm-column">
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Dirección de envio</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                </div>
              </div>
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Metodo de pago</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                </div>
              </div>
              <div class="auto">
                <div class="padding-xxs-top margin-xxs-top">
                  <b>Dirección de la tarjeta</b>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis veniam in ex, ab rem laudantium illo est voluptatem id vitae.</p>
                </div>
              </div>
            </div>
            <b>Tu pedido</b>
            <div class="list striped">

              <div class="item multiple-lines" v-for="n in 3">
                <i class="item-primary">supervisor_account</i>

                <div class="item-content">
                  <div class="row  sm-column">
                    <div class="auto">Beneficio adicional  {{n}}</div>
                    <div class="auto text-left">
                    </div>
                    <div class="auto text-right">

                    </div>

                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="card-actions text-right">
            <button class="primary"  v-link=" '/usuario/tienda/pagar'" >
              Finalizar pedido
            </button>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '../../../modules/pageHeader'
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
    StoreProducts
  }
}
</script>

<style>
</style>