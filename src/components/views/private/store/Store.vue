<template>
  <div>
  	<pageHeader pageTitle="Tienda HispanoClub" pageDescription="Compra beneficios adicionales para tu membresía" >
      </pageHeader>

  	<div class="layout-padding">
        <div class="infinite-scroll-activated">

          <div class="card infinite-item" v-for="feature in features">
            <img :src="feature.image" alt="" v-if="feature.image">
            <img src="statics/happy-woman-40s.jpg" v-else>
            <div class="card-content">
              {{ feature.title }}
          </div>
          <div class="card-actions text-right">
          <button class="primary block"  v-link=" '/usuario/productos/' + feature.mainroute " >
            Comprar beneficio
          </button>
              <!-- <button v-for="action in feature.actions"  class="primary block"  v-link=" '/usuario/productos/' + feature.mainroute " >
                {{ action.title }}
            </button> -->
        </div>
    </div>
</div>
  	</div>
  </div>
</template>

<script>
import pageHeader from '../../../modules/pageHeader'
export default {
  data () {
    return {
      features: this.$store.state.features
    }
  },
  components: {
    pageHeader
  }
}

</script>

<style>
</style>
