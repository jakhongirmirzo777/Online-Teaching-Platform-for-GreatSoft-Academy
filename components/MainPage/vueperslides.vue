<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    slide-multiple
    :slide-ratio="2 / 7"
    :gap="0"
    :dragging-distance="200"
    :breakpoints="myBreakPoints"
  >
    <vueper-slide class="cart-self" v-for="mentor in mentors" :key="mentor.id">
      <template v-slot:content>
        <div class="cart-block">
          <img class="cart-image" :src="mentor.image" alt="..." />
          <div class="w-full flex justify-between items-center">
            <div class="w-full text-center">
              <p class="user-name">
                {{ mentor.user.split(' ').slice(0, 2).join(' ') }}
              </p>
            </div>
          </div>
          <div class="w-full flex justify-between items-center my-2">
            <div class="flex flex-wrap user-profession pb-1">
              <p v-for="(prof, index) in mentor.services" :key="index">
                {{ prof
                }}<span
                  v-if="
                    mentor.services.length > 1 &&
                    mentor.services.length - 1 != index
                  "
                  >, &nbsp;
                </span>
              </p>
            </div>
            <b-form-rating
              no-border
              v-model="ratingValue"
              variant="warning"
              class="form-rating"
              readonly
              size="xs"
            ></b-form-rating>
          </div>
          <div class="w-full flex justify-between items-center my-2">
            <div class="flex flex-wrap user-profession pb-1">
              <p>Current work</p>
            </div>
            <p class="user-level">{{ mentor.current_work }}</p>
          </div>
          <div class="w-full flex items-center mb-3">
            <p class="user-work-experience">Work <br />experience</p>
            <span class="flex-grow work-line"></span>
          </div>
          <div class="w-full flex user-experience">
            <p>{{ mentor.description }}</p>
          </div>
        </div>
      </template>
    </vueper-slide>
  </vueper-slides>
</template>

<script>
import { VueperSlides, VueperSlide } from 'vueperslides'
import 'vueperslides/dist/vueperslides.css'

export default {
  props: ['mentors'],
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      myBreakPoints: {
        1350: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 3 },
        1140: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 2.5 },
        1090: { visibleSlides: 3, slideMultiple: 2, slideRatio: 2 / 5 },
        1025: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 5 },
        955: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 4 },
        800: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3.3 },
        690: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 3 },
        630: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2.7 },
        550: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2.5 },
        500: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2.2 },
        460: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 2 },
        430: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 1.7 },
        380: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 1.5 },
        360: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 1.4 },
        340: { visibleSlides: 1, slideMultiple: 2, slideRatio: 2 / 1.2 },
      },
      ratingValue: 4,
    }
  },
}
</script>

<style scoped>
.cart-block {
  padding: 3.4rem 1rem 1rem 1rem;
  background: #eef3fa;
  border-radius: 6px 6px 6px 50px;
  height: 100%;
  position: relative;
}
.cart-self {
  padding: 3rem 0rem 0 1rem;
  height: 100%;
}
.cart-image {
  position: absolute;
  box-sizing: border-box;
  border-radius: 50%;
  height: 90px;
  width: 90px;
  transform: translate(15%, -105%);
}
.user-name {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 16px;
  line-height: 22px;
  color: #333366;
}
.user-level {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 16px;
  color: #5d30db;
}
.user-profession {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 16px;
  color: #5d30db;
}
.user-work-experience {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 12px;
  line-height: 16px;
  color: #333366;
}
.user-experience {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 12px;
  line-height: 160%;
  color: #333366;
  overflow: hidden;
}
.work-line {
  height: 1px;
  background: rgba(51, 51, 102, 0.2);
}
.vueperslides__arrow {
  color: yellow;
}
.form-rating {
  background: transparent;
  width: 50%;
  padding: 0 0;
  margin: 0 0;
}
</style>
