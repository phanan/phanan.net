<template>
  <MainContent>
    <div class="book flex mb-24" v-if="book">
      <div>
        <a :href="book.url" class="pos-rel top-0 hov:top--10" title="Read more on Goodreads">
          <img :alt="`${book.title} cover`" :src="book.cover" class="shadowed" height="auto" width="64px">
        </a>
      </div>
      <div class="pl-24">
        <p class="mb-12 s-.8">
          Currently reading <em><a :href="book.url">{{ book.title }}</a></em> by {{ book.author }}
        </p>
        <div class="book-description" v-html="book.description"/>
        <p class="more mt-12 al-r">View on <a :href="book.url">Goodreads</a></p>
      </div>
    </div>
    <p v-else>
      <template v-if="errored">
        Can't fetch data at the moment. Do you want to check out my
        <a href="https://www.goodreads.com/review/list/51137502">Goodreads profile</a>
        instead?
      </template>
      <template v-else>Fetching…</template>
    </p>
  </MainContent>
</template>

<script>
export default {
  components: {
    MainContent: () => import('../components/MainContent')
  },

  data: () => ({
    book: null,
    errored: false
  }),

  methods: {
    async fetchLatestBook () {
      const { protocol, host } = window.location

      try {
        const response = await fetch(`${protocol}//${host}/.netlify/functions/now-reading`)
        return await response.json()
      } catch {
        this.errored = true
        return null
      }
    }
  },

  async created () {
    if (process.client) {
      this.book = await this.fetchLatestBook()
    }
  }
}
</script>

<style lang="scss" scoped>
.book {
  &-description {
    font-style: italic;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 13;
    -webkit-box-orient: vertical;
  }

  .more {
    &::before {
      content: "—";
      display: inline-block;
      margin-right: 4px;
    }
  }
}
</style>
