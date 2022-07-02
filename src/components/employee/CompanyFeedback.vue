<template>
  <div class="employee-hero-section">
    <div class="container">
      <h1 class="text-blue bold">Feeback to comapny admin</h1>
      <div class="row">
        <div class="form-group">
          <textarea class="form-control" id="ask-question" v-model="feedback.description"
            placeholder="Feedback to company admin"></textarea>
        </div>
        <div class="form-group">
          <input type="checkbox" v-model="feedback.anonymous" /> Anonymous
        </div>
        <div class="form-group mt-2">
          <button type="button" :disabled="feedback.disabled" class="btn btn-primary"
            @click="submitCompanyFeedback">Submit</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Api from '../../router/api'
export default {
  name: 'CompanyFeedback',
  data() {
    return {
      feedback: {
        description: '',
        anonymous: '',
        disabled: false
      }
    }
  },
  methods: {
    submitCompanyFeedback: function () {
      let that = this
      if (!that.feedback.description) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        })
      } else {
        that.feedback.disabled = true
        Api.submitCompanyFeedback(that.feedback).then(response => {
          that.feedback.disabled = false
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Submitted successfully",
            showConfirmButton: true
          }).then(function () {
            that.feedback.disabled = false
            that.feedback.description = ''
            that.feedback.anonymous = ''
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
