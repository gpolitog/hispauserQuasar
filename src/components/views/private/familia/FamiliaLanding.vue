<template>
  <div>
    <pageHeader pageTitle="Tu familia Hispano Club" pageDescription="Registra a tus beneficiarios " >
    </pageHeader>

    <div class="layout-padding">
        <div class="row sm-column md-column">
          <div class="width-1of5"></div>
          <div class="width-3of5">
         <!--    <h5 class="margin-l-bottom">
              ms
            </h5> -->
            <div class="card">
              <div class="card-content">
                <div class="row sm-column md-column margin-m-bottom">
                  <div class="auto">
                    <b>Miembros de tu familia</b>
                  </div>
                  <div class="auto text-right">
                    <button class="primary" v-link=" '/usuario/familia/agregar'" >
                      Agregar miembro
                    </button>
                  </div>
                </div>
                <div class="list">
                
                  <div class="item three-lines" v-for="member in userData.membership.slotsasigned">
                    <img class="item-primary" :src="'statics/avatar-2.jpg'" :alt=" member.name ">
                    <div class="item-content has-secondary">
                      <div>{{member.name }}</div>
                      <div>Lorem ipsum dolor sit amet.</div>
                    </div>
                    <i class="item-secondary">
                      chat_bubble
                    </i>
                  </div>

                  <div class="item three-lines" v-for="n in userData.membership.slots">
                    <div class="item-primary" >
                      <i>add_circle</i>  
                    </div>
                    <div class="item-content has-secondary">
                      <div>Espacio disponible</div>
                      <div>Agrega más miembros a tu familia</div>
                    </div>
                    <i class="item-secondary">
                      chat_bubble
                    </i>
                  </div>

                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
import pageHeader from '../../../modules/pageHeader'

import zaaAvatar from '../../../modules/zaaAvatar'
import { Dialog } from 'quasar'

export default {
  data () {
    return {
      userData: this.$store.state.user,
      isFamily: false
    }
  },
  computed: {
    fullName () {
      return this.userData.name + ' ' + this.userData.lastname + ' ' + this.userData.motherlastname
    },
    membershipKind () {
      return this.userData.membership.kind.type + ' ' + this.userData.membership.kind.subtype
    }
  },
  created () {
    this.isFamilyKind()
  },
  methods: {
    isFamilyKind () {
      if (this.userData.membership.kind.type === 'family') {
        this.isFamily = true
      }
    }
  },
  components: {
    pageHeader,
    zaaAvatar
  }
}

</script>

<style>
</style>
