<template>
  <div>
    <div class="cont" v-for="item in post">
      <h1> Desde el for {{  item.title  }}</h1>

      <h2> desde el store {{ titulopagina }}</h2>
      <div v-for="action in item.actions" >
        <a>
          {{ action.title }}
        </a>
      </div>
    </div>
  </div>
</template>

<script>
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
    }
}
</script>

<style>
</style>
