import * as authenticationModule from './authentication'

describe('@state/modules/authentication', () => {
  it('exports a valid Vuex module', () => {
    expect(authenticationModule).toBeAVuexModule()
  })
})
