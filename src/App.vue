<template>
  <!-- Don't drop "q-app" class -->
  <div id="q-app">
    <router-view></router-view>
  </div>
</template>

<script>
/*
 * Root component
 */
export default {
  // mounted:
  methods: {
    ontoy () {
      console.log('')
    }
  }
}
</script>

<style lang="scss">
  @import '/stylesheets/mixins/_spacing.scss';
  @import '/stylesheets/mixins/_breakpoint.scss';
  @import '/stylesheets/mixins/_resetText.scss';

  body {
    // background-image: url('/statics/pexels-photo-129029-1.jpeg');
    background-size: cover;
    // background:url('/statics/gplaypattern.png') repeat;
  }
  #q-app {
    position: relative;
    height: 100%;
    // &:before {
    //   content: '';
    //   background: transparentize(#000000,0.5);
    //   position: absolute;
    //   top: 0;
    //   width: 100%;
    //   height: 100%;
    //   left: 0;
    //   z-index: -1;
    // }
  }
  .infinite-scroll-activated {
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    align-content: flex-end;
    // @extend .padding-m;
    .infinite-item {
      width: 100%;
      border-radius: 2px;
      overflow: hidden;
      background:white;
      @include breakpoint(sm) {
        width: 48%;
        margin: 1%;
      }
      @include breakpoint(md) {
        width: 31%;
        margin: 1%;
      }
      @include breakpoint(lg) {
        width: 18%;
        margin: 1%;
      }
    }
  }

  .card {
    .card-actions {
      justify-content: flex-end;
    }
  }
</style>
