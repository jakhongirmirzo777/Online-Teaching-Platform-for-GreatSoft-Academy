<template>
  <section class="signInPage">
    <spinner v-if="isLoading" />
    <SignUp />
  </section>
</template>

<script>
import SignUp from '~/components/Sign/SignUp'
import Spinner from '~/utils/spinner.js'
export default {
  mixins: [Spinner],
  components: {
    SignUp,
  },
  created() {
    this.isLoadingToggle()
  },
}
</script>

<style lang="scss" scoped>
.signInPage {
  padding: 3.2rem 25.6rem 10rem;
  background-image: linear-gradient(
      to right bottom,
      rgba(243, 248, 255, 0.2),
      rgba(243, 248, 255, 0.2)
    ),
    url('~assets/images/form/background-image.png');
  background-size: contain;
  background-repeat: no-repeat;
  position: relative;
  @media only screen and (max-width: 82em) {
    padding: 3.2rem 20rem 6rem;
  }
  @media only screen and (max-width: 75em) {
    padding: 3.2rem 15rem 6rem;
  }
  @media only screen and (max-width: 62em) {
    padding: 3.2rem 10rem 5rem;
  }
  @media only screen and (max-width: 50em) {
    padding: 3.2rem 4rem 4rem;
  }
  @media only screen and (max-width: 37.5em) {
    padding: 3.2rem 1rem 3rem;
  }
}
</style>
