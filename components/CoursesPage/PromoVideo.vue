<template>
  <div class="video__container">
    <div class="video__wrapper">
      <div class="video__promo">
        <div class="video-js__container">
          <video
            class="video-js my-video"
            data-setup="{}"
            controls
            :poster="courseData.promo_image"
            style="height: 350px; border: none"
            :src="courseData.promo_video"
          ></video>
        </div>
      </div>
      <div class="video__price">
        <button @click="addToCard" class="video__button video__button1">
          Add to cart
        </button>
        <nuxt-link
          class="video__button video__button2"
          :to="localePath(`/payment/${$route.params.id}`)"
          >Buy now</nuxt-link
        >
        <p>30-Day Money-Back Guarantee</p>
      </div>
      <div class="video__content">
        <h3>This course includes:</h3>
        <ul class="video__list">
          <li v-for="(description, i) in promoDescription" :key="i">
            {{ description }}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Button from '../ControlFields/Button.vue'
import Toast from '~/utils/toast.js'
export default {
  components: { Button },
  mixins: [Toast],
  props: {
    courseData: {
      type: [Object, Array],
    },
  },

  methods: {
    async addToCard() {
      try {
        if (this.$auth.loggedIn) {
          const availableCourses = this.$auth.user.user.owners_orders.map(
            (item) => item.courses[0]
          )
          if (!availableCourses.includes(Number(this.$route.params.id))) {
            const cartDetails = {
              courses: [Number(this.$route.params.id)],
              owner: this.$auth.user.user.id,
            }
            const instructorData = this.$store.state.instructorsPage.mentorData
            const resAccess = await this.$axios.post('token/', instructorData)
            const token = resAccess.data.access
            if (token) {
              await this.$axios.post('cart/', cartDetails, {
                headers: { Authorization: `Bearer ${token}` },
              })
              this.showToast(
                'success',
                'Success',
                'You have successfully added this course to your carts'
              )
              this.$auth.fetchUser()
            }
          } else {
            this.showToast(
              'info',
              'Note',
              'You already have this course in your carts'
            )
          }
        } else {
          this.showToast(
            'danger',
            'Error',
            'You are not logged in. Please, log in your account to add the course your carts'
          )
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
  computed: {
    promoDescription() {
      if (this.courseData.content) {
        return this.courseData.content.trim().split(',')
      }
    },
  },
}
</script>

<style scoped>
.my-video {
  position: relative !important;
}

.my-video:focus {
  outline: none;
}

.video-js__container {
  height: 100% !important;
}
</style>
