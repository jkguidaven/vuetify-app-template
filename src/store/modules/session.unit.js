import * as sessionModule from './session'

describe('@state/modules/session', () => {
  it('exports a valid Vuex module', () => {
    expect(sessionModule).toBeAVuexModule()
  })
})
