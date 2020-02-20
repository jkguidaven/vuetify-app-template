<template>
  <VMenu offset-y>
    <template v-slot:activator="{ on }">
      <VBtn
        icon
        v-on="on"
      >
        <VAvatar
          height="35px"
          width="35px"
        >
          <img :src="avatar">
        </VAvatar>
      </VBtn>
    </template>
    <VList>
      <VListItem
        v-for="(item, index) in menuItems"
        :key="index"
        @click="$emit('select-item', item)"
      >
        <VListItemTitle>{{ item.title }}</VListItemTitle>
      </VListItem>
    </VList>
  </VMenu>
</template>

<script>
export default {
  props: {
    menuItems: {
      type: Array,
      default: () => [],
    },

    avatar: {
      type: String,
      required: true,
    },
  },
}
</script>
