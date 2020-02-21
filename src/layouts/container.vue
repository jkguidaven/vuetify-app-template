<template>
  <div>
    <NavigationHeader />

    <VContainer fluid>
      <slot />
    </VContainer>
  </div>
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
.container {
  margin: 0 auto;
}
</style>
