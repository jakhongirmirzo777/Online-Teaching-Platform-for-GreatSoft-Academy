<template>
  <div class="courses__account">
    <CoursesAccount />
  </div>
</template>

<script>
import CoursesAccount from '~/components/Instructor-page/Tools/CoursesAccount'
export default {
  components: {
    CoursesAccount,
  },
}
</script>

<style scoped>
.courses__account {
  height: 100%;
}
</style>
