export const state = () => ({})

export const mutations = {}

export const actions = {
  async changeMentorName({ rootState }, payload) {
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
        this.$router.go()
      }
    } catch (err) {
      console.log(err)
    }
  },

  async changeMentorImage({ rootState }, payload) {
    try {
      console.log('RootState', rootState)
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        const { data } = await this.$axios.patch('mentor/profile/', payload, {
          headers: { Authorization: `Bearer ${resAccess.data.access}` },
        })
        console.log(data)
        this.$router.go()
      }
    } catch (err) {
      console.log(err)
    }
  },

  async changePhoneNumber({ rootState }, payload) {
    try {
      const resAccess = await this.$axios.post(
        'token/',
        rootState.instructorsPage.mentorData
      )
      if (resAccess.data.access) {
        // const currentInfo = rootState.auth.user.mentor.user
        return await this.$axios.patch(
          'user/profile/',
          { phone_number: payload },
          {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          }
        )
      }
    } catch (err) {
      console.log(err)
    }
  },
}

export const getters = {}
