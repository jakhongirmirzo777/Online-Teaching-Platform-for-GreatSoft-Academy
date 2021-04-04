<template>
  <div class="introduction__container">
    <div class="container">
      <!-- <h3 class="introduction__h3">Web Development > Frontend > Vue.js</h3> -->
      <div class="row d-lg-none d-md-block">
        <div class="col-lg-12">
          <div class="introduction__responsive__promo">
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
        </div>
      </div>
      <div class="row">
        <div class="col-lg-12">
          <div class="introduction__content">
            <h1>
              {{ courseData.course_name }}
            </h1>
            <p>
              {{ courseData.description }}
            </p>
            <p>
              Created by
              {{ instructorName }}
            </p>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-lg-6" v-for="info in introductionInfos" :key="info.id">
          <div class="introduction__info">
            <i
              :class="info.icon"
              class="introduction__icons introduction__iconss"
            />
            {{ info.text }}
          </div>
        </div>
        <!-- <div class="col-lg-6">
          <div class="introduction__button">
            <nuxt-link to="/" class="introduction__link introduction__link1">
              <i class="fas fa-play introduction__iconss" /> Start learning
              now</nuxt-link
            >
          </div>
        </div>
        <div class="col-lg-6">
          <div class="introduction__button">
            <nuxt-link to="/" class="introduction__link introduction__link2">
              <i class="fas fa-share-alt introduction__iconss" /> Share
              with</nuxt-link
            >
          </div>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: [Array, Object],
    },

    courseInstructor: {
      type: [Array, Object],
    },
  },

  data() {
    return {
      introductionInfos: [
        { text: 'Learn at your own pace', icon: 'far fa-clock', id: 1 },
        { text: 'Get hands-on experience', icon: 'fas fa-code', id: 2 },
        {
          text: 'Complete bite-sized chapters',
          icon: 'far fa-file-alt',
          id: 3,
        },
        { text: 'Learn at your own', icon: 'far fa-clock', id: 4 },
      ],
    }
  },
  computed: {
    instructorName() {
      if (this.courseInstructor.user) {
        return this.courseInstructor.user.split(' ').slice(0, 2).join(' ')
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
