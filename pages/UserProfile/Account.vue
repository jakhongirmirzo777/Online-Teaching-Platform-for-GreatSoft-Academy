<template>
  <div>
    <div
      class="w-full top-header flex flex-column items-center justify-center px-4"
    >
      <h1 class="content-h1">{{ itemDetails.headerTitle }}</h1>
      <p class="content-p">{{ itemDetails.description }}</p>
    </div>
    <div class="container-fluid">
      <div class="row row-1 pt-5">
        <div class="col-md-10 offset-md-1 grid">
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                class="input-item"
                id="input-1"
                v-model="form.email"
                type="email"
                placeholder="Enter email"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                class="input-item"
                type="password"
                id="input-2"
                v-model="form.password"
                placeholder="Password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
        </div>
      </div>
      <div class="row pt-4">
        <div class="col-md-10 offset-md-1 grid">
          <b-form @submit="onSubmit">
            <b-form-group id="input-group-1" label-for="input-1">
              <b-form-input
                class="input-item"
                id="input-1"
                v-model="form.currentPassword"
                type="password"
                placeholder="Enter current password"
                required
              ></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                class="input-item"
                type="password"
                id="input-2"
                v-model="form.newPassword"
                placeholder="Enter new password"
                required
              ></b-form-input>
            </b-form-group>
            <b-form-group id="input-group-2" label-for="input-2">
              <b-form-input
                class="input-item"
                type="password"
                id="input-2"
                v-model="form.confirmPassword"
                placeholder="Re-enter new password"
                required
              ></b-form-input>
            </b-form-group>
          </b-form>
          <b-button class="justify-self-end data-submit mb-4" type="submit"
            >Change password</b-button
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemDetails'],
  data() {
    return {
      form: {
        email: '',
        password: null,
        currentPassword: null,
        newPassword: null,
        confirmPassword: null,
      },
    }
  },
  methods: {
    onSubmit(event) {
      event.preventDefault()
    },
  },
}
</script>

<style scoped>
.input-item {
  background: transparent;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: rgba(51, 51, 102, 0.5);
  border: 1px solid #333366;
  box-sizing: border-box;
}
.row-1 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.data-submit {
  background: #5d30db;
  border-radius: 4px;
  color: white;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 25px;
}
.top-header {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
  min-height: 7rem;
}
.top-header .content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.top-header .content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
</style>
