export const state = () => {}

export const mutations = {}
export const actions = {
  async sendMessage({ commit }, payload) {
    try {
      return this.$axios.post('contact/', payload)
    } catch (err) {
      console.log(err)
    }
  },
}
export const getters = {}
