<template>
  <div class="container-fluid my-cart">
    <div class="row app-header">
      <div class="col-md-10 offset-md-1 flex flex-wrap content-end">
        <h1 class="content-h1">My Cart</h1>
        <div class="flex flex-wrap w-full my-8 nav-box">
          <nav style="flex: 1" class="flex items-center text-white">
            <h2 class="content-h2">Courses: 8</h2>
          </nav>
          <div style="flex: 2">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                style="background: transparent; color: white"
              />
              <button class="btn btn-outline-light my-2 my-sm-0" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-md-10 offset-md-1">
        <Slider />
      </div>
    </div>
  </div>
</template>

<script>
import Slider from '~/components/UserAccount/Slider'
export default {
  components: {
    Slider,
  },
  name: 'myCart',
  layout: 'userAccount',
  data() {
    return {}
  },
}
</script>

<style scoped>
.my-cart {
  min-height: 100vh;
  background: #f3f8ff;
}
.app-header {
  min-height: 186px;
  background: #333366;
}
.content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: 600;
  font-size: 26px;
  line-height: 35px;
  color: #ffffff;
}
.content-h2 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
</style>
