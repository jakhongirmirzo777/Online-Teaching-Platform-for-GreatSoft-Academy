<template>
  <div class="user-profile">
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">{{ itemDetails.headerTitle }}</h1>
      <p class="content-p">{{ itemDetails.description }}</p>
    </div>
    <b-form @submit="onSubmit" class="data-form grid">
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          id="input-1"
          v-model="form.first_name"
          placeholder="Name"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="form.last_name"
          placeholder="Last name"
          required
        ></b-form-input>
      </b-form-group>
      <!-- <b-form-group id="input-group-2" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.headline"
          placeholder="Headline"
          required
        ></b-form-input>
      </b-form-group> -->
      <b-button class="justify-self-end data-submit" type="submit"
        >Change Data</b-button
      >
    </b-form>
  </div>
</template>

<script>
export default {
  name: 'profile-item',
  props: ['itemDetails'],
  data() {
    return {
      form: {
        first_name: '',
        last_name: '',
        // headline: '',
      },
    }
  },
  methods: {
    onSubmit(event) {
      // event.preventDefault()
      this.$store.dispatch('userModule/MODIFY_USER', this.form)
      this.form.first_name = ''
      this.form.last_name = ''
    },
  },
}
</script>
