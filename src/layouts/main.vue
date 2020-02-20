<template>
  <VApp>
    <NavigationDrawer />

    <AppBar />

    <!-- Sizes your content based upon application components -->
    <VContent>
      <!-- Provides the application the proper gutter -->
      <VContainer fluid>
        <!-- If using vue-router -->
        <slot />
      </VContainer>
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
.container {
  margin: 0 auto;
}
</style>
