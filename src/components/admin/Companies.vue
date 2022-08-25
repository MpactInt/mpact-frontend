<template>
  <section class="admin-workshops-section half-cut-bg">
    <h1 class="page-title text-left mt-0"><span>{{ msg }}</span></h1>
    <div class="w-100 d-flex my-2">
      <button class="btn btn-primary ml-auto" v-b-modal.add-modal>Add Company</button>
    </div>
    <div class="table-responsive">
      <table class="table">
        <tr>
          <th>Logo</th>
          <th>Company Name</th>
          <th>Selected Plan</th>
          <th>Consulting Hours Total</th>
          <th>Consulting Hours Remaining</th>
          <th>Action</th>
        </tr>
        <tr v-if="comapanyListLength" v-for="r in comapanyList.data" v-bind:key="r.id">
          <td><img :src="path + r.company_logo" class="table-img" height="75" width="75" /></td>
          <td>{{ r.company_name }}</td>
          <td>{{ r.selected_plan_id }}</td>
          <td>{{ r.total_hours }}</td>
          <td>{{ r.remaining_hours }}</td>
          <td>
            <!-- <button class="btn btn-primary" @click="getCompanyDetails(r)" v-b-modal.update-hours-modal>Update
              Hours
            </button> -->

            <a type="button" class="mx-3 d-block" width="24" @click="getCompany(r)" v-b-modal.update-modal>
              <img src="../../assets/images/table-edit.svg" alt="table-edit" width="24" height="24" />
            </a>
          </td>
        </tr>
        <tr v-if="!comapanyListLength">
          <td colspan="5">No Data Found</td>
        </tr>
      </table>
    </div>
    <pagination :data="comapanyList" @pagination-change-page="getCompaniesList" />
     <b-modal id="add-modal" size="lg" title="Add New Company" :hide-footer=hideFooter no-fade no-enforce-focus>
      <Add :modalAdd=1></Add>
    </b-modal>

    <b-modal id="update-modal" size="lg" title="Update Company" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form @submit="updateProfile">
        <div class="col-md-12">
          <div class="form-group">
            <input type="text" class="form-control" id="companyname" placeholder="Company/Organization Name"
              v-model="chargebeeUser.companyname">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input type="text" class="form-control" id="firstname" placeholder="First Name"
              v-model="chargebeeUser.firstname" @keypress="alphabetsOnly">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input type="text" class="form-control" id="lastname" placeholder="Last Name"
              v-model="chargebeeUser.lastname" @keypress="alphabetsOnly">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input type="password" class="form-control" id="password" placeholder="Password"
              v-model="chargebeeUser.password">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input class="form-control" type="text" v-model="chargebeeUser.remainingHours" @keypress="numbersOnly"
              placeholder="Remaining Hours" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <input type="file" ref="file" class="form-control" accept=".jpeg, .jpg, .png" @change="onFileChange">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <button class="btn btn-primary" type="submit" :disabled="chargebeeUser.disabled">Update</button>
          </div>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
/* eslint-disable */

import Add from '../common/companies/Add.vue'
import Api from '../../router/api'
import AppMixin from '../../mixins/AppMixin'

export default {
  name: 'Companies',
  mixins: [AppMixin],
  data() {
    return {
      hideFooter: true,
      msg: 'Companies',
      comapanyList: {},
      comapanyListLength: 0,
      path: '',
      searchData: {},
      updateData: {
        companyId: '',
        remainingHours: '',
        disabled: false
      },
      chargebeeUser: {
        'id': '',
        'companyname': '',
        'password': '',
        'firstname': '',
        'lastname': '',
        'logo': '',
        'domain': '',
        'remainingHours': '',
        'disabled': false,
      },
    }
  },
  components: { Add },
  methods: {
    getCompany: function (r) {
      let that = this
      that.chargebeeUser.id = r.id
      that.chargebeeUser.companyname = r.company_name
      that.chargebeeUser.password = r.password
      that.chargebeeUser.firstname = r.first_name
      that.chargebeeUser.lastname = r.last_name
      that.chargebeeUser.remainingHours = r.remaining_hours
      // that.chargebeeUser.logo = r.logo
    },
    getCompaniesList: function (page = 1) {
      let that = this
      Api.getCompaniesList2(page, that.searchData).then(response => {
        that.comapanyList = response.data.res
        that.comapanyListLength = that.comapanyList.data.length
        that.path = response.data.path
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
        })
      })
    },
    onFileChange: function () {
      let that = this
      that.chargebeeUser.logo = that.$refs.file.files[0]
    },
    updateProfile: function (e) {
      let that = this
      e.preventDefault()
      const formData = new FormData()
      formData.append('id', that.chargebeeUser.id)
      formData.append('company_logo', that.chargebeeUser.logo)
      formData.append('company_name', that.chargebeeUser.companyname)
      formData.append('first_name', that.chargebeeUser.firstname)
      formData.append('last_name', that.chargebeeUser.lastname)
      formData.append('password', that.chargebeeUser.password)
      formData.append('remaining_hours', that.chargebeeUser.remainingHours)
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      that.chargebeeUser.disabled = true
      Api.updateProfileCompany(formData, headers).then(response => {
        this.$swal({
          icon: 'success',
          title: 'Success',
          text: 'Profile Updated Successfully',
          showConfirmButton: true
        }).then(function () {
          that.chargebeeUser.disabled = false
          that.$bvModal.hide('update-modal')
          that.getCompaniesList()
        })
      }
      ).catch((error) => {
        that.chargebeeUser.disabled = false
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
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
