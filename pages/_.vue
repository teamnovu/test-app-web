<template>
  <div class="container">
    <StatamicImage
      :src="page.assets.url"
      :placeholder-data-url="page.assets.preview"
      :quality="50"
    />
  </div>
</template>

<script>
import StatamicImage from 'vue-statamic-image'

export default {
  components: {
    StatamicImage,
  },
  async asyncData({ route, store, error, req, $axios }) {
    const path = route.path.slice(1, route.path.length)
    const { data } = await $axios.$get(`/api/pages/${path}`)
    return {
      page: data,
    }
  },
}
</script>

<style scoped>
h2 {
  font-size: 2rem;
}

.container {
  margin: 0 auto;
  min-height: 100vh;
  width: 500px;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
