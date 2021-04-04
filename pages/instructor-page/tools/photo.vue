<template>
  <div class="courses__photo">
    <CoursesPhoto :mentorData="mentorProfile" />
  </div>
</template>

<script>
import CoursesPhoto from '~/components/Instructor-page/Tools/CoursesPhoto'
export default {
  components: {
    CoursesPhoto,
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
.courses__photo {
  height: 100%;
}
</style>
