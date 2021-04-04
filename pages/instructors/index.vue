<template>
  <section class="instructorsPage">
    <spinner v-if="isLoading" />
    <InstructorHeader />
    <InsructorContent />
    <InstructorProcess />
  </section>
</template>

<script>
import Spinner from '~/utils/spinner.js'
import InstructorHeader from '~/components/Instructors/InstructorHeader.vue'
import InsructorContent from '~/components/Instructors/InstructorContent.vue'
import InstructorProcess from '~/components/Instructors/InstructorProcess.vue'
export default {
  mixins: [Spinner],
  components: {
    InstructorHeader,
    InsructorContent,
    InstructorProcess,
  },
  created() {
    this.isLoadingToggle()
  },
}
</script>

<style lang="scss" scoped>
.instructorsPage {
  padding: 0;
}
</style>
