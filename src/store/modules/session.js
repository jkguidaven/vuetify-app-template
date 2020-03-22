export const state = {
  accessToken: null,
  refreshToken: null,
  profile: null,
}

export const getters = {
  hasAccessToken (state) {
    return Boolean(state.accessToken)
  },
}

export const mutations = {
  setAccessToken (state, token) {
    state.accessToken = token
  },
  setRefreshToken (state, token) {
    state.refreshToken = token
  },

  setProfile (state, profile) {
    state.profile = profile
  },
}

export const actions = {
  setToken ({ commit }, { accessToken, refreshToken }) {
    commit('setAccessToken', accessToken)
    commit('setAccessToken', refreshToken)
  },
}
