import decode from 'jwt-decode'

class AuthService {
  login(idToken) {
    localStorage.setItem('id_token', idToken)
    console.log('here')
    window.location.assign("/")
  }
}

export default new AuthService()