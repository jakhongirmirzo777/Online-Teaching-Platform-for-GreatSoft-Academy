<template>
  <div class="contact__main">
    <spinner v-if="isLoading" />
    <section class="contact">
      <Contact />
    </section>
  </div>
</template>

<script>
import Spinner from '~/utils/spinner.js'
export default {
  mixins: [Spinner],
  created() {
    this.isLoadingToggle()
  },
}
</script>
