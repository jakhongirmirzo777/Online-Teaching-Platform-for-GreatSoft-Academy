export const state = () => ({
  notificationBadges: [],
})

export const mutations = {
  setNotificationBadges(state, data) {
    state.notificationBadges.push(data)
  },
  emptyNotificationBadge(state) {
    state.notificationBadges = []
  },
}

export const actions = {
  async modifyUser({ rootState }, payload) {
    try {
      const userCredentials = rootState.instructorsPage.mentorData
      const resAccess = await this.$axios.post('token/', userCredentials)
      const token = resAccess.data.access
      if (token) {
        await this.$axios.patch('user/profile/', payload, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
      }
    } catch (err) {
      console.log(err)
    }
  },

  addNotificationBadges({ commit }, payload) {
    commit('setNotificationBadges', payload)
  },

  clearNotificationBadge({ commit }) {
    commit('emptyNotificationBadge')
  },
}
export const getters = {
  getNotificationBadge(state) {
    return state.notificationBadges
  },
}
