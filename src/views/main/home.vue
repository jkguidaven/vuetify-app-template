<template>
  <Layout>
    Home
  </Layout>
</template>

<script>
import Layout from '@layouts/container.vue'

export default {
  page: {
    title: 'Home',
    meta: [{
      name: 'description',
      content: 'The Home page.',
    }],
  },

  components: {
    Layout,
  },
}
</script>
