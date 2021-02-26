<template>
  <spinner v-if="isLoading" />
  <div v-else class="container-fluid quiz-page">
    <div v-if="subjects.length === 0" class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center my-4 heading">Subject set is empty</h1>
        <p class="text-center my-4 heading">
          Please check your subjects list not empty or internet connection
        </p>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-md-6 offset-md-3">
        <h1 class="text-center my-4 heading">
          Select subject you want to pass quiz
        </h1>
        <div class="row mt-4">
          <div
            class="col-md-4 cart-wrap py-4 px-4 hover:shadow-lg"
            v-for="subject in subjects"
            :key="subject.id"
          >
            <div class="cart grid">
              <h2 class="heading mb-4 text-center">
                {{ subject.direction }}
              </h2>
              <nuxt-link
                tag="button"
                class="btn"
                :to="localePath(`/quiz/subject/${subject.id}`)"
                >Start quiz
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import spinner from '~/components/spinner.vue'
import Spinner from '~/utils/spinner.js'
export default {
  components: { spinner },
  mixins: [Spinner],
  name: 'subject',
  data() {
    return {
      subjects: null,
    }
  },
  methods: {
    async fetchSubjects() {
      await this.$axios
        .get('quiz/subject/')
        .then(({ data }) => {
          this.subjects = data
          console.log('subjects', this.subjects)
        })
        .catch((err) => console.log(err))
    },
  },
  async created() {
    await this.fetchSubjects()
  },
}
</script>

<style scoped>
.heading {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 24px;
  line-height: 152%;
  text-align: center;
  color: #333366;
}
.quiz-page {
  position: relative;
  min-height: 100vh;
  background-color: #f3f8ff;
  z-index: 3;
}
.quiz-page::after {
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

.course-title {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 152%;
  color: #333366;
}
.cart-wrap {
  transition: 0.5s;
}
.cart {
  transition: 0.5s;
}
.cart-wrap:hover .cart {
  transform: scale(1.1);
}
.btn {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 15.3125px;
  line-height: 21px;
  text-align: center;
  background: #ff9900;
  color: white;
}
</style>
