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

              <div class="container-this" v-for="action in feature.actions" >
                <button  class="primary block"  v-link=" '/usuario/productos/' + feature.mainroute "  v-if="feature.avaiable">
                {{ action.title }} <i>launch</i>
                </button>

                 <button  class="primary block" @click="handler()" v-else>
                    {{ action.title }} <i>launch</i>
                  </button>
              </div>
             
            </div>
          </div>
        </div>
      </div>
  </div>
</template>

<script>
  import { Dialog } from 'quasar'
  export default {
    data () {
      return {
        features: this.$store.state.features
      }
    },
    methods: {
      handler () {
        console.log('click')
        var self = this
        Dialog.create({
          title: 'Tu membresía aun no cuenta con este beneficio',
          message: '¿Deseas agregarlo ahora?',
          buttons: [
            'Cancel',
            {
              label: 'Agregar beneficio',
              handler () {
                self.$router.push({path: '/usuario/tienda'})
                // empty the trash bin, yo
              }
            }
          ]
        })
      }

    },
    components: {
    }
  }
</script>

<style>
</style>
