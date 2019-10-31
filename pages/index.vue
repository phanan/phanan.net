<template>
  <MainContent :with-details="false"/>
</template>

<script>
export default {
  components: {
    MainContent: () => import('../components/MainContent')
  }
}
</script>
