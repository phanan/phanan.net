<template>
  <section>
    <SiteHeader/>

    <div role="main">
      <ProjectList/>
    </div>

    <SiteFooter/>
  </section>
</template>

<script>
import ProjectList from '~/components/ProjectList'
import SiteHeader from '~/components/SiteHeader'
import SiteFooter from '~/components/SiteFooter'

export default {
  name: 'index',
  components: { ProjectList, SiteHeader, SiteFooter }
}
</script>
