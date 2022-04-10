export default {
    get UserToken() {
        return localStorage.getItem('token')
    },
    set UserToken(value) {
        return localStorage.setItem('token', value)
    }
}