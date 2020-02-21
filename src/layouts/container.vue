<template>
  <VContainer
    class="wrapper d-flex flex-column"
    fluid
  >
    <NavigationHeader />

    <slot />

    <VFooter class="mt-auto">
      {{ new Date().getFullYear() }} — <strong>SeriousDev</strong>
    </VFooter>
  </VContainer>
</template>

<script>
import NavigationHeader from '@components/main/navigation-header.vue'

export default {
  components: {
    NavigationHeader,
  },
}
</script>

<style lang="scss" scoped>
.wrapper {
  min-height: 100%;
}
</style>
