<template>
  <div class="container-fluid section-6">
    <div class="row flex justify-center">
      <div class="col-md-6 col-sm-12 grid justify-items-center">
        <h1 class="text-h1">
          IT’S TIME TO START<br />
          INVESTING IN YOURSELF
        </h1>
        <p class="text-paragraph my-2">
          Because learning to code might be the most right way to change your
          life
        </p>
        <b-button
          to="/auth/signUp"
          class="btn-outline-light"
          variant="outline-light"
          >Get Started</b-button
        >
      </div>
    </div>
    <div class="image-ellipse"></div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.section-6 {
  background: #5d30db;
  padding-top: 4rem;
  position: relative;
  overflow: hidden;
}
.image-ellipse {
  position: absolute;
  width: 464px;
  height: 464px;
  bottom: -98%;
  left: 0;
  background-image: url('~assets/images/Ellipse.png');
  background-repeat: no-repeat;
}

.text-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 41px;
  text-align: center;
  color: #ffffff;
}
.text-paragraph {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 19px;
  text-align: center;
  color: #ffffff;
}
.btn-outline-light {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 400;
  font-size: 18px;
  line-height: 25px;
  padding: 0.5rem 6rem;
  margin: 2rem auto;
}
</style>
