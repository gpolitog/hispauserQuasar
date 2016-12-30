<template>
  <!-- root node required -->
  <div>
    <!-- your content -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h1>Ingresando</h1>
      <h4>
        
        <router-link :to="{path: '/usuario'}">
          <span>ingresar </span>
        </router-link>
      </h4>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {}
  }
}
</script>

<style>
</style>
