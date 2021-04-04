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
              <component
                :is="component"
                :courseArr="courseArrays"
                :courseCurriculum="singleCourseCurriculum"
                :courseData="singleCourse"
              ></component>
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
  data() {
    return {
      component: 'courses-field',
    }
  },
  created() {
    this.$store
      .dispatch('instructorsCurriculum/initAllSections', this.$route.params.id)
      .then((res) => this.isLoadingToggle())
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
    singleCourseCurriculum() {
      if (
        this.$store.getters['instructorsCurriculum/getSingleCourseCurriculum']
      ) {
        return this.$store.getters[
          'instructorsCurriculum/getSingleCourseCurriculum'
        ]
      } else {
        return null
      }
    },
    courseArrays() {
      const curArr = this.$store.getters[
        'instructorsCurriculum/getSingleCourseCurriculum'
      ]
      if (curArr) {
        const lectureEditArr = []
        const lectureEditMod = []
        for (let i = 0; i < curArr.length; i++) {
          const data = curArr[i].lectures.map((item) => false)
          lectureEditArr.push({
            lectureArr: data,
          })
        }
        for (let i = 0; i < curArr.length; i++) {
          const data = curArr[i].lectures.map((item) => {
            return {
              name: '',
              file: '',
              preview: item.file,
              label: 'File/Video',
            }
          })
          lectureEditMod.push({
            lectureMod: data,
          })
        }
        return {
          sectionEditArray: new Array(curArr.length).fill(false),
          lectureAddArray: new Array(curArr.length).fill(false),
          lectureEditArray: lectureEditArr,
        }
      } else {
        return null
      }
    },
    singleCourse() {
      if (this.$store.getters['instructorsCurriculum/getSingleCourse']) {
        return this.$store.getters['instructorsCurriculum/getSingleCourse']
      } else {
        return null
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
