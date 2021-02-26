<template>
  <div class="promo__container">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-12 promo__column__margin">
          <div class="promo__box">
            <img
              class="promo__img"
              src="~/assets/images/about/shape.png"
              alt="shape"
            />
            <div class="promo__content">
              <h1
                data-aos-delay="100"
                data-aos="fade-right"
                class="promo__heading__primary mb-2"
              >
                About GreatSoft Academy
              </h1>
              <p
                data-aos-delay="300"
                data-aos="fade-right"
                class="promo__paragraph"
              >
                Maecenas eget ultrices lectus, quis varius libero. Praesent a
                justo risus. Maecenas sit amet nisi non risus bibendum
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-down-left"
          data-aos-duration="500"
          data-aos-easing="linear"
          class="col-lg-6 col-md-12 d-flex align-items-stretch promo__short__video promo__column__margin"
        >
          <VideoPlayer />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import VideoPlayer from '../MainPage/VideoPlayer.vue'
export default {
  components: {
    VideoPlayer
  }
}
</script>

<style></style>
