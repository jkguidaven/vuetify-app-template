<template>
  <VApp>
    <NavigationDrawer />

    <AppBar />

    <!-- Sizes your content based upon application components -->
    <VContent app>
      <slot />
    </VContent>
  </VApp>
</template>

<script>
import AppBar from '@components/main/app-bar.vue'
import NavigationDrawer from '@components/main/navigation-drawer.vue'

export default {
  components: {
    AppBar,
    NavigationDrawer,
  },

  props: {
    title: {
      type: String,
      default: 'Home',
    },
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
}
</style>
