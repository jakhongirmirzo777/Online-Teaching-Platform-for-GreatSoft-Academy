<template>
  <div class="container-fluid showcase">
    <div class="row app-header">
      <div class="col-md-10 offset-md-1 flex flex-wrap content-end">
        <div class="flex w-full my-8">
          <nav style="flex: 1" class="flex items-center text-white">
            <h1 class="content-h1">Purchase history</h1>
          </nav>
        </div>
      </div>
    </div>
    <div class="row mt-10">
      <div class="col-md-10 offset-md-1">
        <purchase-history-table />
      </div>
    </div>
  </div>
</template>

<script>
import PurchaseHistoryTable from '~/components/UserAccount/purchaseHistoryTable.vue'

export default {
  components: { PurchaseHistoryTable },
  name: 'myNotifications',
  layout: 'userAccount',
}
</script>

<style scoped>
.showcase {
  height: 100%;
  min-height: 100vh;
  background: #f3f8ff;
  padding-bottom: 2rem;
}
.app-header {
  height: 186px;
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
