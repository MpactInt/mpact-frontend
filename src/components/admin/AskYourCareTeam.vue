<template>
  <section class="admin-workshops-section half-cut-bg">
    <h1 class="page-title text-left mt-0">ASK YOUR <span>CARE TEAM</span></h1>
    <div class="table-responsive">
      <table class="table">
        <tr>
          <th>Name</th>
          <th>Company Name</th>
          <th>Description</th>
        </tr>
        <tr v-if="questionListLength" v-for="r in questionList.data" v-bind:key="r.id">
          <td>{{ r.first_name }} {{ r.last_name }}</td>
          <td>{{ r.company_name }}</td>
          <td>
            <p>{{ r.description }}</p>
          </td>

        </tr>
        <tr v-if="!questionListLength">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
      <pagination :data="questionList" @pagination-change-page="getQuestionList" />
    </div>
    <!-- </div> -->
  </section>
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
