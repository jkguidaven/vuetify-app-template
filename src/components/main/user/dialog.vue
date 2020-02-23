<template>
  <VDialog
    v-model="show"
    width="80%"
  >
    <VCard
      height="400"
      class="overflow-hidden"
      tile
    >
      <VRow class="fill-height">
        <VCol
          :cols="3"
          class="pa-0 ma-0"
        >
          <DialogMenu
            :avatar="avatar"
            :name="username"
            :role="role"
            :menu-items="menuItems"
            @selected-item="({ section }) => currentSection = section"
          />
        </VCol>

        <VCol class="ma-0 pa-0">
          <VRow class="mr-5 pa-3">
            <h1 class="font-weight-bold">
              {{ title }}
            </h1>

            <VSpacer />

            <VBtn
              icon
              @click="currentSection = undefined"
            >
              <VIcon>mdi-close</VIcon>
            </VBtn>
          </VRow>

          <VDivider />

          <VContainer class="scrollable">
            <Component :is="currentSection" />
          </VContainer>
        </VCol>
      </VRow>
    </VCard>
  </VDialog>
</template>

<script>
import DialogMenu from './dialog-menu.vue'
import ProfileSection from './sections/profile.vue'
import PreferencesSection from './sections/preferences.vue'
import SecuritySection from './sections/security.vue'

const SECTION_PROFILE = 'profile'
const SECTION_PREFERENCES = 'preferences'
const SECTION_SECURITY = 'security'

const SECTIONS = {
  [SECTION_PROFILE]: ProfileSection,
  [SECTION_PREFERENCES]: PreferencesSection,
  [SECTION_SECURITY]: SecuritySection,
}

export default {
  components: {
    DialogMenu,
    ProfileSection,
    PreferencesSection,
    SecuritySection,
  },

  props: {
    value: {
      type: Boolean,
      default: false,
    },
  },

  data () {
    return {
      avatar: 'https://randomuser.me/api/portraits/men/81.jpg',
      username: 'jkguidaven',
      role: 'Software Developer',
      menuItems: [
        {
          icon: 'mdi-profile',
          title: 'Profile',
          section: SECTION_PROFILE,
        },

        {
          icon: 'mdi-user',
          title: 'Preferences',
          section: SECTION_PREFERENCES,
        },

        {
          icon: 'mdi-user',
          title: 'Security',
          section: SECTION_SECURITY,
        },
      ],
    }
  },

  computed: {
    show: {
      get () {
        return this.value
      },

      set (value) {
        this.$emit('input', value)
      },
    },

    title () {
      return (this.menuItems.find((item) => item.section === this.$route.query.userdialog) ||
        this.menuItems[0]).title
    },

    currentSection: {
      get () {
        const section = this.$route.query.userdialog || this.menuItems[0].section
        return SECTIONS[section] || SECTIONS[SECTION_PROFILE]
      },

      set (value) {
        this.$router.push({
          query: {
            ...this.$route.query,
            userdialog: value,
          },
        })
      },
    },
  },
}
</script>

<style lang="scss" scoped>
.fill-height {
  min-height: 100%;
}
</style>
