<template>
  <!-- root node required -->
  <div>
    <div id="login">
      <div class="login-block">
        <div class="card">
          <div class="card-title">
            <big>Registra tu cuenta Hispano Club</big>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, suscipit?
            </p>
          </div>
          <div class="card-content">
            <form action="">
              <div class="floating-label">
                <input required class="full-width">
                <label>Usuario</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label>Correo electrónico</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Nombre</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Apellido</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Teléfono</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Edad</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Número de tarjeta Hispano Club</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label>Contraseña</label>
              </div>

              <div class="floating-label">
                <input required class="full-width">
                <label for="">Repetir contraseña</label>
              </div>

              <label>
                <q-checkbox></q-checkbox>
                Checkbox Label
              </label>

            </form>
          </div>
          <div class="card-actions text-right">
            <button class="white block">
              Cancelar
            </button>

            <button class="white block"  v-link=" '/ingresar' ">
              Ingresar
            </button>

            <button class="primary raised block">
              Registrar
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
    return {}
  }
}
</script>

<style lang="scss">
</style>
