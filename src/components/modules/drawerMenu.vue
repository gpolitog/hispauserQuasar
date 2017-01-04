<template>
  <div class="list no-border platform-delimiter">
    <q-drawer-link icon="mail" :to="{path: '/ingresar', exact: true}">
      Ingresar
    </q-drawer-link>

    <q-drawer-link icon="mail" :to="{path: '/registrar', exact: true}">
      Registrar
    </q-drawer-link>


    <q-drawer-link icon="mail" :to="{path: '/recuperar-contrasena', exact: true}">
      Recuperar Contrasena
    </q-drawer-link>

    <q-drawer-link icon="mail" :to="{path: '/usuario', exact: true}">
      Usuario
    </q-drawer-link>
    <q-drawer-link icon="mail" :to="{path: '/usuario/productos', exact: true}">
      Productos
    </q-drawer-link>

    <div v-for="feature in features">
      <q-drawer-link icon="mail" :to="{path: '/usuario/productos/' +feature.mainroute, exact: true}">
        {{ feature.title }}
      </q-drawer-link>
    </div>
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
