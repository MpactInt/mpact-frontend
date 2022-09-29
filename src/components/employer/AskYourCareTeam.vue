<template>
  <section class="admin-workshops-section half-cut-bg">
    <h1 class="page-title text-left mt-0">ASK YOUR <span>CARE TEAM</span></h1>
    <div class="table-responsive">
      <table class="table">
        <tr>
          <th>Name <i class="fa-solid fa-arrow-up"
              @click="searchData.sortBy = 'first_name'; searchData.sortOrder='asc';getQuestionList()"></i> <i
              class="fa-solid fa-arrow-down"
              @click="searchData.sortBy = 'first_name'; searchData.sortOrder='desc';getQuestionList()"></i></th>
          <!-- <th>Company Name <i class="fa-solid fa-arrow-up"
              @click="searchData.sortBy = 'company_name'; searchData.sortOrder='asc';getQuestionList()"></i> <i
              class="fa-solid fa-arrow-down"
              @click="searchData.sortBy = 'company_name'; searchData.sortOrder='desc';getQuestionList()"></i></th> -->
          <th>Description <i class="fa-solid fa-arrow-up"
              @click="searchData.sortBy = 'description'; searchData.sortOrder='asc';getQuestionList()"></i> <i
              class="fa-solid fa-arrow-down"
              @click="searchData.sortBy = 'description'; searchData.sortOrder='desc';getQuestionList()"></i></th>
          <th>Action</th>
        </tr>
        <tr v-if="questionListLength" v-for="r in questionList.data" v-bind:key="r.id">
          <td>{{ r.first_name }} {{ r.last_name }}</td>
          <!-- <td>{{ r.company_name }}</td> -->
          <td>
            <p>{{ r.description }}</p>
          </td>
          <td>
            <button type="button" class="btn btn-primary" v-if="!r.forward_to_admin"
              @click="forwardToAdmin(r.id)">Forward to Admin</button>
            <button type="button" class="btn btn-primary" v-if="r.forward_to_admin">Forwarded</button>

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
      questionListLength: 0,
      searchData:{
        'sortBy':'',
        'sortOrder':''
      }

    }
  },
  methods: {
    getQuestionList: function (page = 1) {
      let that = this;
      Api.getQuestionList(page,that.searchData).then(response => {
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
    forwardToAdmin: function (id) {
      let that = this;
      Api.forwardToAdmin(id).then(response => {
        that.$swal({
          icon: "success",
          title: "Success",
          text: "Forwarded successfully",
          showConfirmButton: true
        }).then(function () {
          that.getQuestionList();
        });
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        });
      });
    }
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
