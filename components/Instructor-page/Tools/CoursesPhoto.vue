<template>
  <div class="tools__profile">
    <div class="tools__profile__wrapper">
      <h1>Photo</h1>
      <h3>Add a nice photo of yourself for your profile.</h3>
    </div>
    <div class="tools__profile__wrapper">
      <div class="tools__photo__box">
        <div class="tools__photo__photo">
          <img
            class="tools__photo__img"
            :src="avatar ? avatar : require('~/assets/images/userAccount.png')"
            alt="user photo"
          />
        </div>
      </div>
      <form @submit.prevent="changeImage">
        <div class="landPage__group" role="group">
          <b-form-file
            class="landPage__input"
            browse-text="Upload image"
            @change="valChange"
            size="md"
            placeholder="No file selected"
          ></b-form-file>
        </div>
        <div class="landPage__group landPage__btn" role="group">
          <b-button type="submit" size="md" variant="primary"
            >Change photo</b-button
          >
        </div>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      image: null,
    }
  },
  created() {
    console.log(this.$auth.user.mentor)
  },
  methods: {
    valChange(event) {
      this.image = event.target.files[0]
    },
    changeImage() {
      const formData = new FormData()
      formData.append('image', this.image)
      this.$store.dispatch('instructorsTools/changeMentorImage', formData)
    },
  },
  computed: {
    avatar() {
      return this.$auth.user.mentor.image
    },
  },
}
</script>

<style></style>
