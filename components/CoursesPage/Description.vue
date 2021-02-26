<template>
  <div class="description__container">
    <h1>Course modules:</h1>
    <ul class="description__list">
      <li v-for="(requirement, i) in courseRequirements" :key="i">
        {{ requirement }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    courseData: {
      type: [Array, Object],
    },
  },

  data() {
    return {}
  },

  computed: {
    courseRequirements() {
      if (this.courseData.requirement) {
        return this.courseData.requirement.trim().split(',')
      }
    },
  },

  methods: {},
}
</script>

<style></style>
