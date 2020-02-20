---
to: "src/layouts/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.vue"
---
<template>
  <div :class="$style.container">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';

.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
