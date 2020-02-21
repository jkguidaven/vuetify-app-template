<template>
  <VNavigationDrawer
    app
    :mini-variant.sync="notExpand"
    color="secondary"
  >
    <VAppBar
      dark
      color="primary darken-1"
      flat
    >
      <VSpacer v-if="expand" />

      <VIcon @click="expand = !expand">
        {{ toggleIcon }}
      </VIcon>
    </VAppBar>

    <VList class="ma-0 pa-0">
      <VSubheader
        v-if="expand"
        class="text-no-wrap"
      >
        Main Menu
      </VSubheader>
      <VIcon
        v-else
        class="mx-4 my-3"
      >
        mdi-dots-horizontal
      </VIcon>

      <VListItemGroup nav>
        <VListItem
          v-for="item in mainItems"
          :key="item.title"
          :href="item.href"
          link
        >
          <VListItemIcon>
            <VIcon>{{ item.icon }}</VIcon>
          </VListItemIcon>

          <VListItemContent class="text-left">
            <VListItemTitle>{{ item.title }}</VListItemTitle>
          </VListItemContent>
        </VListItem>
      </VListItemGroup>
    </VList>

    <template v-slot:append>
      <VList class="ma-0 pa-0">
        <VListItemGroup nav>
          <VListItem
            v-for="item in subItems"
            :key="item.title"
            :href="item.href"
            link
          >
            <VListItemIcon>
              <VIcon>{{ item.icon }}</VIcon>
            </VListItemIcon>

            <VListItemContent class="text-left">
              <VListItemTitle>{{ item.title }}</VListItemTitle>
            </VListItemContent>
          </VListItem>
        </VListItemGroup>
      </VList>
    </template>
  </VNavigationDrawer>
</template>

<script>
export default {
  data () {
    return {
      expand: false,

      mainItems: [
        {
          icon: 'mdi-home',
          title: 'Home',
          href: 'home',
        },
      ],

      subItems: [
        {
          icon: 'mdi-cube',
          title: 'Items',
          href: 'items',
        },
      ],
    }
  },

  computed: {
    toggleIcon () {
      return this.notExpand ? 'mdi-chevron-right' : 'mdi-chevron-left'
    },

    notExpand () {
      return !this.expand
    },
  },
}
</script>
