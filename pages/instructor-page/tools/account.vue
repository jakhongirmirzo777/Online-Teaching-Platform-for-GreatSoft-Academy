<template>
  <div class="courses__account">
    <CoursesAccount :mentorData="mentorProfile" />
  </div>
</template>

<script>
import CoursesAccount from '~/components/Instructor-page/Tools/CoursesAccount'
export default {
  components: {
    CoursesAccount,
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
.courses__account {
  height: 100%;
}
</style>
