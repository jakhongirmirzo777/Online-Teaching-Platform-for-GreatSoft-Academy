export const state = () => ({
  allSections: null,
  allLectures: null,
  singleCourse: null,
})

export const mutations = {
  setAllSections(state, data) {
    state.allSections = data
  },
  setAllLectures(state, data) {
    state.allLectures = data
  },
  setSingleCourse(state, data) {
    state.singleCourse = data
  },
}

export const actions = {
  ////////////////////////////////
  ////////////////////////////////

  async initAllSections({ commit, rootState }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const allSections = this.$axios.get('course/section/', {
          headers: {
            Authorization: `Bearer ${resAccess.data.access}`,
            'Accept-Language': this.$i18n.locale,
          },
        })
        const allLectures = this.$axios.get('course/lecture/', {
          headers: {
            Authorization: `Bearer ${resAccess.data.access}`,
            'Accept-Language': this.$i18n.locale,
          },
        })
        const singleCourse = this.$axios.get(`course/${payload}/`, {
          headers: { 'Accept-Language': this.$i18n.locale },
        })
        await Promise.all([allSections, allLectures, singleCourse]).then(
          (results) => {
            const [result1, result2, result3] = results
            commit('setAllSections', result1.data)
            commit('setAllLectures', result2.data)
            commit('setSingleCourse', result3.data)
          }
        )
      }
      return Promise.resolve('Success')
    } catch (err) {
      console.log(err)
    }
  },

  ////////////////////////////////
  ////////////////////////////////

  async addSection({ dispatch, rootState }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const resSection = this.$axios.post(
          'course/section/',
          {
            sec_title: payload.secName,
          },
          {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          }
        )
        const resCourse = this.$axios.get(`course/${payload.courseId}/`, {
          headers: {
            Authorization: `Bearer ${resAccess.data.access}`,
          },
        })
        await Promise.all([resSection, resCourse]).then((results) => {
          const [result1, result2] = results
          this.$axios.patch(
            `course/${payload.courseId}/`,
            {
              sections: [...result2.data.sections, result1.data.id],
            },
            {
              headers: {
                Authorization: `Bearer ${resAccess.data.access}`,
              },
            }
          )
        })
      }
      dispatch('initAllSections', payload.courseId)
    } catch (err) {
      console.log(err)
    }
  },

  ////////////////////////////////
  ////////////////////////////////

  async editSection({ dispatch, rootState }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const { data } = await this.$axios.patch(
          `course/section/${payload.sectionId}/`,
          {
            sec_title: payload.newTitle,
          },
          {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          }
        )
      }
      dispatch('initAllSections', payload.courseId)
    } catch (err) {
      console.log(err)
    }
  },

  ////////////////////////////////
  ////////////////////////////////

  async deleteSection({ dispatch, rootState, state }, payload) {
    try {
      const listOfDelLectures = state.allLectures.filter(
        (item) => item.sections[0] == payload.sectionId
      )
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const sectionDel = this.$axios.delete(
          `course/section/${payload.sectionId}/`,
          {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          }
        )
        const lecutereAxioses = listOfDelLectures.map((item) =>
          this.$axios.delete(`course/lecture/${item.id}/`, {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          })
        )
        await Promise.all([sectionDel, ...lecutereAxioses])
      }
      dispatch('initAllSections', payload.courseId)
    } catch (err) {
      console.log(err)
    }
  },

  /////////////////////////////////
  /////////////////////////////////

  async deleteLecture({ rootState, dispatch }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const { data } = await this.$axios.delete(
          `course/lecture/${payload.lectureId}/`,
          {
            headers: {
              Authorization: `Bearer ${resAccess.data.access}`,
            },
          }
        )
      }
      dispatch('initAllSections', payload.courseId)
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {
  getSingleCourse(state) {
    return state.singleCourse
  },
  getSingleCourseCurriculum(state) {
    if (state.singleCourse && state.allLectures && state.allSections) {
      const filteredSections = []
      const filteredLectures = []
      for (let i = 0; i < state.singleCourse.sections.length; i++) {
        const data = state.allSections.filter(
          (item) => item.id == state.singleCourse.sections[i]
        )
        filteredSections.push(data[0])
      }
      for (let i = 0; i < state.singleCourse.lectures.length; i++) {
        const data = state.allLectures.filter(
          (item) => item.id == state.singleCourse.lectures[i]
        )
        filteredLectures.push(data[0])
      }
      const courseData = []
      for (let i = 0; i < filteredSections.length; i++) {
        const data = filteredLectures.filter(
          (item) => item.sections[0] == filteredSections[i].id
        )
        const finalData = {
          section: filteredSections[i],
          lectures: data.sort((a, b) => a.id - b.id),
        }
        courseData.push(finalData)
      }
      return courseData.sort((a, b) => a.section.id - b.section.id)
    } else {
      return null
    }
  },
}
