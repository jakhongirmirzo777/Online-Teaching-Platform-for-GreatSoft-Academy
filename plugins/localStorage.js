import createPersistedState from 'vuex-persistedstate'

export default ({ store }) => {
  createPersistedState({
    key: 'newToken',
    paths: ['instructorsPage.mentorData', 'instructorsPage.mentorProfile'],
  })(store)
}
