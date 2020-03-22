<template>
  <Layout class="background">
    <VCard
      max-width="800"
      class="mx-auto mt-12"
      :elevation="10"
      tile
    >
      <VCardText class="pa-0">
        <VRow>
          <VCol
            class="px-2 py-0 background-banner"
            cols="5"
          >
            <VSpacer />
          </VCol>

          <VCol class="px-5 pb-8 mr-2">
            <h1
              class="display-1"
            >
              Welcome!!
            </h1>

            <h2
              class="subtitle-1 grey--text"
            >
              Please provide your credentials
            </h2>

            <VForm class="mt-5">
              <VTextField
                ref="username"
                v-model="username"
                label="Username"
                prepend-inner-icon="mdi-account"
                :disabled="processing"
                outlined
                @keypress.enter="$refs['password'].focus"
              />

              <VTextField
                ref="password"
                v-model="password"
                label="Password"
                type="password"
                prepend-inner-icon="mdi-key"
                :disabled="processing"

                outlined
                @keypress.enter="$refs['submit'].$el.focus"
              />

              <VCheckbox
                v-model="remember"
                class="ma-0 pa-0"
                label="Keep me connected"
              />
            </VForm>

            <VBtn
              ref="submit"
              color="primary"
              :disabled="!validInput || processing"
              :loading="processing"
              block
              large
              @click="submit"
              @keypress.enter="submit"
            >
              Login
            </VBtn>

            <span
              v-if="error"
              class="error--text mt-5 d-block"
            >{{ error }}</span>
          </VCol>
        </VRow>
      </VCardText>
    </VCard>
  </Layout>
</template>

<script>
import Layout from '@layouts/blank.vue'
import { mapState } from 'vuex'

export default {
  page: {
    title: 'Login',
    meta: [{
      name: 'description',
      content: 'The Login page.',
    }],
  },

  components: {
    Layout,
  },

  data () {
    return {
      username: '',
      password: '',
      remember: true,
    }
  },

  computed: {
    ...mapState('authentication', ['processing', 'error']),

    validInput () {
      return Boolean(this.username) && Boolean(this.password)
    },
  },

  methods: {
    async submit () {
      const result = await this.$store.dispatch('authentication/authenticate', {
        username: this.username,
        password: this.password,
      })

      if (result) {
        await this.$store.dispatch('session/setToken', {
          access_token: result,
        })

        this.$router.replace({ name: 'home' })
      }
    },
  },
}
</script>

<style scoped>
.background {
  background-color: var(--v-primary-darken1);
}

.background-banner {
  background-color: var(--v-primary-base);
}
</style>
