<template></template>
<script>
import { quizRedirect } from '~/middleware'
export default {
  name: 'quiz',
  middleware: [quizRedirect],
}
</script>
