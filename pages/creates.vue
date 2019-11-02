<template>
  <MainContent>
    <ul>
      <li :key="project.url" class="flex mb-24" v-for="project in projects">
        <div>
          <a :href="project.url" class="pos-rel top-0 hov:top--10">
            <img :alt="`${project.name} logo`" :src="project.logo" class="rounded" height="auto" width="64px">
          </a>
        </div>
        <div class="pl-24">
          <a :href="project.url" class="project-name mb-8 s-.8">{{ project.name }}</a>
          <div v-html="project.description"/>
        </div>
      </li>
    </ul>
  </MainContent>
</template>

<script>
import projects from '../store/communityProjects'

export default {
  components: {
    MainContent: () => import('../components/MainContent')
  },

  data: () => ({
    projects
  })
}
</script>

<style lang="scss" scoped>
.project-name {
  display: block;
  color: var(--text-color);

  &:hover {
    color: var(--link-color);
  }

  @media screen and (max-width: 768px) {
    color: var(--link-color);
  }
}
</style>
