<template>
  <nuxt />
</template>

<script>
export default {
  methods: {
    maybeActivateDarkMode: () => {
      if ((new Date()).getHours() > 19) {
        document.querySelector(':root').classList.add('dark')
      }
    }
  },

  created () {
    if (process.client) {
      this.maybeActivateDarkMode()
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

@mixin dark-mode () {
  --bg-color: #202124;
  --text-color: #b1b6bb;
  --text-color-light: #9aa0a6;
  --link-color: #f56f82;
  --link-color-hover: #fff;
}

:root {
  --bg-color: #fff;
  --text-color: #4a4a4a;
  --text-color-light: #666;
  --link-color: #f00;
  --link-color-hover: #f00;

  &.dark {
    @include dark-mode();
  }

  @media (prefers-color-scheme: dark) {
    @include dark-mode();
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
</style>
