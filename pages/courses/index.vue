<template>
  <section class="allCourses">
    <spinner v-if="isLoading" />
    <div class="container-fluid">
      <div
        v-for="(direction, i) in getAllCoursesData"
        :key="i"
        class="row mb-4"
      >
        <div
          data-aos="fade-up"
          data-aos-delay="100"
          class="allCourses__container"
        >
          <h1>{{ direction[0].yonalish }}</h1>
          <div class="row">
            <div
              v-for="(item, i) in direction"
              :key="i"
              class="col-lg-3 col-md-4 col-sm-12 mb-5"
            >
              <nuxt-link
                :to="localePath(`/courses/${item.id}`)"
                class="allCourses__link"
              >
                <div class="allCourses__wrapper">
                  <div class="allCourses__photo">
                    <img
                      :src="item.promo_image"
                      alt="course photo"
                      class="allCourses__image"
                    />
                  </div>
                  <div class="allCourses__content">
                    <h2>
                      {{ item.course_name }}
                    </h2>
                    <p>
                      {{ item.description }}
                    </p>
                    <h3>Prices: {{ item.price }} UZS</h3>
                    <!-- <h3>Prices:</h3> -->
                    <!-- <ul>
                      <li>Basic: {{ item.price_base }} UZS</li>
                      <li>Pro: {{ item.price_pro }} UZS</li>
                      <li>Premium: {{ item.price_pre }} UZS</li>
                    </ul> -->
                  </div>
                </div>
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Spinner from '~/utils/spinner.js'
export default {
  mixins: [Spinner],
  computed: {
    getAllCoursesData() {
      const courseData = []
      const allCourseDirections = this.$store.getters[
        'course/getAllCourseData'
      ].map((item) => item.yonalish)
      const allCourses = this.$store.getters['course/getAllCourseData']
      const iniqueDirections = [...new Set(allCourseDirections)]
      for (let i = 0; i < iniqueDirections.length; i++) {
        const singleCourseDirection = allCourses.filter(
          (item) => item.yonalish == iniqueDirections[i]
        )
        courseData.push(singleCourseDirection)
      }
      return courseData
    },

    description() {
      return this.$i18n.locale
    },
  },
}
</script>

<style scoped></style>
