<template>
  <section class="pricing">
    <!-- <Pricing /> -->
  </section>
</template>

<script>
// import Pricing from '~/components/Pricing/Pricing.vue'
import { pricingPage } from '~/middleware'
export default {
  // components: {
  //   Pricing,
  // },
  middleware: [pricingPage],
}
</script>

<style lang="scss" scoped>
// .pricing {
//   padding: 5rem 8.125rem;
//   background-color: #f3f8ff;
//   background-image: url('~assets/images/pricing/pricing.png');
//   background-size: contain;
//   background-position: 0 0;
//   background-repeat: no-repeat;
//   @media only screen and (max-width: 75em) {
//     padding: 5rem 2rem 1rem;
//   }
//   @media only screen and (max-width: 62em) {
//     padding: 6rem 11rem 1rem;
//   }
//   @media only screen and (max-width: 46.25em) {
//     padding: 5rem 7rem 1rem;
//   }
//   @media only screen and (max-width: 37.5em) {
//     padding: 2rem 1rem 1rem;
//     background-image: none;
//   }
//   @media only screen and (max-width: 25em) {
//   }
// }
</style>
