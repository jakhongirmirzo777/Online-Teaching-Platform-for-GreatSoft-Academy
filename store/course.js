export const state = () => ({
  allCourseData: [],
  courseData: [],
  instructorName: [],
  toastShow: false,
  logOutToast: false,
})

export const mutations = {
  setAllCourseData(state, data) {
    state.allCourseData = data
  },
  setCourseData(state, data) {
    state.courseData = data
  },
  setInstructorName(state, data) {
    state.instructorName = data
  },

  setToastShow(state, data) {
    state.toastShow = data
  },
  setLogOutToast(state, data) {
    state.logOutToast = data
  },
}

export const actions = {
  async allCourses({ commit }) {
    try {
      const { data } = await this.$axios.get('course/', {
        headers: { 'Accept-Language': this.$i18n.locale },
      })
      commit('setAllCourseData', data)
    } catch (err) {
      console.log(err)
    }
  },

  async initSingleCourseData({ commit, dispatch }, payload) {
    try {
      const { data } = await this.$axios.get(`course/${payload}/`, {
        headers: { 'Accept-Language': this.$i18n.locale },
      })
      commit('setCourseData', data)
      dispatch('initIntructorName', data.instructor)
    } catch (err) {
      console.log(err)
    }
  },

  async initIntructorName({ commit }, payload) {
    try {
      const { data } = await this.$axios.get(`course/instructor/${payload}/`, {
        headers: { 'Accept-Language': this.$i18n.locale },
      })
      commit('setInstructorName', data)
    } catch (err) {
      console.log(err)
    }
  },

  initToastShow({ commit }, payload) {
    commit('setToastShow', payload)
  },
  initLogOutToast({ commit }, payload) {
    commit('setLogOutToast', payload)
  },
}

export const getters = {
  getAllCourseData(state) {
    return state.allCourseData
  },

  getCourseData(state) {
    return state.courseData
  },
  getCourseInstructor(state) {
    return state.instructorName
  },
  getToastShow(state) {
    return state.toastShow
  },
  getLogOutToast(state) {
    return state.logOutToast
  },
}
