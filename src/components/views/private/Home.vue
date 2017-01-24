<template>
  <q-layout>
    <div slot="header" class="toolbar">
      <button
      class=""
      @click="$refs.drawer.open()"
    >
      <i>menu</i>
    </button>
      <q-toolbar-title :padding="1">
        Hispano Club - {{ titulopagina }}
      </q-toolbar-title>
    </div>

    <q-drawer ref="drawer" swipe-only>
    <!-- <q-drawer ref="drawer" > -->
      <div class="toolbar">
        <q-toolbar-title>
          Hispano Club
        </q-toolbar-title>
      </div>
      <drawerMenu>
      </drawerMenu>
    </q-drawer>

    <div class="layout-view">
      

      <q-transition name="slide">
        <router-view  name="main">
        </router-view>
        <router-view name="secondary">
        </router-view>
      </q-transition>

      

    </div>


  </q-layout>
</template>

<script>
import drawerMenu from '../../modules/drawerMenu'

export default {
  data () {
    return {}
  },
  created () {
    this.ontoy()
  },
  computed: {
    titulopagina () {
      return this.$store.state.currentPageTitle
    }
  },
  methods: {
    ontoy () {
      // console.log('estas aquí', this.$store.state)
    }
  },
  components: {
    drawerMenu
  }
}
</script>

<style lang="scss">
</style>
