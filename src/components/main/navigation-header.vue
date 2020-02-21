<template>
  <div class="font-weight-bold grey--text my-3 mx-0 pa-0">
    <span
      v-for="(link, index) in links"
      :key="`link-${index}`"
    >
      <VBtn
        text
        color="primary"
        :ripple="false"
        class="ma-0 pa-0"
      >
        {{ link }}
      </VBtn>

      /
    </span>

    <span class="ml-3">
      {{ current }}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    path () {
      return this.$route.path.slice(-1) === '/'
        ? this.$route.path.slice(0, -1)
        : this.$route.path
    },

    links () {
      return this.path.split('/').slice(1, -1)
    },

    current () {
      return (this.path.split('/').slice(-1)[0] || 'Home').toUpperCase()
    },
  },
}
</script>
