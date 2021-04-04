export const state = () => ({})

export const mutations = {}

export const actions = {
  async addLandPage({ dispatch, rootState }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        this.$axios.patch(`course/${payload.courseId}/`, payload.courseDetail, {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
      }
      dispatch('instructorsCurriculum/initAllSections', payload.courseId, {
        root: true,
      })
      return Promise.resolve('Success')
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {}
