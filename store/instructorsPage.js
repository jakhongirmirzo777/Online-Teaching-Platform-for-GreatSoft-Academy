export const state = () => ({
  allCoursesList: [],
  singleCourse: null,
  mentorData: {
    phone_number: '',
    password: '',
  },
  mentorProfile: null,
})

export const mutations = {
  setAllCoursesList(state, data) {
    state.allCoursesList = data
  },
  setSingleCourse(state, data) {
    state.singleCourse = data
  },
  setMentorProfile(state, data) {
    state.mentorProfile = data
  },

  emptyMentorProfile(state) {
    state.mentorProfile = null
  },

  setPhoneNumber(state, data) {
    state.mentorData.phone_number = data.phone_number
    state.mentorData.password = data.password
  },
  emptyPhoneNumber(state) {
    if (state.mentorData.phone_number && state.mentorData.password) {
      state.mentorData.phone_number = ''
      state.mentorData.password = ''
    }
  },
}

export const actions = {
  async initAllCoursesList({ commit, dispatch }) {
    try {
      const { data } = await this.$axios.get('course/', {
        headers: { 'Accept-Language': this.$i18n.locale },
      })
      commit('setAllCoursesList', data)
      dispatch('initMentorProfile')
    } catch (err) {
      console.log(err)
    }
  },

  initPhoneNumber({ commit, dispatch }, payload) {
    commit('setPhoneNumber', payload)
    dispatch('initMentorProfile')
  },

  async initMentorProfile({ commit, state }) {
    try {
      const resAccess = await this.$axios.post('token/', state.mentorData)
      if (resAccess.data.access) {
        const { data } = await this.$axios.get('user/profile/', {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        commit('setMentorProfile', data)
      }
    } catch (err) {
      console.log(err)
    }
  },

  async initSingleCourse({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(`course/${payload}/`, {
        headers: { 'Accept-Language': this.$i18n.locale },
      })
      commit('setSingleCourse', data)
    } catch (err) {
      console.log(err)
    }
  },

  async createCourse({ state, dispatch }, payload) {
    try {
      const resAccess = await this.$axios.post('token/', state.mentorData)
      if (resAccess.data.access) {
        const { data } = await this.$axios.post('course/', payload, {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        dispatch('addMentorCourse', data.id)
      }
    } catch (err) {
      console.log(err)
    }
  },

  async addMentorCourse({ state, commit }, payload) {
    try {
      const resAccess = await this.$axios.post('token/', state.mentorData)
      if (resAccess.data.access) {
        const resCheckCreatedCourses = await this.$axios.get('user/profile/', {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        ///////////////////
        ///////////////////
        if (resCheckCreatedCourses.data.mentor.created_course) {
          const mentorCoursesList =
            resCheckCreatedCourses.data.mentor.created_course
          let mentorCoursesArray = mentorCoursesList.split(' ')
          mentorCoursesArray.push(payload)
          const postMentorCourses = mentorCoursesArray.join(' ')
          const { data } = await this.$axios.patch(
            'mentor/profile/',
            {
              created_course: postMentorCourses,
            },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          )

          this.$router.go()
          ///////////////////
          ///////////////////
          const resProfile = await this.$axios.get('user/profile/', {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })

          commit('setMentorProfile', resProfile.data)
          ///////////////////
          ///////////////////
        } else {
          const { data } = await this.$axios.patch(
            'mentor/profile/',
            {
              created_course: payload.toString(),
            },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          )

          this.$router.go()
          ///////////////////
          ///////////////////
          const resProfile = await this.$axios.get('user/profile/', {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })

          commit('setMentorProfile', resProfile.data)
        }
      }
    } catch (err) {
      console.log(err)
    }
  },

  async initDeleteCourse({ dispatch }, id) {
    try {
      const { data } = await this.$axios.delete(`course/${id}/`)
      dispatch('deleteMentorCourse', id)
      this.$router.go()
    } catch (err) {
      console.log(err)
    }
  },

  async deleteMentorCourse({ state }, id) {
    const resAccess = await this.$axios.post('token/', state.mentorData)
    if (resAccess.data.access) {
      const resAvailabeleCourse = await this.$axios.get('user/profile/', {
        headers: { Authorization: `Bearer ${resAccess.data.access}` },
      })
      const newCourseList = resAvailabeleCourse.data.mentor.created_course.replace(
        id.toString(),
        ''
      )
      const { data } = await this.$axios.patch(
        'mentor/profile/',
        {
          created_course: newCourseList,
        },
        {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        }
      )
    }
  },

  clearPhoneNumber({ commit }) {
    commit('emptyPhoneNumber')
  },

  clearMentorProfile({ commit }) {
    commit('emptyMentorProfile')
  },
}

export const getters = {
  getMentorCourses(state) {
    if (state.allCoursesList.length) {
      if (state.mentorProfile.mentor.created_course.length) {
        const allMentorCourses = []
        const mentorCreatedCourses = state.mentorProfile.mentor.created_course.split(
          ' '
        )
        for (let i = 0; i < mentorCreatedCourses.length; i++) {
          const singleCourse = state.allCoursesList.find(
            (item) => item.id == mentorCreatedCourses[i]
          )
          allMentorCourses.push(singleCourse)
        }
        return allMentorCourses
      } else {
        return null
      }
    }
  },
  getSingleCourse(state) {
    return state.singleCourse
  },
}
