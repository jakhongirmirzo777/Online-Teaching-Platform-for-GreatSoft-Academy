<template>
  <div class="sidebar">
    <h2>Create your content</h2>
    <ul>
      <li :class="{ active: curriculumActive }" @click="handleCurriculum">
        Curriculum
      </li>
      <li :class="{ active: curriculumLanding }" @click="handleLanding">
        Course landing page
      </li>
    </ul>
    <button>Submit for review</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      curriculumActive: true,
      curriculumLanding: false,
    }
  },
  methods: {
    handleCurriculum() {
      this.$emit('curriculum', true)
      this.curriculumActive = true
      this.curriculumLanding = false
    },
    handleLanding() {
      this.$emit('landing', true)
      this.curriculumActive = false
      this.curriculumLanding = true
    },
  },
}
</script>

<style></style>
