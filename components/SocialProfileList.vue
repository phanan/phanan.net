<template>
  <ul>
    <li is="SocialProfileItem" v-for="profile in profiles" :profile="profile" :key="profile.url"/>
  </ul>
</template>

<script>
import { socialProfile } from '~/stores'
import SocialProfileItem from '~/components/SocialProfileItem'

export default {
  name: 'Social-Profile-List',
  components: { SocialProfileItem },

  data: () => ({
    profiles: socialProfile.all()
  })
}
</script>
