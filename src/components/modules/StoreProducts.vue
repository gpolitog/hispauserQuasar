<template>
  <div>
        <div class="infinite-scroll-activated">
          <div class="card infinite-item" v-for="feature in features">
            <img :src="feature.image" alt="" v-if="feature.image">
            <img src="statics/happy-woman-40s.jpg" v-else>
            <div class="card-content">
              <div class="row">
                <div class="auto">
                  {{ feature.title }} 
                </div>
                <div class="auto text-right">
                      
                </div>  
              </div>
            </div>
            <div class="card-actions text-right">
              <button class="secondary block"  v-link=" '/usuario/tienda/carrito'" >
                 <i>add_shopping_cart</i> Comprar <b> $ 400.00</b>
              </button>
            </div>
          </div>
        </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        features: this.$store.state.features
      }
    },
    components: {
    }
  }
</script>

<style>
</style>
