<template>
  <div class="courses__profile">
    <CoursesProfile :mentorData="mentorProfile" />
  </div>
</template>

<script>
import CoursesProfile from '~/components/Instructor-page/Tools/CoursesProfile'
export default {
  components: {
    CoursesProfile,
  },
  computed: {
    mentorProfile() {
      if (this.$store.getters['instructorsTools/getMentorProfile']) {
        return this.$store.getters['instructorsTools/getMentorProfile']
      }
    },
  },
}
</script>

<style scoped>
.courses__profile {
  height: 100%;
}
</style>
