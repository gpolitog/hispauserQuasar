<template>
  <div>
    <pageHeader pageTitle="Tienda HispanoClub" pageDescription="Compra beneficios adicionales para tu membresía" >
    </pageHeader>

    <div class="layout-padding">
      <StoreProducts>
      </StoreProducts>
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