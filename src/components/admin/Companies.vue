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
            <td>Company Name</td>
            <td>Selected Plan</td>
            <td>Consulting Hours Total</td>
            <td>Consulting Hours Remaining</td>
            <td>Action</td>
          </tr>
          <tr v-if="comapanyListLength" v-for="r in comapanyList.data" v-bind:key="r.id">
            <td>{{ r.company_name }}</td>
            <td>{{ r.selected_plan_id }}</td>
            <td>{{ r.total_hours }}</td>
            <td>{{ r.remaining_hours }}</td>
            <td><button class="btn btn-primary" @click="getCompanyDetails(r)" v-b-modal.update-hours-modal>Update
                Hours</button></td>
          </tr>
          <tr v-if="!comapanyListLength">
            <td colspan="5">No Data Found</td>
          </tr>
        </table>
        <pagination :data="comapanyList" @pagination-change-page="getCompaniesList" />
      </div>
    </div>
    <b-modal id="update-hours-modal" size="lg" title="Update Hours" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form>
        <div class="form-group">
          <label>Remaining Hours</label>
          <input class="form-control" type="text" v-model="updateData.remainingHours" />
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" @click="updateHours"
            :disabled="updateData.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
  </div>
</template>

<script>
/* eslint-disable */

import Api from '../../router/api'
export default {
  name: 'Comapnies',
  data() {
    return {
      hideFooter: true,
      msg: 'Comapnies',
      comapanyList: {},
      comapanyListLength: 0,
      searchData: {},
      updateData: {
        companyId: '',
        remainingHours: '',
        disabled: false
      }

    }
  },
  methods: {
    getCompaniesList: function (page = 1) {
      let that = this;
      Api.getCompaniesList2(page, that.searchData).then(response => {
        that.comapanyList = response.data.res
        that.comapanyListLength = that.comapanyList.data.length
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
    getCompanyDetails: function (data) {
      let that = this
      that.updateData.companyId = data.id
      that.updateData.remainingHours = data.remaining_hours
    },
    updateHours: function () {
      let that = this;
      Api.updateHours(that.updateData).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Hours updated successfully",
          showConfirmButton: true
        }).then(function () {
          that.updateData.disabled = false
          that.$bvModal.hide('update-hours-modal')
          that.getCompaniesList()
        });
      }).catch((error) => {
        that.updateData.disabled = false
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
    this.getCompaniesList()
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
