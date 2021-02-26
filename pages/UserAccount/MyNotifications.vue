<template>
  <div class="container-fluid showcase notification">
    <div class="row app-header">
      <div class="col-md-10 offset-md-1 flex flex-wrap content-end">
        <div class="flex flex-wrap w-full my-8 nav-block">
          <nav style="flex: 1" class="flex items-center text-white">
            <h1 class="content-h1">Notifications</h1>
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
    <div class="row mt-10">
      <div class="col-md-12 my-1" v-for="i in 4" :key="i">
        <notification-cart class="notification-cart" />
      </div>
    </div>
  </div>
</template>

<script>
import notificationCart from '~/components/UserAccount/notificationCart.vue'
export default {
  components: { notificationCart },
  name: 'myNotifications',
  layout: 'userAccount',
}
</script>
