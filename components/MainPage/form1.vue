<template>
  <div class="form-bootstrap">
    <b-form @submit="onSubmit">
      <h1 class="text-h1 mb-3">Sign Up form</h1>
      <b-form-group id="input-group-1" label-for="input-1">
        <b-form-input
          class="bg-transparent input-field"
          id="input-1"
          v-model="form.firstname"
          type="text"
          placeholder="First Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-2" label-for="input-2">
        <b-form-input
          class="bg-transparent input-field"
          id="input-2"
          v-model="form.lastname"
          type="text"
          placeholder="Last Name"
          required
        ></b-form-input>
      </b-form-group>
      <b-form-group id="input-group-3" label-for="input-3">
        <b-form-input
          id="input-3"
          v-model="form.email"
          class="bg-transparent input-field"
          type="email"
          placeholder="Email"
          required
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-4" label-for="input-4">
        <b-form-input
          type="password"
          id="input-4"
          v-model="form.password"
          class="bg-transparent input-field"
          placeholder="Password"
          required
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" class="button-submit">
        Start learning now
      </b-button>
    </b-form>
    <div class="container-fluid">
      <div class="row">
        <div class="col-md-12 px-0 py-4">
          <p class="text-paragraph">
            By signing up for GreatSoft Academy, you agree to GreatSoft
            Academy’s <span class="chunk">Terms of Service</span> &
            <span class="chunk">Privacy Policy</span>.
          </p>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12 px-0 w-full flex justify-between">
          <button class="btn btn-outline-dark flex align-items-center px-9">
            <img
              src="~assets/images/google.png"
              class="w-8 h-8 mr-2"
              alt="google image"
            />
            Google
          </button>
          <button class="btn flex btn-outline-dark align-items-center px-9">
            <img
              src="~assets/svgs/facebook.svg"
              class="w-8 h-8 mr-2"
              alt="facebook image"
            />
            Facebook
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: null,
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
.form-bootstrap {
  width: 60.5%;
  margin-top: 14%;
  margin-left: auto;
  @media only screen and (max-width: 61.9em) {
    display: none;
  }
}
.button-submit {
  width: 100%;
  height: 53px;
  background: #ff9900;
  border-radius: 4px;
}
.input-field {
  padding: 1.6rem 1rem;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 22px;
  color: rgba(51, 51, 102, 0.5);
  border: 1px solid rgba(51, 51, 102, 0.4);
  box-sizing: border-box;
  border-radius: 4px;
}
.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 27px;
  color: #333366;
}
.text-paragraph {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 300;
  font-size: 14.3734px;
  line-height: 20px;
  color: #333366;
}
.chunk {
  color: #ff9900;
}
</style>
