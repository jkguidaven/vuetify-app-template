<template>
  <VNavigationDrawer
    app
    :mini-variant.sync="expand"
    color="secondary"
  >
    <VAppBar
      dark
      color="primary"
      flat
    >
      <VSpacer />

      <Vbtn
        icon
        @click="expand = !expand"
      >
        <VIcon>{{ toggleIcon }}</VIcon>
      </Vbtn>
    </VAppBar>
  </VNavigationDrawer>
</template>

<script>
export default {
  data () {
    return {
      expand: false,
    }
  },

  computed: {
    toggleIcon () {
      return this.expand ? 'mdi-chevron-left' : 'mdi-chevron-right'
    },
  },
}
</script>
