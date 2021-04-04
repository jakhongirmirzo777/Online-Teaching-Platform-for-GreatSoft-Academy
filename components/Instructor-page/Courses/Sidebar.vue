<template>
  <div class="sidebar">
    <h2>Create your content</h2>
    <ul>
      <li :class="{ active: curriculumActive }" @click="handleCurriculum">
        Curriculum
      </li>
      <li :class="{ active: curriculumLanding }" @click="handleLanding">
        Course landing page
      </li>
    </ul>
    <button @click="submitReview">Submit for review</button>
  </div>
</template>

<script>
import Toast from '~/utils/toast.js'
export default {
  data() {
    return {
      curriculumActive: true,
      curriculumLanding: false,
    }
  },
  mixins: [Toast],
  methods: {
    handleCurriculum() {
      this.$emit('curriculum', true)
      this.curriculumActive = true
      this.curriculumLanding = false
    },
    handleLanding() {
      this.$emit('landing', true)
      this.curriculumActive = false
      this.curriculumLanding = true
    },
    async submitReview() {
      try {
        const instructorCredentials = this.$store.state.instructorsPage
          .mentorData
        const courseId = this.$route.params.id
        const course = this.singleCourse
        if (
          course.course_name_en &&
          course.description_en &&
          course.requirement_en &&
          course.content_en &&
          course.promo_image &&
          course.promo_video
        ) {
          const resAccess = await this.$axios.post(
            'token/',
            instructorCredentials
          )
          if (resAccess.data.access) {
            const { data } = await this.$axios.patch(
              `course/${courseId}/`,
              {
                is_submited: true,
              },
              {
                headers: { Authorization: `Bearer ${resAccess.data.access}` },
              }
            )
            this.showToast(
              'success',
              'Muvafaqiyatli',
              "Ko'rib chiqishga yuborish muvafaqiyatli yakunlandi"
            )
          }
        } else {
          this.showToast(
            'danger',
            'Xatolik',
            "Ko'rib chiqishga yuborishdan oldin landing page ni kerakli ma'lumotlar bilan to'ldiring"
          )
        }
      } catch (err) {
        console.log(err)
      }
    },
  },

  computed: {
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

<style></style>
