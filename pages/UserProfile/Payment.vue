<template>
  <div>
    <div class="w-full top-header flex flex-column items-center justify-center">
      <h1 class="content-h1">{{ itemDetails.headerTitle }}</h1>
      <p class="content-p">{{ itemDetails.description }}</p>
    </div>
    <div class="container-fluid">
      <div class="row row-1">
        <div class="col-md-8 offset-md-2 flex justify-center items-center py-5">
          <b-form-group
            class="checkbox-form"
            label="Payment settings:"
            v-slot="{ ariaDescribedby }"
          >
            <b-form-checkbox-group
              class="checkbox"
              id="checkbox-group-1"
              v-model="selected"
              :options="options"
              :aria-describedby="ariaDescribedby"
              name="flavour-1"
            ></b-form-checkbox-group>
          </b-form-group>
        </div>
      </div>
      <div class="row row-2">
        <div class="col-md-12 grid">
          <b-button
            class="btn-submit mt-4 mb-4 justify-self-center"
            type="submit"
            >Enter a new card</b-button
          >
        </div>
        <hr />
      </div>
      <div class="row row-3">
        <div class="col-md-12">
          <b-list-group class="list-group mt-4">
            <b-list-group-item
              class="list-group-item flex"
              variant="transparent"
              v-for="card in cards"
              :key="card"
            >
              <img
                src="~assets/images/visa1.png"
                alt="car.id"
                style="width: 50px"
                class="col-span-1 flex-shrink-0"
              />
              <p class="flex-grow px-4">*** *** *** 2236 | EXP: 02/25</p>
              <b-button variant="outline-dark">Delete</b-button>
            </b-list-group-item>
          </b-list-group>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['itemDetails'],
  data() {
    return {
      selected: '',
      options: [
        {
          text: 'Keep transaction information for further purchases',
          value: '1',
        },
      ],
      cards: [
        {
          id: 1,
          imgUrl: '~assets/images/visa.png',
          date: 1,
        },
        {
          id: 1,
          imgUrl: '~assets/images/visa.png',
          date: 1,
        },
      ],
    }
  },
}
</script>

<style scoped>
.checkbox {
  width: 100%;
  border: 1px solid #333366;
  box-sizing: border-box;
  padding: 0.5rem 1rem;
  font-family: Open Sans;
  font-size: 15px;
  color: #333366;
}
.checkbox-form {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
  width: 100%;
}
.row-1 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.row-2 {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
}
.btn-submit {
  background: #5d30db;
  border-radius: 4px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #ffffff;
}
.list-group-item {
  background: transparent;
  border: none;
  border-bottom: 1px solid rgba(51, 51, 102, 0.25);
  border-radius: 0px;
}
.top-header {
  border-bottom: 1px solid rgba(51, 51, 102, 0.5);
  min-height: 7rem;
}
.top-header .content-h1 {
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: 26px;
  line-height: 35px;
  color: #333366;
}
.top-header .content-p {
  font-family: Open Sans;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 25px;
  color: #333366;
}
</style>
