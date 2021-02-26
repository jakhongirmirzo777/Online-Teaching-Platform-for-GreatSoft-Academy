<template>
  <div class="performance">
    <spinner2 v-if="isLoading" />
    <div class="performance__container">
      <a-tabs size="large" default-active-key="1">
        <a-tab-pane class="performance__tab" key="1">
          <span class="performance__span" slot="tab"> Total revenue </span>
          <CourseRevenue />
        </a-tab-pane>
        <a-tab-pane class="performance__tab" key="2">
          <span class="performance__span" slot="tab"> Total enrollments </span>
          <CourseEnrollments />
        </a-tab-pane>
        <a-tab-pane class="performance__tab" key="3">
          <span class="performance__span" slot="tab"> Instructor rating </span>
          <CourseRating />
        </a-tab-pane>
      </a-tabs>
    </div>
  </div>
</template>

<script>
import Vue from 'vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
Vue.use(Antd)
import Spinner from '~/utils/spinner.js'
import CourseEnrollments from '~/components/Instructor-page/Performance/CourseEnrollments'
import CourseRating from '~/components/Instructor-page/Performance/CourseRating'
import CourseRevenue from '~/components/Instructor-page/Performance/CourseRevenue'
export default {
  components: { CourseEnrollments, CourseRating, CourseRevenue },
  mixins: [Spinner],
}
</script>

<style></style>
