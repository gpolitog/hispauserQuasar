<template>
  <div>
    <div class="row sm-column md-column">
    <div class="width-1of5"></div>
      <div class="width-3of5">
        <!-- Datos generales -->
        <h5 class="margin-l-bottom">
          Cambiar contraseña:
        </h5>
        <div class="card">
          <div class="card-content">
            <form action="">
                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.nombre" >
                    <label for="">Contraseña actual</label>
                  </div>

                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Nueva contraseña</label>
                  </div>

                  <div class="floating-label">
                    <input required class="full-width"  v-model="user.apellido" >
                    <label for="">Repite la nueva contraseña</label>
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
