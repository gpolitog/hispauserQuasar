<template>
  <div>
  <div class="layout-padding">
    <div class="card">
      <div class="card-content">
        <div class="row gutter sm-column">
          <div class="auto">
            <div class="padding-xxs-top margin-xxs-top">
              <b>Carrito:</b> Subtotal (1 producto): $2,384.29
            </div>
          </div>
          <div class="auto text-right">

            <button class="primary"  v-link=" '/usuario/tienda/pagar'" >
              Pagar ahora $2,384.29
            </button>
          </div>
        </div>
        <div class="list striped">

          <div class="item multiple-lines" v-for="n in 3">
            <i class="item-primary">supervisor_account</i>

            <div class="item-content">
              <div class="row  sm-column">
                <div class="auto">Beneficio adicional  {{n}}</div>
                <div class="auto text-left">
                  <a href="">
                    Eliminar
                  </a>
                </div>
                <div class="auto text-right">
                  <q-select class="f" type="radio" v-model="select" :options="selectOptions" ok-label="Pick" cancel-label="Neah" title="Company"></q-select>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="card-actions text-right">
        <button class="block"  v-link=" '/usuario/tienda/'" >
          Cancelar
        </button>
        <button class="primary"  v-link=" '/usuario/tienda/pagar'" >
          Pagar ahora
        </button>
      </div>
    </div>
    <h6>Tambien te podría interesar</h6>
    <StoreProducts>
    </StoreProducts>

  </div>
  </div>
</template>

<script>
import pageHeader from '../../../modules/pageHeader'
import StoreProducts from '../../../modules/StoreProducts'
export default {
  data () {
    return {
      select: 'fb',
      selectOptions: [
        {
          label: '1',
          value: 'goog'
        },
        {
          label: '1',
          value: 'fb'
        },
        {
          label: '1',
          value: 'twtr'
        },
        {
          label: '1',
          value: 'appl'
        },
        {
          label: '1',
          value: 'ora'
        }
      ]
    }
  },
  components: {
    pageHeader,
    StoreProducts
  }
}

</script>

<style>
</style>
