<template>
  <transition name="scroll">
    <a @click="scrollTop" v-show="visible" class="up-btn">
      <fa size="2x" :icon="['fas', 'angle-up']" />
    </a>
  </transition>
</template>

<script>
export default {
  data() {
    return {
      visible: false,
    }
  },
  methods: {
    scrollTop: function () {
      this.intervalId = setInterval(() => {
        if (window.pageYOffset === 0) {
          clearInterval(this.intervalId)
        }
        window.scroll(0, window.pageYOffset - 50)
      }, 20)
    },
    scrollListener: function (e) {
      this.visible = window.scrollY > 150
    },
  },
  mounted: function () {
    window.addEventListener('scroll', this.scrollListener)
  },
  beforeDestroy: function () {
    window.removeEventListener('scroll', this.scrollListener)
  },
}
</script>

<style scoped>
.scroll-enter-active,
.scroll-leave-active {
  transition: opacity 0.5s ease-in-out;
}
.scroll-enter,
.scroll-leave-to {
  opacity: 0;
}

.up-btn {
  position: fixed;
  bottom: 30px;
  left: 20px;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 0.4rem 0.8rem;
  z-index: 9999;
  border: 1px solid #ccc;
  background-color: #5d30db;
  animation: leap 0.6s linear infinite alternate;
  transition: all 0.2s;
}

.up-btn:hover {
  box-shadow: 0 0 10px 6px rgba(93, 48, 219, 0.4);
}

@keyframes leap {
  from {
    transform: translateY(0.7rem);
  }

  to {
    transform: translateY(0);
  }
}
</style>
