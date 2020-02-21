<template>
  <Layout>
    <RouterView />
  </Layout>
</template>

<script>
import Layout from '@layouts/main.vue'

export default {
  page: {
    title: 'Main Index',
    meta: [{
      name: 'description',
      content: 'The Main Index page.',
    }],
  },

  components: {
    Layout,
  },
}
</script>
