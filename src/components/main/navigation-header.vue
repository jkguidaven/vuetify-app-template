<template>
  <div class="font-weight-bold grey--text my-3">
    <span
      v-for="(link, index) in links"
      :key="`link-${index}`"
      class="mr-3"
    >
      <RouterLink
        class="mr-3"
        color="primary"
        :to="link.path"
      >
        {{ link.label }}
      </RouterLink>

      /
    </span>

    <span>
      {{ current }}
    </span>
  </div>
</template>

<script>
export default {
  computed: {
    path () {
      return (this.$route.path.slice(-1) === '/'
        ? this.$route.path.slice(0, -1)
        : this.$route.path).split('/')
    },

    links () {
      const items = this.path.slice(1, -1)
      let path = ''
      return items.map((link) => {
        path = `${path}/${link}`
        return {
          label: link.toUpperCase(),
          path,
        }
      })
    },

    current () {
      return (this.path.slice(-1)[0] || 'Home').toUpperCase()
    },
  },
}
</script>

<style lang="scss" scoped>
.router-link-active {
  text-decoration: none;
}
</style>
