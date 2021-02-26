export const state = () => ({
  promo: {
    video: '',
    image: '',
  },
})

export const mutations = {
  setPromo(state, data) {
    state.promo.video = data[0].video_promo
    state.promo.image = data[0].image_promo
  },
}

export const actions = {}

export const getters = {
  getPromo(state) {
    return state.promo
  },
}
