<template>
  <MainContent>
    <ul>
      <li :key="book.url" class="flex mb-24" v-for="book in books">
        <div>
          <a :href="book.url">
            <img :alt="`${book.title} cover`" :src="book.cover" class="shadowed" height="auto" width="64px">
          </a>
        </div>
        <div class="pl-24">
          <a :href="book.url" class="book-title mb-12 s-.8">{{ book.title }}</a>
          <div v-html="book.description"/>
        </div>
      </li>
    </ul>
  </MainContent>
</template>

<script>
import books from '../store/books'

export default {
  components: {
    MainContent: () => import('../components/MainContent')
  },

  data: () => ({
    books
  })
}
</script>

<style lang="scss" scoped>
.book-title {
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
