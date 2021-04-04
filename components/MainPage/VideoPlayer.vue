<template>
  <div class="video-js__container">
    <video
      class="video-js my-video"
      data-setup="{}"
      controls
      :poster="postImage"
      style="height: 350px; border: none"
      :src="videoSrc"
    ></video>
  </div>
</template>

<script>
export default {
  data() {
    return {
      postImage: '',
      videoSrc: '',
    }
  },
  created() {
    this.changeVideo()
  },

  computed: {
    getPromo() {
      return this.$store.getters['mainPage/getPromo']
    },
  },

  methods: {
    changeVideo() {
      this.postImage = this.getPromo.image
      this.videoSrc = this.getPromo.video
    },
  },
}
</script>

<style scoped>
*:focus {
  outline: none;
}
.my-video {
  position: relative !important;
}

.video-js__container {
  height: 100% !important;
}
</style>
