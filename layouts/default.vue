<template>
  <nuxt />
</template>

<script>
const AVAILABLE_THEMES = ['dark', 'light']

export default {
  computed: {
    nightTime: () => (new Date()).getHours() > 19,

    forcedTheme: () => {
      const theme = (new URLSearchParams(window.location.search)).get('__theme')
      return AVAILABLE_THEMES.includes(theme) ? theme : null
    }
  },

  methods: {
    maybeSetTheme () {
      if (this.forcedTheme) {
        this.applyTheme(this.forcedTheme)
        return
      }

      if (this.nightTime) {
        this.applyTheme('dark')
      }
    },

    applyTheme: theme => document.querySelector(':root').classList.add(theme)
  },

  created () {
    if (process.client) {
      this.maybeSetTheme()
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

@mixin dark-theme () {
  --bg-color: #202124;
  --text-color: #b1b6bb;
  --text-color-light: #9aa0a6;
  --link-color: #f56f82;
  --link-color-hover: #fff;
}

@mixin light-theme () {
  --bg-color: #fff;
  --text-color: #4a4a4a;
  --text-color-light: #666;
  --link-color: #f00;
  --link-color-hover: #f00
}

:root {
  @include light-theme();

  &.light {
    @include light-theme();
  }

  &.dark {
    @include dark-theme();
  }

  @media (prefers-color-scheme: dark) {
    @include dark-theme();
  }
}

body, html {
  font: 20px/37px 'Literata', serif;
  color: var(--text-color);
  background: var(--bg-color);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  color: var(--link-color);
  text-decoration: none;
  transition: .2s ease-out;

  &:hover {
    color: var(--link-color-hover);
  }
}

p {
  margin: 0 0 1rem;
}

strong, b {
  font-weight: 600;
}

em, i {
  font-style: italic;
}

ul, li {
  list-style: none;
  padding: 0;
  margin: 0;
}

.shadowed {
  box-shadow: 0 3px 6px rgba(0, 0, 0, .2);
}

.flex {
  display: flex;
}

.m {
  &b-24 {
    margin-bottom: 24px;
  }

  &b-12 {
    margin-bottom: 12px;
  }

  &b-8 {
    margin-bottom: 8px;
  }

  &t-12 {
    margin-top: 12px;
  }
}

.al {
  &-r {
    text-align: right;
  }
}

.p {
  &l-24 {
    padding-left: 24px;
  }
}

.s- {
  &\.7 {
    font-size: .7rem;
  }

  &\.8 {
    font-size: .8rem;
  }
}

.rounded {
  border-radius: 5px;
}

.pos- {
  &rel {
    position: relative;
  }

  &abs {
    position: absolute;
  }
}

.top- {
  &0 {
    top: 0;
  }
}

.hov\: {
  &top- {
    &-10 {
      &:hover {
        top: -10px;
      }
    }
  }
}
</style>
