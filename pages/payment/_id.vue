<template>
  <div class="container-fluid payment-container">
    <div class="row">
      <div class="col-md-6 offset-md-3 form-container">
        <b-button @click="changeComponent('click')"
          ><img src="~assets/svgs/click.svg" alt="click"
        /></b-button>
        <b-button @click="changeComponent('payme')">
          <img src="~assets/svgs/payme.svg" alt="click" />
        </b-button>
        <transition name="fade">
          <component :is="currentComponent" class="my-4" />
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import click from '@/components/Payment/click'
import payme from '@/components/Payment/payme'

export default {
  name: 'payment',
  components: {
    click,
    payme,
  },

  data() {
    return {
      currentComponent: click,
    }
  },
  methods: {
    changeComponent(componentType) {
      this.currentComponent = componentType
      console.log('change components type')
    },
  },
}
</script>

<style scoped>
.payment-container {
  min-height: 80vh;
  padding: 2rem 1rem;
  background: #f3f8ff;
}
.is-active {
  background: #4d25bb;
  color: #fff;
}
.payment-title {
  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 64px;
  line-height: 100%;
  color: #333366;
}
</style>
