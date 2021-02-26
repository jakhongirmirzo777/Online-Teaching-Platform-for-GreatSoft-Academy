<template>
  <div class="landPage__container">
    <div class="landPage__box">
      <transition name="fade">
        <form @submit.prevent="submitLand">
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-1"
              >Course Title:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-1"
              v-model="courseDetail.course_name_en"
              placeholder="Enter course title in English"
              required
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.course_name_ru"
              placeholder="Enter course title in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.course_name_uz"
              placeholder="Enter course title in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-2"
              >Course Description:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-2"
              v-model="courseDetail.description_en"
              placeholder="Enter course description in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.description_ru"
              placeholder="Enter course description in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.description_uz"
              placeholder="Enter course description in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-3"
              >Course Requirement:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-3"
              v-model="courseDetail.requirement_en"
              placeholder="Enter course requirement in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirement_ru"
              placeholder="Enter course requirement in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirement_uz"
              placeholder="Enter course requirement in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-4"
              >Course Content:</label
            >
            <b-form-input
              class="landPage__input"
              id="input-live-4"
              v-model="courseDetail.content_en"
              placeholder="Enter course content in English"
              trim
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.content_ru"
              placeholder="Enter course content in Russian"
              trim
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.content_uz"
              placeholder="Enter course content in Uzbek"
              trim
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-5"
              >Course Promo video and poster:</label
            >
            <b-form-file
              class="landPage__input"
              browse-text="Upload"
              id="input-live-5"
              size="md"
              :placeholder="
                courseDetail.promo_video
                  ? courseDetail.promo_video
                  : 'No video choosen'
              "
              @change="changeVideo"
            ></b-form-file>
            <b-form-file
              class="landPage__input"
              browse-text="Upload"
              size="md"
              :placeholder="
                courseDetail.promo_image
                  ? courseDetail.promo_image
                  : 'No image choosen'
              "
              @change="changeImage"
            ></b-form-file>
          </div>
          <h1>{{ courseData }}</h1>
          <div class="landPage__group d-flex justify-center" role="group">
            <b-button type="submit" size="lg" variant="primary">Save</b-button>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: Object,
    },
  },
  data() {
    return {
      courseDetail: {
        id: this.courseData.id,
        course_name_en: this.courseData.course_name_en
          ? this.courseData.course_name_en
          : '',
        course_name_ru: this.courseData.course_name_ru
          ? this.courseData.course_name_ru
          : '',
        course_name_uz: this.courseData.course_name_uz
          ? this.courseData.course_name_uz
          : '',
        description_en: this.courseData.description_en
          ? this.courseData.description_en
          : '',
        description_ru: this.courseData.description_ru
          ? this.courseData.description_ru
          : '',
        description_uz: this.courseData.description_uz
          ? this.courseData.description_uz
          : '',
        requirement_en: this.courseData.requirement_en
          ? this.courseData.requirement_en
          : '',
        requirement_ru: this.courseData.requirement_ru
          ? this.courseData.requirement_ru
          : '',
        requirement_uz: this.courseData.requirement_uz
          ? this.courseData.requirement_uz
          : '',
        content_en: this.courseData.content_en
          ? this.courseData.content_en
          : '',
        content_ru: this.courseData.content_ru
          ? this.courseData.content_ru
          : '',
        content_uz: this.courseData.content_uz
          ? this.courseData.content_uz
          : '',
      },
      // promo_video: this.courseData.promo_video
      //     ? this.courseData.promo_video
      //     : '',
      //   promo_image: this.courseData.promo_image
      //     ? this.courseData.promo_image
      //     : '',
    }
  },
  methods: {
    changeVideo(event) {
      this.courseDetail.promo_video = event.target.files[0]
    },
    changeImage(event) {
      this.courseDetail.promo_image = event.target.files[0]
    },
    submitLand() {
      this.$store.dispatch(
        'instructorsLandingPage/addLandPage',
        this.courseDetail
      )
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
