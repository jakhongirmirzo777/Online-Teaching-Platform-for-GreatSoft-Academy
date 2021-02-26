export const state = () => ({
  mentors: [],
  mentorImgs: [],
})

export const mutations = {
  setMentors(state, payload) {
    state.mentors = payload
  },
  setMentorImage(state, images) {
    state.mentorImgs = images
  },
}
export const actions = {
  async getMentors({ commit }) {
    const api = 'https://greatsoft-academy.herokuapp.com/api'
    await this.$axios
      .get('mentor/list-search/')
      .then((res) => {
        commit('setMentors', res.data)
      })
      .catch((err) => console.log(err))
  },
  async getMentorImage({ commit }) {
    var images = []
    const api = 'https://greatsoft-academy.herokuapp.com/api'
    await this.$axios.get('mentor/list-search').then((res) => {
      res.data.forEach((element) => {
        images = [...images, api + element.image]
      })
      commit('setMentorImage', images)
    })
  },
}
export const getters = {
  getMentors(state) {
    return state.mentors
  },
  getMentorImgs(state) {
    return state.mentorImgs
  },
}
