export const state = () => ({
  mentorProfile: null,
})

export const mutations = {
  setMentorProfile(state, data) {
    state.mentorProfile = data
  },
}

export const actions = {
  async initMentorProfile({ rootState, commit }) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const { data } = await this.$axios.get('mentor/profile/', {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        commit('setMentorProfile', data)
      }
    } catch (err) {
      console.log(err)
    }
  },

  async changeMentorName({ rootState, dispatch }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        await Promise.all([
          this.$axios.patch(
            'user/profile/',
            {
              first_name: payload.split(' ')[0],
              last_name: payload.split(' ')[1],
            },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          ),
          this.$axios.patch(
            'mentor/profile/',
            {
              user: payload,
            },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          ),
        ])
        dispatch('initMentorProfile')
      }
    } catch (err) {
      console.log(err)
    }
  },

  async changeMentorImage({ rootState, dispatch }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const { data } = await this.$axios.patch('mentor/profile/', payload, {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        dispatch('initMentorProfile')
      }
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {
  getMentorProfile(state) {
    return state.mentorProfile
  },
}
