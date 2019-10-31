<template>
  <nuxt />
</template>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}

:root {
  --bg-color: #fff;
  --text-color: #4a4a4a;
  --text-color-light: #666;
  --link-color: #f00;
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
  box-shadow: 0 3px 6px rgb(200, 200, 200);
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
