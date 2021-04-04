export const state = () => ({
  mentors: [],
})

export const mutations = {
  setMentors(state, data) {
    state.mentors = data
  },
}
export const actions = {
  async getMentors({ commit }) {
    try {
      const { data } = await this.$axios.get('mentor/list-search')
      commit('setMentors', data)
    } catch (err) {
      console.log(err)
    }
  },
}
export const getters = {
  getMentors(state) {
    return state.mentors
  },
}
