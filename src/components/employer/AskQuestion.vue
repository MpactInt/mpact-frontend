<template>
  <div class="col-md-10">
    <h1>Ask Your Care Team</h1>
    <AskQuestionEmployer></AskQuestionEmployer>
  </div>
</template>

<script>
/* eslint-disable */
import AskQuestionEmployer from '../common/AskQuestion.vue'
import Api from '../../router/api'
export default {
  name: 'AskQuestion',
  components: { AskQuestionEmployer },
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
