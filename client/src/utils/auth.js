import decode from 'jwt-decode'

class AuthService {
  getProfile() {
    return decode(this.getToken())
  }

  getToken() {
    return localStorage.getItem('id_token')
  }

  login(idToken) {
    localStorage.setItem('id_token', idToken)
    console.log('here')
    window.location.assign("/")
  }
}

export default new AuthService()