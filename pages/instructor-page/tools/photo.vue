<template>
  <div class="courses__photo">
    <CoursesPhoto />
  </div>
</template>

<script>
import CoursesPhoto from '~/components/Instructor-page/Tools/CoursesPhoto'
export default {
  components: {
    CoursesPhoto,
  },
}
</script>

<style scoped>
.courses__photo {
  height: 100%;
}
</style>
