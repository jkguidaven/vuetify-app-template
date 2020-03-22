import Login from './login.vue'

describe('@views/login', () => {
  it('is a valid view', () => {
    expect(Login).toBeAViewComponent()
  })
})
