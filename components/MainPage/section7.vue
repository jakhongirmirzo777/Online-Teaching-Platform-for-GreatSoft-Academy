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
        <vueperslides :mentors="mentorDetails" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import vueperslides from '~/components/MainPage/vueperslides'
export default {
  components: {
    vueperslides,
  },
  data() {
    return {}
  },
  computed: {
    ...mapGetters({
      mentors: 'mentorModule/getMentors',
    }),
    mentorDetails() {
      const api = 'https://greatsoft-academy.herokuapp.com'
      const mentorDetail = this.mentors.map((mentor) => ({
        ...mentor,
        mentorImg: api + mentor.image,
      }))
      return mentorDetail
    },
  },
  async created() {
    await this.$store.dispatch('mentorModule/getMentors')
  },
}
</script>
