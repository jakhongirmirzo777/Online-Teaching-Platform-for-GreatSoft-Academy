<template>
  <section class="courses">
    <spinner v-if="isLoading" />
    <div class="container-fluid">
      <div class="row">
        <div
          class="col-lg-7 col-md-12 courses__column__margin d-flex align-items-stretch justify-content-center"
        >
          <div class="courses__box">
            <Introduction
              :courseData="courseSingleData"
              :courseInstructor="courseInstructorData"
            />
            <Description :courseData="courseSingleData" />
          </div>
        </div>
        <div class="col-lg-5 d-none d-lg-block column__margin">
          <div class="courses__box">
            <PromoVideo :courseData="courseSingleData" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Introduction from '~/components/CoursesPage/Introduction'
import Description from '~/components/CoursesPage/Description'
import PromoVideo from '~/components/CoursesPage/PromoVideo'
import Spinner from '~/utils/spinner.js'
export default {
  components: { Introduction, Description, PromoVideo },
  mixins: [Spinner],
  created() {
    this.callSingleCourseData()
  },

  methods: {
    callSingleCourseData() {
      this.$store.dispatch('course/initSingleCourseData', this.$route.params.id)
    },
  },

  computed: {
    courseSingleData() {
      return this.$store.getters['course/getCourseData']
    },

    courseInstructorData() {
      return this.$store.getters['course/getCourseInstructor']
    },
  },
}
</script>

<style lang="scss" scoped>
.courses {
  background-color: #f3f8ff;
  padding: 3.5rem 8.2rem;

  &__column__margin {
    padding: 0;
    margin: 0;
  }
}

@media only screen and (max-width: 83.5em) {
  .courses {
    padding: 3.5rem 5rem;
  }
}

@media only screen and (max-width: 77em) {
  .courses {
    padding: 3.5rem 2rem;
  }
}

@media only screen and (max-width: 62em) {
  .courses {
    padding: 3rem 4rem;
    background-image: linear-gradient(
      to bottom,
      rgba(243, 248, 255, 1) 0,
      rgba(243, 248, 255, 1) 78%,
      rgba(255, 255, 255, 1) 22%
    );
  }
}

@media only screen and (max-width: 41.5em) {
  .courses {
    padding: 2.5rem 1rem;
  }
}

@media only screen and (max-width: 28.5em) {
  .courses {
    background-image: linear-gradient(
      to bottom,
      rgba(243, 248, 255, 1) 0,
      rgba(243, 248, 255, 1) 74%,
      rgba(255, 255, 255, 1) 36%
    );
  }
}
</style>
