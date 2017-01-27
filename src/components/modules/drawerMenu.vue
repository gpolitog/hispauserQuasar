<template>
  <div class="list no-border platform-delimiter">
    

    <q-drawer-link icon="mail" :to="{path: '/usuario', exact: true}">
      Inicio
    </q-drawer-link>


    <q-drawer-link icon="mail" :to="{path: '/usuario/tienda', exact: true}">
      Tienda
    </q-drawer-link>

    <q-drawer-link icon="mail" :to="{path: '/usuario/familia', exact: true}">
      Familia
    </q-drawer-link>

    <div v-for="feature in features">
      <q-drawer-link icon="mail" :to="{path: '/usuario/productos/' +feature.mainroute, exact: true}">
        {{ feature.title }}
      </q-drawer-link>
    </div>

    <q-drawer-link icon="mail" :to="{path: '/ingresar', exact: true}">
      Ingresar
    </q-drawer-link>

    <q-drawer-link icon="mail" :to="{path: '/registrar', exact: true}">
      Registrar
    </q-drawer-link>


    <q-drawer-link icon="mail" :to="{path: '/recuperar-contrasena', exact: true}">
      Recuperar Contrasena
    </q-drawer-link>


  </div>
</template>

<script>
  export default {
    data: function () {
      return {
        features: this.$store.state.features
      }
    }
  }
</script>

<style>
</style>
