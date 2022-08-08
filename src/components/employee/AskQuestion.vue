<template>
  <section class="employee-ask-question-section half-cut-bg">
      <h1 class="page-title text-left">Ask Your <span>Care Team</span></h1>
      <AskQuestionEmployee></AskQuestionEmployee>
  </section>
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
