<template>
  <li>
    <a :href="project.url" rel="me">{{ project.name }}
      <span class="url">{{ fqdn }}</span>
    </a>
  </li>
</template>

<script>
import config from '~/phanan.config'
import isLinkObject from '~/validators/isLinkObject'

export default {
  name: 'Project-Item',

  props: {
    project: {
      type: Object,
      required: true,
      validator: isLinkObject
    }
  },

  computed: {
    fqdn () {
      return this.project.url.match(config.URL_REGEX)[1]
    }
  }
}
</script>


<style lang="scss" scoped>
@import "../assets/scss/_mixins";

li {
  width: 100%;
  margin: 8px 0;

  a {
    &:hover {
      color: rgba(255, 255, 255, .2);

      .url {
        color: #fff;
        margin-left: 0;

        &:hover {
          color: rgba(255, 255, 255, .4);
        }
      }
    }
  }

  .url {
    color: rgba(255, 255, 255, .2);
    transition: color .5s, margin-left .5s;
    margin-left: -1200px;

    &::before {
      @include slash;
    }

    @media only screen and (max-width: 640px) {
      display: none;
    }
  }

  @media only screen and (max-width: 640px) {
    border-bottom: 1px solid #111;

    &:last-child {
        border-bottom: none;
    }
  }
}

</style>
