import { add, getQuantity, getInfo } from '@/api/dept'
import { resetRouter } from '@/router'

const getDefaultState = () => {
  return {
    name: '',
    avatar: ''
  }
}

const state = getDefaultState()

const mutations = {
}

const actions = {
  // user login
  getQuantity({ commit }, userInfo) {
    const { username } = userInfo
    return new Promise((resolve, reject) => {
        getQuantity({ username: 'cereb'}).then(response => {
        resolve(response)
      }).catch(error => {
        reject(error)
      })
    })
  },

 
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}

