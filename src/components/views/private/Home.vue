<template>
  <q-layout>
    <div slot="header" class="toolbar inverted primary">
      <button class="" @click="$refs.drawer.open()">
        <i>menu</i>
      </button>
      
      <q-toolbar-title :padding="1">
        <router-link to="/usuario">
          <img src="statics/logo-sitio.png" alt="">
          <!-- {{ titulopagina }} -->
        </router-link>
      </q-toolbar-title>

      <button ref="target" class="">
        <i>apps</i>
        <q-popover ref="HispanoApps">
          <!--
            The DOM element(s) that make up the Dropdown menu,
            in this case a list
          -->
          <div class="list highlight" style="min-width: 150px">
            <div class="item item-link two-lines item-delimiter" @click="$refs.HispanoApps.close()">
              <div class="item-content">
                <div>Hispano Club News</div>
                <div>Noticias & actualidad hispana</div>
              </div>
            </div>
            <div class="item item-link two-lines item-delimiter" @click="$refs.HispanoApps.close()">
              <div class="item-content">
                <div>Hispano Card</div>
                <div>Tarjeta prepago</div>
              </div>
            </div>
          </div>
        </q-popover>
      </button>
    </div>

    <q-drawer ref="drawer" swipe-only>
    <!-- <q-drawer ref="drawer" > -->
      <div class="toolbar light text-center">
        <q-toolbar-title>
          <div class="padding-s">
            <router-link to="/usuario" >
              <img src="statics/logo-sitio.png" alt="">
            </router-link>
          </div>
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
