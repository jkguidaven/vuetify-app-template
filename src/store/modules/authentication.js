export const state = {
  processing: false,
  error: null,
}

export const getters = {}

export const mutations = {
  setProcessing (state, processing) {
    state.processing = processing
  },

  setError (state, error) {
    state.error = error
  },
}

export const actions = {
  authenticate ({ commit }, { username, password }) {
    commit('setProcessing', true)
    commit('setError', null)

    return new Promise((resolve, reject) => {
      verifyCredentials(username, password)
        .then((token) => {
          resolve(token)
        }, (err) => {
          commit('setError', err)
          resolve(null)
        })
        .finally(() => {
          commit('setProcessing', false)
        })
    })
  },
}

function verifyCredentials (username, password) {
  return new Promise((resolve, reject) => {
    // TO-DO need communicate from backend
    if (username === 'admin' && password === 'admin') {
      setTimeout(() => resolve('SOME-ACCESS-TOKEN'), 3000)
    } else {
      setTimeout(() => reject(Error('Invalid credentials')), 3000)
    }
  })
}
