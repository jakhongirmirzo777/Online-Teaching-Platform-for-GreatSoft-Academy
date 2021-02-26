<template>
  <vueper-slides
    class="no-shadow"
    :visible-slides="4"
    :bullets="false"
    :dragging-distance="70"
    :gap="0"
    :slide-ratio="1 / 3"
    :breakpoints="myBreakPoints"
  >
    <vueper-slide class="cart-self" v-for="i in 8" :key="i">
      <template v-slot:content>
        <div class="cart-block">
          <img class="image-cart" src="~/assets/images/sliderImage.png" />
          <div class="cart-inner">
            <div class="w-full flex flex-column">
              <h1 class="content-h1">
                Backend, Frontend, Python dasturlash tillari
              </h1>
              <p class="content-p my-2">GreatSoft academy</p>
              <div class="flex items-center justify-between rating my-2">
                <b-form-rating
                  class="rating-self"
                  no-border
                  v-model="ratingValue"
                  variant="warning"
                  readonly
                  show-value
                  size="xs"
                ></b-form-rating>
                <p class="views">(1,207)</p>
              </div>
              <div class="flex justify-between">
                <button class="btn btn-price">Buy Now</button>
                <div class="prices flex">
                  <p class="price-new mr-2">$9.99</p>
                  <p class="price-old">$15.99</p>
                </div>
              </div>
            </div>
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
  components: { VueperSlides, VueperSlide },
  data() {
    return {
      myBreakPoints: {
        1510: { visibleSlides: 4, slideMultiple: 2, slideRatio: 1 / 2.8 },
        1360: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 2.5 },
        1140: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 2.5 },
        1230: { visibleSlides: 3, slideMultiple: 2, slideRatio: 1 / 2.3 },
        1140: { visibleSlides: 3, slideMultiple: 2, slideRatio: 2 / 4.4 },
        1111: { visibleSlides: 3, slideMultiple: 2, slideRatio: 2 / 4 },
        1040: { visibleSlides: 3, slideMultiple: 2, slideRatio: 2 / 3.8 },
        990: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3.6 },
        900: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3.4 },
        850: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3.2 },
        820: { visibleSlides: 2, slideMultiple: 2, slideRatio: 2 / 3 },
        780: { visibleSlides: 1, slideRatio: 2 / 3 },
        610: { visibleSlides: 1, slideRatio: 2 / 2.8 },
        551: { visibleSlides: 1, slideRatio: 2 / 2.4 },
        490: { visibleSlides: 1, slideRatio: 2 / 2.2 },
        470: { visibleSlides: 1, slideRatio: 2 / 2 },
        440: { visibleSlides: 1, slideRatio: 2 / 1.8 },
        390: { visibleSlides: 1, slideRatio: 2 / 1.6 },
        360: { visibleSlides: 1, slideRatio: 2 / 1.5 },
        334: { visibleSlides: 1, slideRatio: 2 / 1.4 },
      },
      ratingValue: 4,
      slides: [
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          //   image: require('~assets/images/cart-image-1.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit.',
          //   image: require('~assets/images/cart-image-2.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          //   image: require('~assets/images/cart-image-3.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariaturComplex content with Vue.js hic libero unde necessitatibus,pariatur',
          //   image: require('~assets/images/cart-image-4.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          //   image: require('@~assets/images/cart-image-1.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, ipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariaturComdolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          //   image: require('@~assets/images/cart-image-2.png'),
        },
        {
          username: 'Sarvar Erkinjonov',
          level: 'senior',
          profession: 'Graphics & UX/UI designer',
          experience:
            'Complex content with Vue.js Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo debitis hic libero unde necessitatibus,pariatur ',
          //   image: require('@~assets/images/cart-image-3.png'),
        },
      ],
    }
  },
}
</script>

<style scoped>
.cart-block {
  background: #ffffff;
  border-radius: 5px;
  height: 100%;
  position: relative;
}
.cart-inner {
  padding: 1rem 1rem;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
.content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #333366;
}
.cart-self {
  padding: 3rem 1rem 0 1rem;
  height: 100%;
}
.image-cart {
  height: 160px;
  width: 100%;
}
.btn-price {
  border: 1px solid #333366;
  box-sizing: border-box;
  border-radius: 3px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 14px;
  color: #333366;
}
.price-new {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  color: #333366;
}
.price-old {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15px;
  line-height: 22px;
  text-decoration: line-through;
  color: rgba(51, 51, 102, 0.6);
  margin-top: 4px;
}
.rating-self {
  width: 60%;
  margin: 0;
  padding: 0;
}
.views {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  color: #333366;
}
</style>
