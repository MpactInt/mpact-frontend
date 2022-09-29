<template>
    <section class="employer-ask-question-section half-cut-bg">
      <h1 class="page-title text-left">Ask Your <span>Care Team</span></h1>
      <AskQuestionEmployer></AskQuestionEmployer>
  </section>
</template>

<script>
/* eslint-disable */
import AskQuestionEmployer from '../common/AskQuestion.vue'
import Api from '../../router/api'
import AskYourCareTeam from '../admin/AskYourCareTeam.vue'

export default {
  name: 'AskQuestion',
  components: { AskQuestionEmployer,AskYourCareTeam },
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
