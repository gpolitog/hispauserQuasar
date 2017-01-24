<template>
  <div>
    <div class="header-visual product padding-m">
      <div class="contenido">
        <h1 class="md-display-1 padding-m-top padding-m-bottom" v-if="pageTitle">
          {{ pageTitle }}
        </h1>
        <p class="md-subheading" v-if="pageDescription">
         {{pageDescription}}
         <br>
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
    position: relative;
    &.product {
      min-height:150px;
      background-image: linear-gradient(-187deg, #3023AE 0%, #53A0FD 47%, #B4EC51 99%);  
      color:white;
    }
  }
</style>
