<template>
  <ul>
    <li is="SocialProfileItem" v-for="profile in profiles" :profile="profile" :key="profile.url"/>
  </ul>
</template>

<script>
import SocialProfileItem from '~/components/SocialProfileItem'

export default {
  name: 'Social-Profile-List',
  components: { SocialProfileItem },

  data () {
    return {
      profiles: [
        { name: 'GitHub', url: 'https://github.com/phanan' },
        { name: 'Twitter', url: 'https://twitter.com/notphanan' },
        { name: 'Facebook', url: 'https://facebook.com/phoenixheart' },
        { name: 'LinkedIn', url: 'https://vn.linkedin.com/in/phanan' }
      ]
    }
  }
}
</script>
