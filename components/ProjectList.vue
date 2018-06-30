<template>
  <ul>
    <li is="ProjectItem" v-for="project in projects" :project="project" :key="project.url"></li>
  </ul>
</template>

<script>
import ProjectItem from '~/components/ProjectItem'

export default {
  name: 'Project-List',
  components: { ProjectItem },

  data () {
    return {
      projects: [
        { name: 'Quẩn quanh trong tổ', url: 'http://qqtt.phanan.net' },
        { name: 'Trời hôm ấy không có gì đặc biệt', url: 'http://troi.phanan.net' },
        { name: 'Con chim khổng tước còn hót vang ngày mở đất', url: 'http://khongtuoc.phanan.net' },
        { name: 'Viết lách', url: 'https://360.phanan.net' },
        { name: 'Ca dao Mẹ', url: 'https://cadao.me' },
        { name: 'Thi ca', url: 'https://thica.net' },
        { name: 'Lá cải', url: 'http://lacai.org' },
        { name: 'Ngày mới', url: 'http://ngaymoi.in' }
      ]
    }
  }
}
</script>
