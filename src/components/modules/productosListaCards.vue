<template>
  <div class="page-content">
      <pageHeader pageTitle="Usuarios" pageDescription="" >
      </pageHeader>
      <div class="layout-padding">
        <div class="infinite-scroll-activated">
          <div class="card infinite-item" v-for="feature in features">
            <img src="../../statics/happy-woman-40s.jpg">
            <div class="card-content">
              {{ feature.title }}
            </div>
            <div class="card-actions text-right">
              <button v-for="action in feature.actions"  class="white block"  v-link=" '/usuario/productos/' + feature.mainroute " >
                {{ action.title }}
              </button>            
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import pageHeader from './pageHeader'
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
