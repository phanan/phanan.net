<template>
  <ul>
    <li is="ProjectItem" v-for="project in projects" :project="project" :key="project.url"></li>
  </ul>
</template>

<script>
import { project } from '~/stores'
import ProjectItem from '~/components/ProjectItem'

export default {
  name: 'Project-List',
  components: { ProjectItem },

  data: () => ({
    projects: project.all()
  })
}
</script>
