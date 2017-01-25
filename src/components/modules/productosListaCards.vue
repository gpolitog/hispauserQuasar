<template>
  <div class="page-content">      
      <div class="layout-padding">
        <div class="infinite-scroll-activated">
          <div class="card infinite-item" v-for="feature in features">
            <img :src="feature.image" alt="" v-if="feature.image">
            <img src="../../statics/happy-woman-40s.jpg" v-else>
            <div class="card-content">
              {{ feature.title }}
            </div>
            <div class="card-actions text-right">
              <button v-for="action in feature.actions"  class="primary block"  v-link=" '/usuario/productos/' + feature.mainroute " >
                {{ action.title }} <i>launch</i>
              </button>
            </div>
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
