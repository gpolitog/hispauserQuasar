<template>
  <div>
    <q-transition name="slide">
      <div class="" v-show="!active">
        <slot></slot>
      </div>
    </q-transition>
  </div>
</template>

<script>
  export default {
    props: {
      opened: Boolean
    },
    data () {
      return {
        active: this.opened
      }
    },
    watch: {
      opened (value) {
        this.active = value
      }
    },
    methods: {
      toggle () {
        this.active = !this.active
      },
      open () {
        this.active = true
      },
      close () {
        this.active = false
      }
    }
  }
</script>

<style>
</style>
