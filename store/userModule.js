export const state = () => ({
  isAuthenticated: false,
})

export const mutations = {
  setAuthentication(state, payload) {
    state.isAuthenticated = payload
  },
}

export const actions = {
  async MODIFY_USER({ commit }, payload) {
    await this.$axios
      .patch('user/profile/', {
        first_name: payload.first_name,
        last_name: payload.last_name,
      })
      .then((res) => {
        console.log(res)
      })
      .catch((err) => console.log(err))
  },
  // async GET_USER({ commit }) {
  //   await this.$axios
  //     .get('user/profile/')
  //     .then((res) => console.log(res))
  //     .catch((err) => console.log(err))
  // },
}
export const getters = {
  isAuthenticated(state) {
    return state.isAuthenticated
  },
}
