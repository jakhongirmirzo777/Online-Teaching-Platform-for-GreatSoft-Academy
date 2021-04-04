<template>
  <div class="communication">
    <spinner2 v-if="isLoading" />
    <OnGoingPage />
  </div>
</template>

<script>
import OnGoingPage from '~/components/OnGoingPage.vue'
import Spinner from '~/utils/spinner.js'
export default {
  mixins: [Spinner],
  components: { OnGoingPage },
  created() {
    this.isLoadingToggle()
  },
}
</script>

<style scoped>
.communication {
  height: 50rem;
}
</style>
