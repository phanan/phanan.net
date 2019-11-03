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
