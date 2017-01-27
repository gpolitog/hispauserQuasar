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
  import { Dialog } from 'quasar'

  export default {
    data () {
      return {
        post: [],
        currentPost: true
      }
    },
    computed: {
      titulopagina () {
        return this.$store.state.currentPageTitle
      },
      isFullfilled () {
        return this.currentPost.isConfigured
      }
    },
    created () {
      // fetch the data when the view is created and the data is
      // already being observed
      this.fetchData()
    },
    watch: {
      // call again the method if the route changes
      'currentPost.isConfigured': 'handler',
      '$route': 'fetchData'
    },
    mounted () {

    },
    methods: {
      fetchData () {
        this.post = this.$store.getters.currentProduct
        var current
        var elPost
        this.post.forEach(function (element) {
          current = element.title
          elPost = element
        })
        this.currentPost = elPost
        this.$store.commit('ACTUALIZATITULO', current)
      },
      handler () {
        console.log('click')
        var self = this
        Dialog.create({
          title: 'Necesitas configurar este producto antes de poder usarlo',
          form: {
            name: {
              type: 'textbox',
              label: 'Textbox',
              model: ''
            },
            pass: {
              type: 'password',
              label: 'Password',
              model: ''
            },
            age: {
              type: 'numeric',
              label: 'Numeric',
              model: 10,
              min: 1,
              max: 100
            },
            tags: {
              type: 'chips',
              label: 'Chips',
              model: ['Joe', 'John']
            },
            comments: {
              type: 'textarea',
              label: 'Textarea',
              model: ''
            }
          },
          buttons: [
            'Cancel',
            {
              label: 'Ok',
              handler (data) {
                // Toast.create('Returned ' + JSON.stringify(data))
                // data.name is 'Quasar'
                // data.pass is 'rulz!'
                // data.age is 1
                // data.tags is ['Joe', 'John'],
                // data.comments is 'Some comments...'
              }
            }
          ]
        })
      }
    },
    components: {
      pageHeader
    }
}
</script>