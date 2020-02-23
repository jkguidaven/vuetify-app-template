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
      :href="'/notification'"
    >
      <VIcon>mdi-bell</VIcon>
    </VBtn>

    <UserMenuButton
      :avatar="'https://cdn.vuetifyjs.com/images/john.jpg'"
      :menu-items="userMenuItems"
      @select-item="(item) => item.handler()"
    />

    <UserDialog v-model="showUserDialog" />
  </VAppBar>
</template>

<script>
import UserMenuButton from '@components/main/user-button.vue'
import UserDialog from '@components/main/user/dialog.vue'

export default {
  components: {
    UserMenuButton,
    UserDialog,
  },

  data () {
    return {
      userMenuItems: [
        {
          type: 'settings',
          title: 'settings',
          handler: () => {
            this.showUserDialog = true
          },
        },
        { title: 'logout' },
      ],
    }
  },

  computed: {
    showUserDialog: {
      get () {
        return Boolean(this.$route.query.userdialog)
      },

      set (value) {
        this.$router.push({
          query: {
            ...this.$route.query,
            userdialog: value || undefined,
          },
        })
      },
    },
  },
}
</script>
