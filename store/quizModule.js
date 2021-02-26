export const state = () => ({
  totalPercentage: -1,
  correctIndex: 0,
})

export const mutations = {
  setPersentage(state, percentage) {
    localStorage.setItem('Percentage', percentage)
    state.totalPercentage = percentage
  },
  setCorrectIndex(state, correctIndex) {
    state.correctIndex = correctIndex
  },
}
// export const actions = {}  //for now is not usable

export const getters = {
  getPercentage(state) {
    return state.totalPercentage
  },
  getCorrectIndex(state) {
    return state.correctIndex
  },
}
