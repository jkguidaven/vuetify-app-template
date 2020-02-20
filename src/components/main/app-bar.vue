<template>
  <VAppBar
    app
    dark
    flat
    color="primary"
  >
    <VToolbarTitle>
      <VInput append-icon="mdi-search" />
    </VToolbarTitle>

    <VSpacer />

    <VBtn
      icon
    >
      <VIcon>mdi-bell</VIcon>
    </VBtn>

    <UserMenuButton
      :avatar="'https://cdn.vuetifyjs.com/images/john.jpg'"
      :menu-items="userMenuItems"
    />
  </VAppBar>
</template>

<script>
import UserMenuButton from '@components/main/user-button.vue'

export default {
  components: {
    UserMenuButton,
  },

  data () {
    return {
      userMenuItems: [
        { type: 'menu', title: 'settings' },
        { title: 'logout' },
      ],
    }
  },
}
</script>
