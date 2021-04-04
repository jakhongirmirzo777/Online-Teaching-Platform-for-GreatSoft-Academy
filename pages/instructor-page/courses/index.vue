<template>
  <div>
    <spinner2 v-if="isLoading" />
    <Courses />
  </div>
</template>

<script>
import Spinner from '~/utils/spinner.js'
import Courses from '~/components/Instructor-page/Courses/Courses.vue'
export default {
  components: {
    Courses,
  },
  mixins: [Spinner],
  created() {
    this.$store
      .dispatch('instructorsPage/initAllCoursesList')
      .then((res) => this.isLoadingToggle())
  },
}
</script>

<style></style>
