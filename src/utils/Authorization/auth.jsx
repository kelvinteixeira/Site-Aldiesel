const STORAGE_KEY = 'Token'

const isLogged = () => !!localStorage.getItem(STORAGE_KEY)

export { STORAGE_KEY, isLogged }