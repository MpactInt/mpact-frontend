<template>
  <section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Support Requests</span>
        </p>
    </div>
    <!-- card-10 stat -->
    <div class="w-full">
        <div class="py-6 px-8">
            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Name
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Date
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Response
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="questionListLength" v-for="r in questionList.data" v-bind:key="r.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ r.first_name }} {{ r.last_name }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <p>{{ r.description | truncate(20)}}</p>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.created_at | timeAgo }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <p v-html="r.response ? (r.response) : 'NA'"></p>
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" v-if="!r.forward_to_admin && (user.role == 'ADMIN' || (company && company.role == 'COMPANY_ADMIN'))" @click="forwardToAdmin(r.id)">
                                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Forward to Admin</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="r.forward_to_admin && (user.role == 'ADMIN' || (company && company.role == 'COMPANY_ADMIN'))">
                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Forwarded</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="((user.role == 'ADMIN'  && !r.response)|| (company && company.role == 'COMPANY_ADMIN'  && !r.response && r.company_id != company.id))" v-b-modal.response-modal @click="respondQuestion(r.id)">
                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Respond</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="((user.role == 'ADMIN' && r.response)|| (company && company.role == 'COMPANY_ADMIN' && r.response))">
                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Responded</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="archiveQuestion(r.id)">
                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Archive</span>
                                </button>

                                <router-link :to="'view-question/' + r.id" class="btn btn-primary">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2">
                                        <span
                                            class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">View</span>
                                    </button>
                                </router-link>

                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50" v-if="!questionListLength">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="5"> No Data Found </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="questionList" @pagination-change-page="getQuestionList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <b-modal id="response-modal" size="lg" title="Respond to Question" :hide-footer=hideFooter no-enforce-focus>
      <div class="form-group">
        <label>Response <span class="err">*</span></label>
        <vue2-tinymce-editor v-model="response.response" placeholder="Response"></vue2-tinymce-editor>

        <!-- <textarea class="form-control" id="respond" placeholder="Response" v-model="response.response"></textarea> -->
      </div>
      <button type="button" class="btn btn-primary" @click="submitResponse" :disabled="response.disabled">Submit
      </button>
    </b-modal>

  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

import Api from '../../../router/api'
export default {
  name: 'AskYourCareTeam',
  data() {
    return {
      hideFooter: true,
      msg: 'Ask Your Care Team',
      questionList: {},
      questionListLength: 0,
      searchData: {
        'sortBy': '',
        'sortOrder': ''
      },
      response: {
        questionId: '',
        response: '',
        disabled: false
      },
      type:""
    }
  },
  components: {
    Vue2TinymceEditor
  },
  mixins: [AppMixin],
  methods: {
    respondQuestion: function (id) {
      let that = this;
      that.response.questionId = id
    },
    submitResponse: function () {
      let that = this;
      if (!that.response.response) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please enter response",
          showConfirmButton: true
        });
      } else {
        Api.submitResponse(that.response).then(response => {
          that.$swal({
            icon: "success",
            title: "Success",
            text: "Responded successfully",
            showConfirmButton: true
          }).then(function () {
            that.$bvModal.hide('response-modal')
            that.response.response = ''
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
    getQuestionList: function (page = 1) {
      let that = this;
      Api.getQuestionList(page, that.searchData).then(response => {
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
      this.$swal({
        title: 'Are you sure?',
        text: 'You want to forward this question to super admin',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
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
      });
    },
    archiveQuestion: function (id) {
      let that = this;
      this.$swal({
        title: 'Are you sure?',
        text: 'You want to archive this question? You wont be able to revert it',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes!',
        cancelButtonText: 'No!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        Api.archiveQuestion(id).then(response => {
          that.$swal({
            icon: "success",
            title: "Success",
            text: "Archived successfully",
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
      });
    },
  },
  mounted() {
    // if(this.user.role == "ADMIN"){
    //   this.type = "admin"
    // }else{
    //   if(this.company.role == "COMPANY_EMP"){
    //     this.type = "employee"
    //   }else{
    //     this.type = "employer"
    //   }
    // }
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
