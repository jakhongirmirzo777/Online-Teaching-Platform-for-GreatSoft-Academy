<template>
  <section class="chart">
    <div class="container">
      <div class="row mb-6">
        <div class="col-md-3 mb-6">
          <div class="chart__filter mb-6">
            <input
              type="month"
              id="filter1"
              name="filter1"
              min="2021-01"
              value="2021-01"
            />
          </div>
          <div class="chart__bar">
            <column-chart
              :data="dataIncomeOutcome"
              height="100%"
              width="100%"
              suffix="k"
              :colors="[['#5d5fef', '#f05454']]"
              :dataset="{ borderWidth: 0 }"
            />
          </div>
        </div>
        <div class="col-md-9 mb-6">
          <div class="chart__filter mb-6">
            <input
              type="month"
              id="filter2"
              name="filter2"
              min="2021-01"
              value="2021-01"
            />
          </div>
          <div class="chart__bar">
            <column-chart
              :data="dataBarGraph"
              height="100%"
              width="100%"
              :colors="[
                ['#5d5fef', '#f05454', '#16a596', '#ffa62b', '#111d5e'],
              ]"
              thousands=","
              :dataset="{ borderWidth: 0, borderRadius: '10px' }"
            />
          </div>
        </div>
      </div>
      <div class="row">
        <div
          class="col-lg-3 mb-6"
          v-for="(card, index) in dataCard"
          :key="index"
        >
          <div class="chart__card">
            <h3>{{ card.title }}</h3>
            <h1>{{ card.number }}</h1>
            <nuxt-link :to="card.link">{{ card.content }}</nuxt-link>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col-md-12">
          <div class="chart__filter mb-6">
            <input
              type="month"
              id="filter2"
              name="filter2"
              min="2021-01"
              value="2021-01"
            />
          </div>
          <div class="chart__line">
            <line-chart
              :data="dataLineGraph"
              height="100%"
              width="100%"
              suffix="k"
              :colors="['#4619E1', '#f05454']"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Vue from 'vue'
import Chartkick from 'vue-chartkick'
import Chart from 'chart.js'
Vue.use(Chartkick.use(Chart))

export default {
  data() {
    return {
      dataIncomeOutcome: [
        ['Income', 3],
        ['Outcome', 5],
      ],
      dataBarGraph: [
        ['Frontend', 300],
        ['Backend', 500],
        ['Python', 400],
        ['Vue', 800],
        ['React', 200],
      ],
      dataCard: [
        {
          title: 'Number of students',
          number: 256,
          content: "See customers that haven't been sent an invite",
          link: '/',
        },
        {
          title: 'Number of instructors',
          number: 18,
          content: "See customers that haven't been sent an invite",
          link: '/',
        },
        {
          title: 'Number of mentors',
          number: 125,
          content: "See customers that haven't been sent an invite",
          link: '/',
        },
        {
          title: 'Number of courses',
          number: 12,
          content: "See customers that haven't been sent an invite",
          link: '/',
        },
      ],
      dataLineGraph: [
        {
          name: 'Income',
          data: {
            January: 3,
            February: 4,
            March: 1,
          },
        },
        {
          name: 'Outcome',
          data: {
            January: 5,
            February: 3,
            March: 6,
          },
        },
      ],
    }
  },
}
</script>

<style></style>
