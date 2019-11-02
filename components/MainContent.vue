<template>
  <div class=main-content>
    <h1>Hello.</h1>

    <main class="flex">
      <div class="introduction">
        <Introduction/>
      </div>

      <aside class="details pos-rel s-.7" ref="details" v-if="withDetails">
        <a @click.prevent="dismiss" role="button" class="close pos-abs">Close</a>
        <slot></slot>
      </aside>
    </main>
  </div>
</template>

<script>
export default {
  props: {
    withDetails: {
      default: true,
      type: Boolean
    }
  },

  components: {
    Introduction: () => import('../components/Introduction')
  },

  methods: {
    dismiss () {
      this.$refs.details.remove()
    }
  },

  mounted () {
    this.withDetails && window.setTimeout(() => this.$refs.details.classList.add('in'), 0)
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 3.2rem;
  font-weight: 600;
  margin-bottom: 4rem;
}

.main-content {
  padding: 32px 64px;
}

.introduction {
  flex: 520px 0 0;
}

.close {
  display: none;
}

.details {
  line-height: 1.2rem;
  color: var(--text-color-light);
  padding-left: 64px;
  max-width: 640px;
  opacity: 0;
  margin-left: 30px;

  &.in {
    transition: ease-out .3s;
    margin-left: 0;
    opacity: 1;
  }
}

@media screen and (max-width: 768px) {
  .main-content {
    padding: 24px;
  }

  main {
    display: block;
  }

  .details {
    left: 0;
    top: 64px;
    height: 100%;
    width: 100%;
    max-width: 100%;
    overflow: auto;
    padding: 84px 24px 24px;
    -webkit-overflow-scrolling: touch;
    background: var(--bg-color);
    margin-left: 0;
    z-index: 99;

    &.in {
      position: fixed;
      top: 0;
    }
  }

  .close {
    display: block;
    right: 24px;
    top: 24px;
    background: var(--link-color);
    color: var(--bg-color);
    padding: 2px 8px;
  }
}
</style>
