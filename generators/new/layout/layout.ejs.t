---
to: "src/layouts/<%= h.resolver(name).path %><%= h.changeCase.kebab(h.resolver(name).name) %>.vue"
---
<template>
  <div>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.container {
  min-width: $size-content-width-min;
  max-width: $size-content-width-max;
  margin: 0 auto;
}
</style>
