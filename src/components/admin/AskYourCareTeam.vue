<template>
  <div class="container">
    <div class="row">
      <h1>{{ msg }}</h1>

      <div class="row">
        <div class="col-md-3">

        </div>
        <div class="col-md-3">

        </div>
        <div class="col-md-3">

        </div>

      </div>
      <div class="row mt-3">
        <table class="table">
          <tr>
            <td>Name</td>
            <td>Company Name</td>
            <td>Description</td>
          </tr>
          <tr v-if="questionListLength" v-for="r in questionList.data" v-bind:key="r.id">
            <td>{{r.first_name}} {{r.last_name}}</td>
            <td>{{ r.company_name }}</td>
            <td>
              <p>{{r.description}}</p>
            </td>

          </tr>
          <tr v-if="!questionListLength">
            <td colspan="5">No Data Found</td>
          </tr>
        </table>
        <pagination :data="questionList" @pagination-change-page="getQuestionList" />
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

import Api from '../../router/api'
export default {
  name: 'AskYourCareTeam',
  data() {
    return {
      msg: 'Ask Your Care Team',
      questionList: {},
      questionListLength: 0

    }
  },
  methods: {
    getQuestionList: function (page = 1) {
      let that = this;
      Api.getQuestionList(page).then(response => {
        that.questionList = response.data.res
        that.questionListLength = that.questionList.data.length
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    },
  },
  mounted() {
    this.getQuestionList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.form-group {
  margin-bottom: 1rem;
}

.err {
  color: red;
}
</style>
