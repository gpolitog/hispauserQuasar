<template>
  <div>
  <div class="OrderModule padding-m-top">
      <b>Tu pedido</b>
      <div class="list striped">

        <div class="item multiple-lines" v-for="n in 3">
          <i class="item-primary">supervisor_account</i>

          <div class="item-content">
            <div class="row  sm-column">
              <div class="auto">Beneficio adicional  {{n}}</div>
              <div class="auto text-left">
              </div>
              <div class="auto text-right">

              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="padding-xs-top" v-if="!isSucces">
        <router-link to="/usuario/tienda/carrito">
          Modificar pedido
        </router-link>  
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    isSucces: Boolean
  },
  data () {
    return {}
  }
}
</script>

<style>
</style>
