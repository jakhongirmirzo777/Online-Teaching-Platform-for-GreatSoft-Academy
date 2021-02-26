<template>
  <div>
    <spinner2 v-if="isLoading" />
    <transition name="fade">
      <div class="container-fluid coursesSingle">
        <div class="row">
          <div class="col-md-3 col-xs-3 col-sm-3 p-0">
            <Sidebar @curriculum="handleCurriculum" @landing="handleLandPage" />
          </div>
          <div class="col-md-9 col-xs-9 col-sm-9 p-0">
            <keep-alive>
              <component :is="component" :courseData="singleCourse"></component>
            </keep-alive>
          </div>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Spinner from '~/utils/spinner.js'
import Sidebar from '~/components/Instructor-page/Courses/Sidebar'
import CoursesField from '~/components/Instructor-page/Courses/CoursesField'
import CoursesLandPage from '~/components/Instructor-page/Courses/CoursesLandPage'
export default {
  mixins: [Spinner],
  components: {
    'courses-field': CoursesField,
    'courses-land-page': CoursesLandPage,
    Sidebar,
  },
  created() {
    this.$store.dispatch(
      'instructorsPage/initSingleCourse',
      this.$route.params.id
    )
  },
  data() {
    return {
      component: 'courses-field',
    }
  },
  methods: {
    handleCurriculum(boolean) {
      if (boolean) {
        this.component = 'courses-field'
      }
    },

    handleLandPage(boolean) {
      if (boolean) {
        this.component = 'courses-land-page'
      }
    },
  },
  computed: {
    singleCourse() {
      if (this.$store.getters['instructorsPage/getSingleCourse']) {
        return this.$store.getters['instructorsPage/getSingleCourse']
      }
    },
  },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
