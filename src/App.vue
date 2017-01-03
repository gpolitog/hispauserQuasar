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
export default {}
</script>

<style lang="scss">
  @import '/stylesheets/mixins/_spacing.scss';
  @import '/stylesheets/mixins/_breakpoint.scss';
  @import '/stylesheets/mixins/_resetText.scss';

  body {
    background:url('/statics/gplaypattern.png') repeat;
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
        width: 23%;
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
