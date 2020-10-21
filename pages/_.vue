<template>
  <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        test-app-web
      </h1>
      {{ title }}
      {{ content }}
      <nuxt-link tag="a" to="/test">sdfsd</nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData({ route, store, error, req, $axios }) {
    const path = route.path.slice(1, route.path.length)
    const { data } = await $axios.$get('collections/pages/entries', {
      params: {
        'filter[slug:is]': path,
      },
    })
    if (data && data.length) {
      return data[0]
    }

    return {}
  },
}
</script>

<style>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
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
