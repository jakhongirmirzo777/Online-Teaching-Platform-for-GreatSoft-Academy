export default {
  methods: {
    showToast(variant, title, message) {
      // Use a shorter name for this.$createElement
      const h = this.$createElement
      // Create the message
      const vNodesMsg = h('p', { class: ['text-center', 'mb-2'] }, [
        h('b-spinner', { props: { type: 'grow', small: true } }),
        message,
        h('b-spinner', { props: { type: 'grow', small: true } }),
      ])
      // Create the title
      const vNodesTitle = h(
        'div',
        {
          class: ['d-flex', 'zindex-tooltip', 'align-items-baseline', 'mr-2'],
        },
        [h('strong', { class: 'mr-2' }, title)]
      )
      // Pass the VNodes as an array for message and title
      this.$bvToast.toast([vNodesMsg], {
        title: [vNodesTitle],
        solid: true,
        variant: variant,
        toaster: 'b-toaster-top-right',
        autoHideDelay: 3000,
      })
    },
  },
}
