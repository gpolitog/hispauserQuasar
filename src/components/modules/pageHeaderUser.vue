<template>
  <div>
    <div class="header-visual padding-m">
      <div class="contenido">

        <div class="row gutter sm-column">
          <itemUserDetail label="Bienvenid@" :caption=" fullName " v-if="userData.name">
          </itemUserDetail>
          <itemUserDetail label="Número de cliente" :caption=" userData.id " v-if=" userData.id ">
          </itemUserDetail>
          <itemUserDetail label="Membresía" :caption=" userData.membresia.id " v-if=" userData.membresia.id ">
          </itemUserDetail>
        </div>
        <p class="md-subheading" v-if="pageDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi labore recusandae corporis possimus, facilis veritatis ut dolore, voluptate mollitia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import itemUserDetail from './itemUserDetail'
  export default {
    props: {
      pageTitle: null,
      pageDescription: null
    },
    data () {
      return {
        userData: this.$store.state.user
      }
    },
    computed: {
      fullName: function () {
        return this.userData.name + ' ' + this.userData.lastname + ' ' + this.userData.motherlastname
      }
    },
    methods: {
    },
    components: {
      itemUserDetail
    }
  }
</script>

<style lang="scss">

  .header-visual {
    min-height:100px;
    position: relative;
    color:white;
  }
</style>
