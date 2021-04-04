<template>
  <div>
    <spinner v-if="isLoading" />
    <div v-else class="wrapper">
      <section1 />
      <section2 />
      <section3 />
      <section4 id="section_4" />
      <section5 :courses="allCourses" />
      <section6 v-if="!$auth.loggedIn" />
      <section7 />
    </div>
  </div>
</template>

<script>
import section1 from '~/components/MainPage/section1'
import section2 from '~/components/MainPage/section2'
import section3 from '~/components/MainPage/section3'
import section4 from '~/components/MainPage/section4'
import section5 from '~/components/MainPage/section5'
import section6 from '~/components/MainPage/section6'
import section7 from '~/components/MainPage/section7'
import spinner from '~/components/spinner.vue'
import Toast from '~/utils/toast.js'
export default {
  data() {
    return {
      isLoading: true,
    }
  },
  components: {
    spinner,
    section1,
    section2,
    section3,
    section4,
    section5,
    section6,
    section7,
  },
  layout: 'HomePageLayout',
  mixins: [Toast],
  computed: {
    allCourses() {
      if (this.$store.getters['course/getAllCourseData']) {
        return this.$store.getters['course/getAllCourseData']
      }
    },
  },
  created() {
    this.isLoading = false
    this.createToast()
  },
  methods: {
    createToast() {
      if (this.$store.getters['course/getToastShow']) {
        this.showToast(
          'success',
          'Muvafaqiyatli',
          "Muvafaqiyatli ro'yxatdan o'tdingiz"
        )
      }
      this.$store.dispatch('course/initToastShow', false)
    },
  },
}
</script>

<style scoped>
.wrapper {
  overflow: hidden;
}
</style>
