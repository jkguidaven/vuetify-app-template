<template>
  <VList
    color="primary"
    class="pa-3 mx-3"
    height="100%"
    dense
    nav
    dark
  >
    <VListItem two-line>
      <VListItemAvatar>
        <img :src="avatar">
      </VListItemAvatar>

      <VListItemContent>
        <VListItemTitle>{{ name }}</VListItemTitle>
        <VListItemSubtitle>{{ role }}</VListItemSubtitle>
      </VListItemContent>
    </VListItem>

    <VDivider />

    <VListItem
      v-for="item in menuItems"
      :key="item.title"
      link
      @click="$emit('selected-item', item)"
    >
      <VListItemIcon>
        <VIcon>{{ item.icon }}</VIcon>
      </VListItemIcon>

      <VListItemContent>
        <VListItemTitle>{{ item.title }}</VListItemTitle>
      </VListItemContent>
    </VListItem>
  </VList>
</template>

<script>
export default {
  props: {
    avatar: {
      type: String,
      required: true,
    },

    name: {
      type: String,
      required: true,
    },

    role: {
      type: String,
      required: true,
    },

    menuItems: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
