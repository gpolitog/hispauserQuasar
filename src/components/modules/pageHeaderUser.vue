<template>
  <div>
    <div class="header-visual padding-m">
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
            <!-- <div class="md-caption">
              Tienes un paquete familiar. Tienes espacio para: N miembros más de tu familia
            </div> -->
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
        Dialog.create({
          title: 'Alert',
          message: 'Modern HTML5 Single Page Application front-end framework on steroids.'
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
    min-height:100px;
    position: relative;
    // color:white;
  }
</style>
