<template>
  <b-modal id="modal-quiz" @ title="Your score is:" ref="quiz-modal">
    <p>
      Correct answers:
      <span class="special-color"> {{ getCorrectAnswers }} </span>
    </p>
    <p>
      Your current status:
      <span class="special-color"> {{ getPercentage }}% </span>
    </p>
    <template #modal-footer>
      <div class="w-100">
        <b-button
          variant="primary"
          size="md"
          class="float-right"
          @click.prevent="hideModal"
        >
          ok
        </b-button>
      </div>
    </template>
  </b-modal>
</template>

<script>
export default {
  methods: {
    hideModal() {
      this.$refs['quiz-modal'].hide()
    },
  },
  computed: {
    getCorrectAnswers() {
      return this.$store.getters['quizModule/getCorrectIndex']
        ? this.$store.getters['quizModule/getCorrectIndex']
        : 'no correct answers'
    },
    getPercentage() {
      return this.$store.getters['quizModule/getPercentage']
        ? this.$store.getters['quizModule/getPercentage']
        : '0'
    },
  },
}
</script>

<style scoped>
.special-color {
  color: orange;
}
</style>
