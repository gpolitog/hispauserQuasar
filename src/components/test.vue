<template>
  <!-- root node required -->
  <div>
    <!-- youcontent -->
    <div class="layout-padding">
      <!-- if you want automatic padding -->
      <h1>test</h1>
      <h1> {{ test }} </h1>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      test: 'probando'
    }
  }
}
</script>

<style>
</style>
