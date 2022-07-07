<template>
  <div class="">
    <div class="row form-group">
      <textarea class="form-control" id="ask-question" v-model="askQuestion.description"
        placeholder="Ask Your Care Team"></textarea>
    </div>
    <div class="form-group">
      <button type="button" :disabled="askQuestion.disabled" class="btn btn-primary" @click="submitAskQuestion">Submit</button>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Api from '../../router/api'
export default {
  name: 'AskQuestion',
  data() {
    return {
      askQuestion: {
        description: '',
        disabled: false
      }
    }
  },
  methods: {
    submitAskQuestion: function () {
      let that = this
      if (!that.askQuestion.description) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        })
      } else {
        that.askQuestion.disabled = true
        Api.submitAskQuestion(that.askQuestion).then(response => {
          that.askQuestion.disabled = false
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Submitted successfully",
            showConfirmButton: true
          }).then(function () {
            that.askQuestion.disabled = false
            that.askQuestion.description = ''
          });
        })
      }
    }
  },
  mounted() {
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
