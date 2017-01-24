<template>
  <div>
    <div class="page-content" v-for="item in post">
      <pageHeader :pageTitle=" item.title " :pageDescription="item.description" >
      </pageHeader>

      <div class="layout-padding">
      <div class="row gutter sm-column">
        <div class="">
          <h5>
          Utiliza tus beneficios ahora:
            <button v-for="action in item.actions"  class="primary"  v-link=" '/usuario/productos/' + item.mainroute " >
                {{ action.title }}
              </button>            
          </h5>
        </div>
      </div>
      <div class="row gutter sm-column">
        <div class="width-2of3">
          <div class="card">
            <div class="card-content">
              <h5 class="padding-l-bottom">Lista de items del producto</h5>
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
  </div>
</template>

<script>
  import pageHeader from '../../../modules/pageHeader'

  export default {
    data () {
      return {
        post: []
      }
    },
    computed: {
      titulopagina () {
        return this.$store.state.currentPageTitle
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      '$route': 'fetchData'
    },
    methods: {
      fetchData () {
        this.post = this.$store.getters.currentProduct
        var current
        this.post.forEach(function (element) {
          current = element.title
        })
        this.$store.commit('ACTUALIZATITULO', current)
      }
    },
    components: {
      pageHeader
    }
}
</script>