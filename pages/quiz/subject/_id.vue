<template>
  <spinner v-if="isLoading" />
  <div v-else class="subject-wrapper pt-8">
    <h1 class="text-center subject-heading">
      Quiz subject: <span class="subject-title"> {{ subject }}</span>
    </h1>
    <QuizComponent :questions="filteredQuestions" />
  </div>
</template>

<script>
import spinner from '~/components/spinner.vue'
import Spinner from '~/utils/spinner.js'
export default {
  name: 'subject-id',
  components: { spinner },
  mixins: [Spinner],
  data() {
    return {
      subject: null,
      allQuestions: [],
      filteredQuestions: [],
    }
  },
  async created() {
    await this.$axios
      .get(`quiz/subject/${this.$route.params.id}`)
      .then(({ data }) => (this.subject = data.direction))
      .catch((err) => console.log(err))
    await this.$axios
      .get(`quiz/quiz/`)
      .then(({ data }) => {
        this.allQuestions = data
      })
      .catch((err) => console.log(err))
    this.filteredQuestions = this.allQuestions.filter(
      (o) => o.subject === parseInt(`${this.$route.params.id}`)
    )
  },
}
</script>

<style scoped>
.subject-wrapper {
  position: relative;
  min-height: 100vh;
  background-color: #f3f8ff;
  z-index: 3;
}
.subject-wrapper::after {
  content: '';
  position: absolute;
  width: 100%;
  height: 80%;
  left: 0;
  top: 0;
  background: url('~assets/images/pricing/pricing.png');
  background-position: center;
  background-size: cover;
  z-index: -1;
}
.subject-heading {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 152%;
  text-align: center;
  color: #333366;
}
.subject-heading .subject-title {
  color: #ff9900;
}
</style>
