<template>
  <div>
    <div class="header-visual padding-m-left padding-xxs-bottom padding-l-top padding-m-right user-info">
      <div class="contenido">

        <div class="row gutter sm-column">
          <itemUserDetail label="Bienvenid@" :caption=" fullName " v-if="userData.name">
          </itemUserDetail>
          <itemUserDetail label="Número de cliente" :caption=" userData.id " v-if=" userData.id ">
          </itemUserDetail>
          <itemUserDetail label="Membresía" :caption=" userData.membership.id " v-if=" userData.membership.id ">
          </itemUserDetail>
          <itemUserDetail label="Tipo de membresía" :caption=" membershipKind " v-if=" userData.membership.id ">
          </itemUserDetail>

          <div class="" v-if=" isFamily ">
            <div class="md-caption">
              Tu familia Hispano Club. 3 de 5
            </div>
            <div class="a">
                <zaaAvatar class="margin-xs-left zaa-anchor" v-for="member in userData.membership.slotsasigned">
                  <router-link :to="'/usuario/' + member.id">
                    <img :src="'statics/avatar-2.jpg'" :alt=" member.name ">
                  </router-link>
                  <q-tooltip anchor="bottom middle" self="top middle">
                    {{ member.name }}
                  </q-tooltip>
                </zaaAvatar>

                <zaaAvatar class="margin-xs-left zaa-anchor zaa-avatar-icon" v-for="n in userData.membership.slots" >
                  <span  @click="handler()">
                      <i>add_circle</i>
                  </span>

                  <q-tooltip anchor="bottom middle" self="top middle">
                    Agregar familiar
                  </q-tooltip>
                </zaaAvatar>

            </div>
          </div>
        </div>
        <p class="md-subheading" v-if="pageDescription">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam animi labore recusandae corporis possimus, facilis veritatis ut dolore, voluptate mollitia.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
  import itemUserDetail from './itemUserDetail'
  import zaaAvatar from './zaaAvatar'
  import { Dialog } from 'quasar'
  export default {
    props: {
      pageTitle: null,
      pageDescription: null
    },
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
      },
      handler () {
        console.log('click')
        var self = this
        Dialog.create({
          title: 'Registra a un miembro de tu familia',
          message: '¿Estas listo para registrar a un miembro de tu familia ?',
          buttons: [
            'Cancel',
            {
              label: 'Registrar',
              handler () {
                self.$router.push({path: '/usuario/tienda'})
                // empty the trash bin, yo
              }
            }
          ]
        })
      }
    },
    components: {
      itemUserDetail,
      zaaAvatar
    }
  }
</script>

<style lang="scss">

  .header-visual {
    position: relative;
    &.user-info {
      background-image: linear-gradient(-187deg, #3023AE 0%, #53A0FD 47%, #B4EC51 99%);  
      color:white;
    }
  
  }
</style>
