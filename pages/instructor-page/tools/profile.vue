<template>
  <div class="courses__profile">
    <CoursesProfile />
  </div>
</template>

<script>
import CoursesProfile from '~/components/Instructor-page/Tools/CoursesProfile'
export default {
  components: {
    CoursesProfile,
  },
}
</script>

<style scoped>
.courses__profile {
  height: 100%;
}
</style>
