import Vue from 'vue'
import StatamicImage from 'vue-statamic-image'

Vue.use(StatamicImage, {
  statamicBaseUrl: process.env.NUXT_ENV_BASE_URL,
})
