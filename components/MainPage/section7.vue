<template>
  <div class="container-fluid section-7">
    <div class="row grid justify-center">
      <h1 class="text-h1 my-5">
        {{ $t('section7.Title') }}<br />
        {{ $t('section7.SubTitle') }}
      </h1>
    </div>
    <div class="row">
      <div class="col-md-1 col-sm-1 col-xs-1 flex greatsoft-typography">
        <img src="~assets/images/greatsoft.png" alt="greatsoft" />
      </div>
      <div class="col-md-11 col-sm-11 col-xs-11">
        <h1 v-if="!mentorDetails" class="text-gray-400">
          There is no instructors yet
        </h1>
        <vueperslides v-else :mentors="mentorDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import vueperslides from '~/components/MainPage/vueperslides'
export default {
  components: {
    vueperslides,
  },
  computed: {
    mentorDetails() {
      if (this.$store.getters['mentorModule/getMentors']) {
        return this.$store.getters['mentorModule/getMentors']
      }
    },
  },
}
</script>
