<template>
  <div class="table-responsive purchase-table">
    <b-table-simple>
      <b-thead>
        <b-tr>
          <b-th class="purchase-history">Purchase history</b-th>
          <b-th class="header-content">Date</b-th>
          <b-th class="header-content">Total Price</b-th>
          <b-th class="header-content">Card number</b-th>
          <b-th class="header-content">Actions</b-th>
          <!-- <b-th class="header-content">Receipt</b-th>
          <b-th class="header-content">Invoice</b-th> -->
        </b-tr>
      </b-thead>
      <b-tbody>
        <b-tr v-for="(purchase, i) in purchases" :key="i" class="data-row">
          <b-th class="flex md:flex-row sm:flex-col purchase-history-column">
            <img
              src="~assets/svgs/yellow_korzinka.svg"
              alt="korzinka"
              class="w-7 h-7 mr-3 mt-2 img-korzinka"
            />
            <div class="flex flex-column">
              <p class="context m-0">
                {{ purchase[`title_${$i18n.locale}`] | filterTitle }}
              </p>
              <!-- <nuxt-link class="all-courses-link mt-1 ml-1" to="#"
                >View all courses</nuxt-link
              > -->
            </div>
          </b-th>
          <b-td class="custom-text">
            {{ purchase.time_created | filterTime }}
          </b-td>
          <b-td class="total-price">{{ purchase.price }} UZS</b-td>
          <b-td class="custom-text">
            {{ purchase.card_number | adjustCardNum }}
          </b-td>
          <b-td class="custom-text">
            <b-button
              @click="deleteHistory(purchase.id)"
              v-b-modal.delete
              variant="outline-dark"
              >Delete</b-button
            >
          </b-td>
          <!-- <b-td><b-button variant="outline-primary">Receipt</b-button> </b-td>
          <b-td><b-button variant="outline-primary">Invoice </b-button></b-td> -->
        </b-tr>
        <b-modal
          title="Pay attention:"
          class="deleteModal"
          @ok="handleDelete"
          id="delete"
        >
          <h1 style="font-size: 1.4rem; font-weight: 500">
            Are you sure to delete this history?
          </h1>
        </b-modal>
      </b-tbody>
    </b-table-simple>
  </div>
</template>

<script>
export default {
  computed: {
    purchases() {
      return this.$auth.user.user.purchose_user
    },
  },
  methods: {
    async handleDelete() {
      try {
        const purchaseId = this.$route.query.purchaseId
        const instructorData = this.$store.state.instructorsPage.mentorData
        const resAccess = await this.$axios.post('token/', instructorData)
        if (resAccess.data.access) {
          await this.$axios.delete(`card/purchose/${purchaseId}/`, {
            headers: { Authorization: `Bearer ${resAccess.data.access}` },
          })
          this.$auth.fetchUser()
        }
      } catch (err) {
        console.log(err)
      }
    },

    deleteHistory(id) {
      this.$router.push({
        path: this.$route.path,
        query: { purchaseId: id },
      })
    },
  },
  filters: {
    filterTime(date) {
      return date.slice(0, 10).split('-').reverse().join('-')
    },
    filterTitle(title) {
      return title.slice(0, 20)
    },
    adjustCardNum(num) {
      return num.match(/.{1,4}/g).join(' ')
    },
  },
}
</script>

<style></style>
