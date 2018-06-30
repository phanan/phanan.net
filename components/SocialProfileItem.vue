<template>
  <li>
    <a :href="profile.url">{{ profile.name }}</a>
  </li>
</template>

<script>
import isLinkObject from '~/validators/isLinkObject'

export default {
  name: 'Social-Profile-Item',

  props: {
    profile: {
      type: Object,
      required: true,
      validator: isLinkObject
    }
  }
}
</script>

<style lang="scss" scoped>
@import "../assets/scss/_mixins";

li {
  display: inline-block;
  position: relative;
  margin-right: 5px;
  font-size: 20px;

  a {
    color: rgba(255, 255, 255, .5);

    &:hover {
      color: #fff;
    }
  }

  &::before {
    @include slash;
  }

  &:first-child::before {
    display: none;
  }

  @media only screen and (max-width: 640px) {
    font-size: 15px;
  }
}
</style>
