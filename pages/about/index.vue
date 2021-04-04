<template>
  <div>
    <spinner v-if="isLoading" />
    <section v-else class="about">
      <Promo />
      <Instructors />
      <Partners />
    </section>
  </div>
</template>

<script>
import Promo from '~/components/AboutPage/Promo'
import Instructors from '~/components/AboutPage/Instructors'
import Partners from '~/components/AboutPage/Partners'
import Spinner from '~/utils/spinner.js'

export default {
  name: 'about',
  components: {
    Partners,
    Promo,
    Instructors,
  },
  mixins: [Spinner],
  created() {
    this.isLoadingToggle()
  },
}
</script>

<style lang="scss" scoped>
.about {
  background-color: #f3f8ff;
}
</style>
