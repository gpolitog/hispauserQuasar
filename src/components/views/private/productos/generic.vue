<template>
  <div>
    <div class="page-content" v-for="item in post">
      <pageHeader :pageTitle=" item.title " :pageDescription="item.description" >
      </pageHeader>
      <div class="layout-padding">
        <div v-for="action in item.actions" >
          <a>
            {{ action.title }}
          </a>
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