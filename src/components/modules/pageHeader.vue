<template>
  <div>
    <div class="header-visual padding-m">
      <div class="contenido">
        <h1 class="md-display-1 padding-m-top padding-m-bottom" v-if="pageTitle">
          {{ pageTitle }}
        </h1>
        <p class="md-subheading" v-if="pageDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi labore recusandae corporis possimus, facilis veritatis ut dolore, voluptate mollitia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      pageTitle: null,
      pageDescription: null
    },
    data () {
      return {}
    }
  }
</script>

<style lang="scss">

  .header-visual {
    // background-image: url('/statics/happy-woman-40s.jpg');
    // background-size: cover;
    min-height:100px;
    position: relative;
    // color:white;
  }
</style>
