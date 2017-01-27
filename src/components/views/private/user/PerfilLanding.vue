<template>
  <div>
    <div class="row sm-column md-column">
    <div class="width-1of5"></div>
      <div class="width-3of5">
        <!-- Datos generales -->
        <h5 class="margin-l-bottom">
          Datos generales:
        </h5>
        <div class="card">
          <div class="card-content">
            <form action="">
                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.nombre" >
                    <label for="">Nombre</label>
                  </div>

                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Apellido</label>
                  </div>

                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.correo" >
                    <label>Correo electrónico</label>
                  </div>

                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.telefono" >
                    <label for="">Teléfono</label>
                  </div>
                  
            </form>
          </div>
          <q-transition name="slide">

          <div class="card-actions text-right" v-if="newData">
            <button class="dafault">
              Cancelar
            </button>
            <button class="primary">
              Guardar cambios
            </button>
          </div>
          </q-transition>
        </div>
        <!-- Direccion -->
        <h5 class="margin-l-bottom">
          Dirección de membresía:
        </h5>
        <div class="card">
          <div class="card-content">
            <form action="">
              <div class="floating-label">
                <input required class="full-width"  v-model="user.nombre" >
                <label for="">Calle</label>
              </div>

              <div class="row gutter sm-column">
                <div class="auto">
                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Número</label>
                  </div>
                </div>
                <div class="auto">
                   <div class="floating-label">
                      <input required class="full-width"  v-model="user.apellido" >
                      <label for="">Postal Code</label>
                    </div>
                </div>
              </div>

              <div class="row gutter sm-column">
                <div class="auto">
                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Ciudad/Condado</label>
                  </div>
                </div>
                <div class="auto">
                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Estado</label>
                  </div>
                </div>
              </div>
            </form>
          </div>
          <q-transition name="slide">
          <div class="card-actions text-right" v-if="newData">
            <button class="dafault">
              Cancelar
            </button>
            <button class="primary">
              Guardar cambios
            </button>
          </div>
          </q-transition>
        </div>

        <!-- Direccion de envio -->
        <h5 class="margin-l-bottom">
          Dirección de envio:
        </h5>
        <div class="card">
          <div class="card-content">
            <div class="row ">
              <div class="auto">
                <b>Enviar mis compras a la misma dirección de membresía</b>
              </div>
              <div class="auto text-right">
                  <q-toggle class="orange" v-model="SendDireccionSame"></q-toggle>
              </div>
            </div>

          </div>
        </div>
        <CleanColapse :opened="SendDireccionSame">
          <div class="card">
            <div class="card-content">
              <form action="">
                <div class="floating-label">
                  <input required class="full-width"  v-model="user.nombre" >
                  <label for="">Calle</label>
                </div>

                <div class="row gutter sm-column">
                  <div class="auto">
                    <div class="floating-label">
                      <input required class="full-width"  v-model="user.apellido" >
                      <label for="">Número</label>
                    </div>
                  </div>
                  <div class="auto">
                     <div class="floating-label">
                        <input required class="full-width"  v-model="user.apellido" >
                        <label for="">Postal Code</label>
                      </div>
                  </div>
                </div>

                <div class="row gutter sm-column">
                  <div class="auto">
                    <div class="floating-label">
                      <input required class="full-width"  v-model="user.apellido" >
                      <label for="">Ciudad/Condado</label>
                    </div>
                  </div>
                  <div class="auto">
                    <div class="floating-label">
                      <input required class="full-width"  v-model="user.apellido" >
                      <label for="">Estado</label>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </CleanColapse>

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
      SendDireccionSame: true
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
