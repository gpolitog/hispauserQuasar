<template>
  <div>
    <q-tabs  class="justified inverted red"> 
      <q-tab route="/usuario/perfil" exact >
        Perfil
      </q-tab>

      <q-tab route="/usuario/perfil/contrasena" exact >
        Contraseña
      </q-tab>

      <q-tab route="/usuario/perfil/notificaciones" exact >
        Notificaciones
      </q-tab>

      <q-tab  route="/usuario/perfil/metodo-pago" exact >
        Metodos de pago
      </q-tab>

    </q-tabs>
    <div class="layout-padding">
      <q-transition name="slide">
        <router-view  name="PerfilTop">
        </router-view>
      </q-transition>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
    }
  },
  components: {
  }
}

</script>

<style>
</style>
