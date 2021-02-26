<template>
  <button class="controlButton" :class="btnStyle" v-on="$listeners">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    btnStyle: {
      type: String,
      default: '',
    },
  },
}
</script>

<style></style>
