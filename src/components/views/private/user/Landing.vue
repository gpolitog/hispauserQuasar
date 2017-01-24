<template>
  <!-- root node required -->
  <div>
    <productosListaCards >
    </productosListaCards>
    <div class="layout-padding">
      <div class="row gutter sm-column">
        <div class="width-2of3">
          <div class="card">
            <div class="card-content">
              <h5 class="padding-l-bottom">Nuestros ultimos descuentos</h5>
              <div class="card">
                <div class="list striped">
                  <div class="item item-link" v-for="n in 6">
                    <div class="item-content">

                      Descuento en {{n}}
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </div>
        </div>
        <div class="auto">
          <div class="card">
            <div class="card-content">
              <h5 class="padding-l-bottom">
                ¿Deseas unirte a nuestra red de distribuidores?
              </h5>
              <p>
                Registrate ahora y empieza a ganar más dinero.

              </p>
            </div>
            <div class="card-actions text-right">
              <button   class="primary block"  v-link=" '/usuario/productos/' " >
                Empieza a ganar más
              </button>
            </div>
          </div>
        </div>
      </div>

      
    </div>
  </div>
</template>

<script>
import productosListaCards from '../../../modules/productosListaCards'

export default {
  data () {
    return {}
  },
  components: {
    productosListaCards
  }

}
</script>

<style lang="scss">
.card {
  background:white;
}

</style>
