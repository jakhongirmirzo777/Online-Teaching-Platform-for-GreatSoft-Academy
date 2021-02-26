<template>
  <div class="tools">
    <spinner2 v-if="isLoading" />
    <div class="tools__container">
      <div class="container-fluid">
        <div class="row">
          <div class="col-lg-3 p-0 tools__wrapper">
            <div class="tools__photo">
              <img
                :src="
                  avatar ? avatar : require('~/assets/images/userAccount.png')
                "
                alt="user-image"
                class="tools__img"
              />
              <h1 class="">Name Surname</h1>
            </div>
            <ul class="tools__list">
              <li
                :class="{
                  tools__active:
                    this.$route.fullPath == '/instructor-page/tools/profile' ||
                    this.$route.fullPath ==
                      '/ru/instructor-page/tools/profile' ||
                    this.$route.fullPath == '/uz/instructor-page/tools/profile',
                }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/profile')"
                  >Profile</nuxt-link
                >
              </li>
              <li
                :class="{
                  tools__active:
                    this.$route.fullPath == '/instructor-page/tools/photo' ||
                    this.$route.fullPath == '/ru/instructor-page/tools/photo' ||
                    this.$route.fullPath == '/uz/instructor-page/tools/photo',
                }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/photo')"
                  >Photo</nuxt-link
                >
              </li>
              <li
                :class="{
                  tools__active:
                    this.$route.fullPath == '/instructor-page/tools/account' ||
                    this.$route.fullPath ==
                      '/ru/instructor-page/tools/account' ||
                    this.$route.fullPath == '/uz/instructor-page/tools/account',
                }"
              >
                <nuxt-link
                  class="tools__link"
                  :to="localePath('/instructor-page/tools/account')"
                  >Account</nuxt-link
                >
              </li>
            </ul>
          </div>
          <div class="col-lg-9 p-0 tools__wrapper">
            <NuxtChild />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { instructorToolsRedirect } from '~/middleware'
import Spinner from '~/utils/spinner.js'
export default {
  middleware: [instructorToolsRedirect],
  mixins: [Spinner],
  computed: {
    avatar() {
      return this.$auth.user.mentor.image
    },
  },
}
</script>

<style></style>
