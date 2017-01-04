<template>
  <div class="zaa-avatar" :class="classItem">
    <slot></slot>
  </div>
</template>

<script>
export default {
  props: {
    classItem: null
  },
  data () {
    return {}
  }
}
</script>

<style lang="scss">

$avatar-size: 42px;
$avatar-large-size: 64px;
$avatar-large-icon: 40px;

.zaa-avatar {
  width: $avatar-size;
  min-width: $avatar-size;
  height: $avatar-size;
  min-height: $avatar-size;
  margin: auto;
  display: inline-block;
  overflow: hidden;
  user-select: none;
  position: relative;
  border-radius: $avatar-size;
  vertical-align: middle;
  border:2px solid transparent;
  transition: all ease 0.3s;
  &.zaa-anchor {
    &:hover {
      border-color: transparentize(#ffffff, 0.3);
    }
  }

  &.zaa-large {
    width: $avatar-large-size;
    min-width: $avatar-large-size;
    height: $avatar-large-size;
    min-height: $avatar-large-size;
    border-radius: $avatar-large-size;

    .zaa-icon {
      width: $avatar-large-icon;
      min-width: $avatar-large-icon;
      height: $avatar-large-icon;
      min-height: $avatar-large-icon;
      font-size: $avatar-large-icon;
      line-height: $avatar-large-icon;
    }
  }

  &.zaa-avatar-icon {
    background-color: rgba(#000, .38);

    i {
      color: #fff;
    }
  }

  i {
    position: absolute;
    top: -1px;
    left: -1px;
    font-size: 41px;
  }
  .zaa-icon {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  img {
    width: 100%;
    height: 100%;
    display: block;
  }

  .zaa-ink-ripple {
    border-radius: 50%;

    .zaa-ripple.zaa-active {
      animation-duration: .9s;
    }
  }
}
</style>
