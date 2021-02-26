<template>
  <div class="performance__chart">
    <line-chart
      :data="dataLineGraph"
      height="100%"
      width="100%"
      suffix="k"
      :colors="['#4619E1']"
    />
  </div>
</template>

<script>
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

export default {
  data() {
    return {
      dataLineGraph: [
        {
          name: 'Income',
          data: {
            January: 0,
            February: 2,
            March: 1,
          },
        },
      ],
    }
  },
}
</script>

<style></style>
