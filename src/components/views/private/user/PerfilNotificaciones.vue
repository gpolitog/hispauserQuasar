<template>
  <div>
    <div class="row sm-column md-column">
    <div class="width-1of5"></div>
      <div class="width-3of5">
        <!-- Datos generales -->
        <h5 class="margin-l-bottom">
          Notificaciones:
        </h5>
        <div class="card">
          <div class="card-content">
             <div class="list">
              <label class="item two-lines">
                <div class="item-content has-secondary">
                  <div>
                    SMS de ofertas
                  </div>
                  <div>Lorem ipsum</div>
                </div>
                <div class="item-secondary">
                  <q-toggle v-model="toggle" class="purple"></q-toggle>
                </div>
              </label>
              <label class="item two-lines">
                <div class="item-content has-secondary">
                  <div>
                    Suscribirte a nuestro newsletter
                  </div>
                  <div>Lorem ipsum</div>
                </div>
                <div class="item-secondary">
                  <q-toggle v-model="toggle" class="purple"></q-toggle>
                </div>
              </label>
              <label class="item two-lines">
                <div class="item-content has-secondary">
                  <div>
                    Otras notificaciones
                  </div>
                  <div>Lorem ipsum</div>
                </div>
                <div class="item-secondary">
                  <q-toggle v-model="toggle" class="purple"></q-toggle>
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
      toggle: false,
      SendDireccionSame: true
    }
  },
  watch: {

  },
  components: {

  }
}
</script>

<style>
</style>
