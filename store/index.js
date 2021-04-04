export const state = () => ({})

export const getters = {}

export const mutations = {}

export const actions = {
  async nuxtServerInit({ dispatch }) {
    await Promise.all([
      dispatch('course/allCourses'),
      dispatch('mainPage/initPromo'),
      dispatch('mentorModule/getMentors'),
    ])
  },
}
