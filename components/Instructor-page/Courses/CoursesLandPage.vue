<template>
  <div :key="count" class="landPage__container">
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
              placeholder="Enter all course requirements in English by adding comma  between"
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirement_ru"
              placeholder="Enter all course requirements in Russian by adding comma  between"
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.requirement_uz"
              placeholder="Enter all course requirements in Uzbek by adding comma between"
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
              placeholder="Write about what inludes your course in English by adding comma between"
              required
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.content_ru"
              placeholder="Write about what inludes your course in Russian by adding comma between"
            ></b-form-input>
            <b-form-input
              class="landPage__input"
              v-model="courseDetail.content_uz"
              placeholder="Write about what inludes your course in Uzbek by adding comma between"
            ></b-form-input>
          </div>
          <div class="landPage__group" role="group">
            <label class="landPage__label" for="input-live-5"
              >Course Promo video and poster:</label
            >
            <div class="landPage__progress__box">
              <b-form-file
                class="landPage__input"
                browse-text="Upload video"
                id="input-live-5"
                size="md"
                accept=".mp4, .mkv"
                :placeholder="promoVidName"
                @change="changeVideo"
              ></b-form-file>
              <div
                class="landPage__progress"
                :class="{ landPage__progress__show: progressShow1 }"
              >
                <a-progress
                  :percent="progressValue1"
                  :show-info="false"
                  :stroke-color="{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }"
                  :strokeWidth="34.3"
                  status="active"
                />
              </div>
            </div>
            <div class="landPage__progress__box">
              <b-form-file
                class="landPage__input"
                browse-text="Upload image"
                size="md"
                accept=".jpg, .jpeg, .png"
                :placeholder="promoImgName"
                @change="changeImage"
              ></b-form-file>
              <div
                class="landPage__progress"
                :class="{ landPage__progress__show: progressShow2 }"
              >
                <a-progress
                  :percent="progressValue2"
                  :show-info="false"
                  :stroke-color="{
                    '0%': '#108ee9',
                    '100%': '#87d068',
                  }"
                  :strokeWidth="34.3"
                  status="active"
                />
              </div>
            </div>
          </div>
          <div class="landPage__group d-flex justify-center" role="group">
            <b-button type="submit" size="lg" variant="primary">Save</b-button>
          </div>
        </form>
      </transition>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
export default {
  props: {
    courseData: {
      type: Object,
    },
  },
  data() {
    return {
      count: 1,
      progressShow1: false,
      progressShow2: false,
      progressValue1: 0,
      progressValue2: 0,
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
      promoVidName: this.courseData.promo_video_name
        ? this.courseData.promo_video_name
        : 'No video choosen',
      promoImgName: this.courseData.promo_image_name
        ? this.courseData.promo_image_name
        : 'No image choosen',
    }
  },

  methods: {
    randomValue() {
      this.value = Math.random() * this.max
    },
    async changeVideo(event) {
      try {
        const videoName = event.target.files[0].name
        const instructorCredentials = this.$store.state.instructorsPage
          .mentorData
        const formData = new FormData()
        formData.append('promo_video', event.target.files[0])
        const resAccess = await this.$axios.post(
          'token/',
          instructorCredentials
        )
        if (resAccess.data.access) {
          this.progressShow1 = true
          const promoVideo = this.$axios.patch(
            `course/${this.$route.params.id}/`,
            formData,
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
              onUploadProgress: (uploadEvent) => {
                this.progressValue1 = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                )
              },
            }
          )
          const promoVideoName = this.$axios.patch(
            `course/${this.$route.params.id}/`,
            { promo_video_name: videoName },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          )
          await Promise.all([promoVideo, promoVideoName]).then((results) => {
            this.progressShow1 = false
            this.progressValue1 = 0
          })
        }
        this.$store
          .dispatch(
            'instructorsCurriculum/initAllSections',
            this.$route.params.id
          )
          .then((res) => {
            this.updateKey()
          })
      } catch (err) {
        console.log(err)
      }
    },
    async changeImage(event) {
      try {
        const imageName = event.target.files[0].name
        const instructorCredentials = this.$store.state.instructorsPage
          .mentorData
        const formData = new FormData()
        formData.append('promo_image', event.target.files[0])
        const resAccess = await this.$axios.post(
          'token/',
          instructorCredentials
        )
        if (resAccess.data.access) {
          this.progressShow2 = true
          const promoImage = this.$axios.patch(
            `course/${this.$route.params.id}/`,
            formData,
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
              onUploadProgress: (uploadEvent) => {
                this.progressValue2 = Math.round(
                  (uploadEvent.loaded / uploadEvent.total) * 100
                )
              },
            }
          )
          const promoImageName = this.$axios.patch(
            `course/${this.$route.params.id}/`,
            { promo_image_name: imageName },
            {
              headers: { Authorization: `Bearer ${resAccess.data.access}` },
            }
          )
          await Promise.all([promoImage, promoImageName]).then((results) => {
            this.progressShow2 = false
            this.progressValue2 = 0
          })
        }
        this.$store
          .dispatch(
            'instructorsCurriculum/initAllSections',
            this.$route.params.id
          )
          .then((res) => {
            this.updateKey()
          })
      } catch (err) {
        console.log(err)
      }
    },
    updateKey() {
      this.count++
      this.promoVidName = this.courseData.promo_video_name
        ? this.courseData.promo_video_name
        : 'No video choosen'
      this.promoImgName = this.courseData.promo_image_name
        ? this.courseData.promo_image_name
        : 'No image choosen'
    },
    submitLand() {
      this.$store
        .dispatch('instructorsLandingPage/addLandPage', {
          courseId: this.$route.params.id,
          courseDetail: this.courseDetail,
        })
        .then((res) => {
          this.updateKey()
        })
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
