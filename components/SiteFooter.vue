<template>
  <footer>
    <SocialProfileList/>
  </footer>
</template>

<script>
import SocialProfileList from '~/components/SocialProfileList'

export default {
  components: { SocialProfileList }
}
</script>

<style lang="scss" scoped>
footer {
  margin-top: 32px;

  @media only screen and (max-width: 640px) {
    margin-top: 10px;
    padding-bottom: 35px;
  }
}
</style>

