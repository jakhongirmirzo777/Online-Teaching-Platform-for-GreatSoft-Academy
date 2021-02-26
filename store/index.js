export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ commit }, context) {
    try {
      await context.app.$axios
        .get(`http://176.57.217.197/api/course/`)
        .then((res) => commit('course/setAllCourseData', res.data))
      await context.app.$axios
        .get(`http://176.57.217.197/api/main/`)
        .then((res) => commit('mainPage/setPromo', res.data))
    } catch (err) {
      console.log('[NuxtServerInitError:]', err)
    }
  },
}
