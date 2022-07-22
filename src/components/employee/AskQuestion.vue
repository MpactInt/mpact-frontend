<template>
  <div class="employee-hero-section">
    <div class="container">
      <h1 class="text-blue bold">Ask Your Care Team</h1>
      <AskQuestionEmployee></AskQuestionEmployee>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import AskQuestionEmployee from '../common/AskQuestion.vue'
import Api from '../../router/api'
export default {
  name: 'AskQuestion',
  components: { AskQuestionEmployee },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
