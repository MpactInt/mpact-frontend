<template>
  <div class="col-md-9">
    <router-link to="/employer/team-management">
      <button class="btn-primary">
        <i class="fa fa-arrow-left white"></i>
      </button>
    </router-link>
    <h1>Invitations</h1>
    <div class="mt-5">
      <div class="row mb-3">
        <div class="col-md-3">
          <select v-model="searchData.sortBy" class="form-control" v-on:change="getInvitationsList">
            <option value="">Sort By</option>
            <option value="email">Email</option>
          </select>
        </div>
        <div class="col-md-3">
          <input type="text" v-model="searchData.email" class="form-control" placeholder="Search By Email"
            v-on:keyup="getInvitationsList" />
        </div>
      </div>
      <table class="table">
        <tr>
          <td>Email</td>
          <td>Date</td>
        </tr>
        <tr  v-if="invitationsLength" v-for="e in invitationsList.data" v-bind:key="e.id">
          <td>{{ e.email }}</td>
          <td>{{ e.created_at | timeAgo }}</td>
        </tr>
        <tr v-if="!invitationsLength"><td colspan="2">No Data Found</td></tr>
      </table>
      <pagination :data="invitationsList" @pagination-change-page="getInvitationsList" />
    </div>
  </div>
</template>

<script>
/* eslint-disable */
import Api from '../../../router/api'
import AppMixin from '../../../mixins/AppMixin'

export default {
  name: 'Invitations',
  mixins: [AppMixin],
  data() {
    return {
      hideFooter: true,
      invitationsList: {},
      invitationsLength:0,
      searchData: {
        'sortBy': '',
        'email': ''
      }
    }
  },
  methods: {
    getInvitationsList: function (page = 1) {
      let that = this
      Api.getInvitationsList(that.company.id, page, that.searchData).then(response => {
        let that = this
        that.invitationsList = response.data.res
        that.invitationsLength = that.invitationsList.data.length
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
  },
  mounted() {
    this.getInvitationsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
