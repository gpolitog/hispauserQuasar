<template>
  <!-- root node required -->
  <div>
    <div id="login">
      <div class="login-block">
        <div class="padding-m" style="text-align:center">
          <img src="statics/logo-big-big.png" alt="" width="250px">  
        </div>
        <div class="card">
          <div class="card-title">
            <big>Activa tu membresía Hispano Club</big>
          </div>
          <div class="card-content">
            <form action="">
              <p>
              Por favor confirma y corrige tus datos
            </p>
              <div class="floating-label">
                <input required class="full-width"  v-model="user.correo" >
                <label>Correo electrónico</label>
              </div>

              <div class="floating-label">
                <input required class="full-width"  v-model="user.nombre" >
                <label for="">Nombre</label>
              </div>

              <div class="floating-label">
                <input required class="full-width"  v-model="user.apellido" >
                <label for="">Apellido</label>
              </div>

              <div class="floating-label">
                <input required class="full-width"  v-model="user.telefono" >
                <label for="">Teléfono</label>
              </div>

              <!-- <div class="floating-label">
                <input required class="full-width">
                <label for="">Edad</label>
              </div> -->

              <!-- <div class="floating-label">
                <input required class="full-width">
                <label for="">Número de tarjeta Hispano Club</label>
              </div> -->
              <div class="margin-l-top">
                <p>
                  Por favor selecciona tu nombre de usuario y contraseña
                </p>  
              </div>
              <div class="floating-label">
                <input required class="full-width">
                <label>Usuario</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label>Contraseña</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Repetir contraseña</label>
              </div>

              <!-- <label>
                <q-checkbox></q-checkbox>
                Checkbox Label
              </label> -->

            </form>
          </div>
          <div class="card-actions text-right">
            <button class="white block">
              Ayuda
            </button>
            <button class="white block">
              Cancelar
            </button>

            <button class="white block"  v-link=" '/ingresar' ">
              Ingresar
            </button>

            <button class="primary raised block">
              Activar membresía
            </button>


          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      user: {
        nombre: 'Juan',
        apellido: 'Perez',
        correo: 'usuario@dominio.com',
        telefono: '5555 5555'
      }
    }
  }
}
</script>

<style lang="scss">
</style>
