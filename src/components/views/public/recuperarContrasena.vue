<template>
  <!-- root node required -->
  <div>
    <div id="login">
      <div class="login-block">
        <div class="card">
          <div class="card-title">
            <big>Recupera tu contraseña Hispano Club</big>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, suscipit?
            </p>
          </div>

          <div class="paso1" v-if=" step1 ">
            <div class="card-content">
              <form action="">
                <div class="floating-label">
                  <input required class="full-width">
                  <label>Correo electrónico</label>
                </div>
              </form>
            </div>
            <div class="card-actions text-right">
              <button class="white block">
                Cancelar
              </button>
              <button class="white block"  v-link=" '/ingresar' ">
                Ingresar
              </button>
              <button class="primary raised block" v-link=" '/recuperar-contrasena?token=875834573' ">
                Recuperar contraseña
              </button>
            </div>
          </div>

          <div class="paso2" v-if=" step2 ">
            <div class="card-content">
              <form action="">
                <div class="floating-label">
                  <input required class="full-width">
                  <label>Nueva contraseña</label>
                </div>
                <div class="floating-label">
                  <input required class="full-width">
                  <label>Confirma nueva contraseña</label>
                </div>
              </form>
            </div>
            <div class="card-actions text-right">
              <button class="white block">
                Cancelar
              </button>
              <button class="white block"  v-link=" '/ingresar' ">
                Ingresar
              </button>
              <button class="primary raised block" v-link=" '/ingresar' ">
                Cambiar contraseña
              </button>
            </div>
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
      step1: true,
      step2: false
    }
  },
  created () {
    // fetch the data when the view is created and the data is
    // already being observed
    this.isStep2()
  },
  watch: {
    // call again the method if the route changes
    '$route.query': 'isStep2'
  },
  methods: {
    isStep2 () {
      if (this.$route.query.token) {
        this.step1 = false
        this.step2 = true
        console.log(this.step1)
      }
      else {
        this.step1 = true
        this.step2 = false
      }
    }
  }
}
</script>

<style lang="scss">
</style>
