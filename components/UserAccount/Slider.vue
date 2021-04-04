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
    <b-modal
      title="Pay attention:"
      class="deleteModal"
      @ok="handleDelete"
      id="delete"
    >
      <h1 style="font-size: 1.4rem; font-weight: 500">
        Are you sure to delete this cart?
      </h1>
    </b-modal>
    <vueper-slide class="cart-self" v-for="(course, i) in courses" :key="i">
      <template v-slot:content>
        <div class="cart-block">
          <img class="image-cart" :src="course.course.promo_image" />
          <div class="cart-inner">
            <div class="w-full flex flex-column">
              <h1 class="content-h1">{{ course.course.course_name }}</h1>
              <p class="content-p my-2">
                {{ course.course.description | sliceDescription }} ...
              </p>
              <!-- <div class="flex items-center justify-between rating my-2">
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
              </div> -->
              <div class="mt-3 flex justify-between">
                <div>
                  <nuxt-link
                    :to="localePath(`/payment/${course.course.id}`)"
                    class="btn btn-price mb-2"
                    >Buy Now</nuxt-link
                  >
                  <button
                    @click="deleteCart(course.cartId)"
                    v-b-modal.delete
                    style="border: none; color: #fff"
                    class="btn btn-danger btn-price"
                  >
                    Delete
                  </button>
                </div>

                <div class="prices flex">
                  <p class="price-new">{{ course.course.price }} UZS</p>
                  <!-- <p class="price-old">$15.99</p> -->
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
  props: ['courses'],
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
    }
  },
  filters: {
    sliceDescription(description) {
      return description.slice(0, 70)
    },
  },
  methods: {
    async handleDelete() {
      try {
        const cartId = this.$route.query.cartId
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          await this.$axios.delete(`cart/${cartId}/`, {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })
          this.$auth.fetchUser()
        }
      } catch (err) {
        console.log(err)
      }
    },

    deleteCart(id) {
      this.$router.push({
        path: this.$route.path,
        query: { cartId: id },
      })
    },
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
