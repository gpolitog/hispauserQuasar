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
        Usuariooooooo -- > {{ titulopagina }}
      </q-toolbar-title>
    </div>

    <!-- <q-drawer ref="drawer" swipe-only> -->
    <q-drawer ref="drawer" >
      <div class="toolbar">
        <q-toolbar-title>
          Drawer Title
        </q-toolbar-title>
      </div>
      <drawerMenu>
      </drawerMenu>
    </q-drawer>

    <div class="layout-view">
      <productosListaCards v-if="this.$route.path === '/usuario'">
      </productosListaCards>

      <router-view  name="main">
      </router-view>

      <router-view name="secondary">
      </router-view>

    </div>

    
  </q-layout>
</template>

<script>
import drawerMenu from '../../modules/drawerMenu'
import productosListaCards from '../../modules/productosListaCards'

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
      console.log('estas aquí' + this.$route.path)
    }
  },
  components: {
    drawerMenu,
    productosListaCards
  }
}
</script>

<style lang="scss">

</style>
