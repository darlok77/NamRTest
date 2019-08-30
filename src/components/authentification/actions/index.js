import sha1 from 'js-sha1'

import actionsType from './actions-type'
import store from '../../../store'
import mock from '../../../mock/mock.json'

const setUser = user => ({
  type: actionsType.AUTH,
  user
})

export const login = (name, pwd) => {
  console.log(name, pwd)
  mock.forEach((e) => {
    if (name === e.name && sha1(pwd) === e.pwd) {
      store.dispatch(setUser(e))
    }
  })
}

export const logout = () => {
  store.dispatch(setUser({}))
}
