<template>
  <div>
    <div class="row sm-column md-column">
    <div class="width-1of5"></div>
      <div class="width-3of5">
        <!-- Datos generales -->
        <h5 class="margin-l-bottom">
          Metodos de pago:
        </h5>
        <div class="card">
          <div class="card-content">
            <b>Selecciona tu metodo favorito de pago</b>
           <div class="list">

            <label class="item two-lines">
              <div class="item-primary">
                <q-radio v-model="option" val="opt1"></q-radio>
              </div>
              <div class="item-content">
                <div>PayPal</div>
                <div>Allows notifications</div>
              </div>
            </label>

            <label class="item two-lines">
              <div class="item-primary">
                <q-radio v-model="option" val="opt2"></q-radio>
              </div>
              <div class="item-content">
                <div>Pago en OXXO</div>
                <div>Allows notifications</div>
              </div>
            </label>

            <label class="item two-lines">
              <div class="item-primary">
                <q-radio v-model="option" val="opt3"></q-radio>
              </div>
              <div class="item-content">
                <div>Pago en efectivo</div>
                <div>Allows notifications</div>
              </div>
            </label>

          </div>
          </div>
        </div>
      </div>
    </div>


  </div>
</template>

<script>
import pageHeaderUser from '../../../modules/pageHeaderUser'
import CleanColapse from '../../../modules/CleanColapse'
export default {
  data () {
    return {
      user: {
        nombre: 'Juan',
        apellido: 'Perez',
        correo: 'usuario@dominio.com',
        telefono: '5555 5555'
      },
      newData: false,
      SendDireccionSame: true,
      option: 'opt1',
      selectOptions: [
        {
          label: 'Google',
          value: 'goog'
        },
        {
          label: 'Facebook',
          value: 'fb'
        },
        {
          label: 'Twitter',
          value: 'twtr'
        },
        {
          label: 'Apple Inc.',
          value: 'appl'
        },
        {
          label: 'Oracle',
          value: 'ora'
        }
      ]
    }
  },
  watch: {
    'user': {
      handler: function (val) {
        console.log('cambio el user')
        this.newData = true
      },
      deep: true
    }
  },
  components: {
    pageHeaderUser,
    CleanColapse
  }
}
</script>

<style>
</style>
