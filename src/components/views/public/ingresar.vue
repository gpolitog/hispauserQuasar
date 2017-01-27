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
            <big>Ingresa a tu cuenta Hispano Club</big>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto, suscipit?
            </p>
<!--             <button class="primary raised">
              Ingresa con tu cuenta de Facebook
            </button> -->
          </div>
          <div class="card-content">
            <p>
              O ingresa con tu cuenta HispanoClub
            </p>
            <form action="">
              <div class="floating-label">
                <input required class="full-width">
                <label>Usuario</label>
              </div>
              <div class="floating-label">
                <input required class="full-width">
                <label>Contraseña</label>
              </div>
              <div class="padding-s-top padding-s-bottom">
                <router-link :to="{path: '/recuperar-contrasena'}">
                  <span>¿Olvidaste tu contraseña?</span>
                </router-link>
              </div>
            </form>
          </div>
          <div class="card-actions text-right">
            <button class="white block">
              Cancelar
            </button>
            <button class="white block"  v-link=" '/registrar' ">
              Registrar
            </button>
            <button class="primary raised block" v-link=" '/usuario' ">
              Ingresar
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
  $bg: #cbcbc;
  $white: #ffffff;
  button {
    text-shadow:none !important;
  }
  #login {
    display: flex;
    align-items: center;
    justify-content: center;
    min-height:100vh;
    background-image: url('~/statics/bg-ingresar.jpg');
    background-size: cover;
    .login-block {
      min-width: 40%;
      .card {
        background: $white;
      }
      img.logo {
        display:block;
        max-width:200px;
        margin:0 auto;
        padding:10px;
      }
    }
  }
</style>
