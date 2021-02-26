<template>
  <div class="performance__wrapper">
    <div class="performance__filter">
      <div class="performance__price">Total enrollments: 1000</div>
      <div class="performance__select">
        <a-select
          show-search
          default-value="week"
          option-filter-prop="children"
          style="width: 200px"
          :filter-option="filterOption"
          @change="handleChange"
        >
          <a-select-option value="week"> Last 7 days </a-select-option>
          <a-select-option value="month"> Last 30 days </a-select-option>
          <a-select-option value="year"> Last 12 months </a-select-option>
          <a-select-option value="alltime"> All time </a-select-option>
        </a-select>
      </div>
    </div>
    <CourseChart />
  </div>
</template>

<script>
import CourseChart from '~/components/Instructor-page/Performance/CourseChart'
export default {
  components: {
    CourseChart,
  },
  methods: {
    handleChange(value) {
      console.log(`selected ${value}`)
    },
    filterOption(input, option) {
      return (
        option.componentOptions.children[0].text
          .toLowerCase()
          .indexOf(input.toLowerCase()) >= 0
      )
    },
  },
}
</script>

<style></style>
