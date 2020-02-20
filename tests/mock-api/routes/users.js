const Users = require('../resources/users')

module.exports = app => {
  app.get('/api/users/:username', (request, response) => {
    const currentUser = Users.findBy('token', request.headers.authorization)

    if (!currentUser) {
      response.status(401).json({
        message:
          'The token is either invalid or has expired. Please log in again.',
      })
      return
    }

    const matchedUser = Users.findBy('username', request.params.username)

    if (!matchedUser) {
      response.status(400).json({
        message: 'No user with this name was found.',
      })
      return
    }

    response.json(matchedUser)
  })
}
