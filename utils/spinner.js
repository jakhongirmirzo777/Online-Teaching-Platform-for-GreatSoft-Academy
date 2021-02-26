export default {
  data() {
    return {
      isLoading: true,
    }
  },
  methods: {
    isLoadingToggle() {
      setTimeout(() => {
        this.isLoading = false
      }, 1000)
    },
  },

  mounted() {
    this.isLoadingToggle()
  },
}
