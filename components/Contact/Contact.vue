<template>
  <div>
    <div class="contact__us">
      <div class="container">
        <h1>Contact Us!</h1>
        <p>Ask your question. Our administrator will call you soon</p>
        <div class="row">
          <div class="col-lg-6">
            <ContactForm />
          </div>
          <div class="col-lg-6">
            <ContactMap />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ContactForm from '~/components/Contact/ContactForm'
import ContactMap from '~/components/Contact/ContactMap'
export default {
  components: {
    ContactForm,
    ContactMap,
  },
}
</script>
