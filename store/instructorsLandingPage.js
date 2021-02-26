export const state = () => ({})

export const mutations = {}

export const actions = {
  async addLandPage({ commit }, payload) {
    try {
      const { data } = await this.$axios.patch(`course/${payload.id}/`, payload)
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {}
