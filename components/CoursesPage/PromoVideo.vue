<template>
  <div class="video__container">
    <div class="video__wrapper">
      <div class="video__promo">
        <VideoPlayer :videoData="promoVideo" />
      </div>
      <div class="video__price">
        <nuxt-link class="video__button video__button1" to="/"
          >Add to cart</nuxt-link
        >
        <nuxt-link
          class="video__button video__button2"
          :to="localePath(`/payment/1`)"
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
import VideoPlayer from '~/components/MainPage/VideoPlayer'
export default {
  components: { VideoPlayer },
  props: {
    courseData: {
      type: [Object, Array],
    },
  },

  data() {
    return {}
  },

  created() {},

  computed: {
    promoVideo() {
      if (this.courseData.promo_video) {
        return {
          video: this.courseData.promo_video,
          image: this.courseData.promo_image,
        }
      }
    },
    promoDescription() {
      if (this.courseData.content) {
        return this.courseData.content.trim().split(',')
      }
    },
  },

  created() {},

  methods: {},
}
</script>

<style></style>
