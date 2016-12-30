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

    <router-view class="layout-view">
    </router-view>
    
  </q-layout>
</template>

<script>
import drawerMenu from '../../modules/drawerMenu'

export default {
  data () {
    return {
      test: 'probando'
    }
  },
  computed: {
    titulopagina () {
      return this.$store.state.currentPageTitle
    }
  },
  components: {
    drawerMenu
  }
}
</script>

<style lang="styl">

</style>
