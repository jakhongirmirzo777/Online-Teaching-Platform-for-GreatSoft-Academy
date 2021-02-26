<template>
  <div class="table-responsive purchase-table">
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th class="purchase-history">Purchase history</b-th>
          <b-th class="header-content">Date</b-th>
          <b-th class="header-content">Total Price</b-th>
          <b-th class="header-content">Payment Type</b-th>
          <b-th class="header-content">Receipt</b-th>
          <b-th class="header-content">Invoice</b-th>
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="i in 3" :key="i" class="data-row">
          <b-th class="flex md:flex-row sm:flex-col purchase-history-column">
            <img
              src="~assets/svgs/yellow_korzinka.svg"
              alt="korzinka"
              class="w-7 h-7 mr-3 mt-2 img-korzinka"
            />
            <div class="flex flex-column">
              <p class="context">1 Courses purchased</p>
              <nuxt-link class="all-courses-link mt-1 ml-1" to="#"
                >View all courses</nuxt-link
              >
            </div>
          </b-th>
          <b-td class="custom-text">Nov. 27, 2020</b-td>
          <b-td class="total-price">zł37.99</b-td>
          <b-td class="custom-text">zł37.99 MasterCard ****2236</b-td>
          <b-td><b-button variant="outline-primary">Receipt</b-button> </b-td>
          <b-td><b-button variant="outline-primary">Invoice </b-button></b-td>
        </b-tr>
      </b-tbody>
    </b-table-simple>
  </div>
</template>
