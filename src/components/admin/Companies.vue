<template>
  <section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">{{ msg }}</span>
        </p>
    </div>

    <!-- card-10 stat -->
    <div class="w-full">
        <div class="py-6 px-8">
            <div class="flex justify-between py-6">
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd"
                                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                    clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search"
                            class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                            placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getCompaniesList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-modal>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add Company</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Logo
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Company Name
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Selected Plan
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Consulting Hours Total
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Consulting Hours Remaining
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Registered Date
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="comapanyListLength" v-for="r in comapanyList.data" v-bind:key="r.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                <img :src="path + r.company_logo" class="table-img" height="75" width="75" />
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.company_name }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.selected_plan_id }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.total_hours }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.remaining_hours }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.created_at | timeAgo }}
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getCompany(r)" v-b-modal.update-modal>
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_143_2408)">
                                            <path
                                                d="M7.33301 2.66666H4.53301C3.4129 2.66666 2.85285 2.66666 2.42503 2.88464C2.0487 3.07639 1.74274 3.38235 1.55099 3.75867C1.33301 4.1865 1.33301 4.74655 1.33301 5.86666V11.4667C1.33301 12.5868 1.33301 13.1468 1.55099 13.5746C1.74274 13.951 2.0487 14.2569 2.42503 14.4487C2.85285 14.6667 3.4129 14.6667 4.53301 14.6667H10.133C11.2531 14.6667 11.8132 14.6667 12.241 14.4487C12.6173 14.2569 12.9233 13.951 13.115 13.5746C13.333 13.1468 13.333 12.5868 13.333 11.4667V8.66666M5.33299 10.6667H6.44935C6.77547 10.6667 6.93853 10.6667 7.09198 10.6298C7.22803 10.5972 7.35809 10.5433 7.47739 10.4702C7.61194 10.3877 7.72724 10.2724 7.95785 10.0418L14.333 3.66666C14.8853 3.11437 14.8853 2.21894 14.333 1.66666C13.7807 1.11437 12.8853 1.11437 12.333 1.66665L5.95783 8.04182C5.72723 8.27242 5.61193 8.38772 5.52947 8.52228C5.45637 8.64157 5.40249 8.77163 5.36983 8.90768C5.33299 9.06113 5.33299 9.22419 5.33299 9.55031V10.6667Z"
                                                stroke="#0A0446" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_143_2408">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Edit</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteCompany(r.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                            stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Delete</span>
                                </button>

                                <a type="button" class="mx-3 d-block" v-if="r.deleted_at" @click="activeInactiveCompany(r.id,1)" style="width:40px">
                                  <img src="../../assets/images/on.svg" alt="table-edit" width="40" height="40" />
                                </a>
                                <a type="button" class="mx-3 d-block" v-if="!r.deleted_at" style="width:40px" @click="activeInactiveCompany(r.id,0)">
                                  <img src="../../assets/images/off.svg" alt="table-edit" width="40" height="40" />
                                </a>

                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50" v-if="!comapanyListLength">
                            <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="7"> No Data Found </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="comapanyList" @pagination-change-page="getCompaniesList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <b-modal id="add-modal" size="lg" title="Add New Company" :hide-footer=hideFooter no-fade no-enforce-focus>
      <Add :modalAdd=1></Add>
    </b-modal>

    <b-modal id="update-modal" size="lg" title="Update Company" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form @submit="updateProfile">
        <div class="col-md-12">
          <div class="form-group">
            <label>Company/Organization Name <span class="err">*</span></label>
            <input type="text" class="form-control" id="companyname" placeholder="Company/Organization Name"
              v-model="chargebeeUser.companyname">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>First Name<span class="err">*</span></label>
            <input type="text" class="form-control" id="firstname" placeholder="First Name"
              v-model="chargebeeUser.firstname" @keypress="alphabetsOnly">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Last Name<span class="err">*</span></label>
            <input type="text" class="form-control" id="lastname" placeholder="Last Name"
              v-model="chargebeeUser.lastname" @keypress="alphabetsOnly">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Password<span class="err">*</span></label>
            <input type="password" class="form-control" id="password" placeholder="Password"
              v-model="chargebeeUser.password">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Remaining Hours<span class="err">*</span></label>
            <input class="form-control" type="text" v-model="chargebeeUser.remainingHours" @keypress="numbersOnly"
              placeholder="Remaining Hours" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Total Hours<span class="err">*</span></label>
            <input class="form-control" type="text" v-model="chargebeeUser.totalHours" @keypress="numbersOnly"
              placeholder="Total Hours" />
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Logo<span class="err">*</span></label>
            <input type="file" ref="file" class="form-control" accept=".jpeg, .jpg, .png" @change="onFileChange">
          </div>
        </div>
        <div class="col-md-12">
          <div class="form-group">
            <label>Uploaded Logo</label><br>
            <img :src="path+chargebeeUser.uploadedLogo" height="50" width="50"/>
          </div>
        </div>

        <div class="pb-2 pt-4" >
          <label for="learning_plan_start_date">General Learning Plan Interval Duration</label>
          <!-- <input type="text" id="duration" placeholder="Duration" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.duration"> -->
                <select id="duration" placeholder="Duration" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.duration">
                    <option value="">--Select--</option>
                    <option value="1">1 Day</option>
                    <option value="2">2 Days</option>
                    <option value="3">3 Days</option>
                    <option value="21">3 Weeks</option>
                    <option value="28">4 Weeks</option>
                    <option value="35">5 Weeks</option>
                    <option value="42">6 Weeks</option>
                    <option value="56">8 Weeks</option>
                    <option value="70">10 Weeks</option>
                    <option value="84">12 Weeks</option>

                </select>
        </div>
        <div class="pb-2 pt-4"  >
          <label for="learning_plan_start_date">General Learning Plan Start Date</label>
          <input type="date" id="learning_plan_start_date" placeholder="Learning plan start date" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.learning_plan_start_date">
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
      searchData: {
        keyword: ''
      },
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
        'uploadedLogo':'',
        'domain': '',
        'remainingHours': '',
        'totalHours': '',
        'disabled': false,
        'duration':'',
        "learning_plan_start_date":'',
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
      that.chargebeeUser.totalHours = r.total_hours
      that.chargebeeUser.uploadedLogo = r.company_logo
      that.chargebeeUser.duration = r.duration
      that.chargebeeUser.learning_plan_start_date = r.learning_plan_start_date



    },
    activeInactiveCompany: function (id, status) {
      let st = '';
      let st1 = '';
      if (status) {
        st = "Reactive"
        st1 = "Reactivated"
      } else {
        st = "Deactivate"
        st1 = "Deactivated"
      }
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'You want to ' + st + ' this company',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes ' + st + ' it!',
        cancelButtonText: 'No',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.activeInactiveCompany(id, status).then(response => {
            this.$swal({
              icon: "success",
              title: "Success",
              text: "Company " + st1 + ' successfully',
              showConfirmButton: true
            }).then(function () {
              that.getCompaniesList()
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
      formData.append('total_hours', that.chargebeeUser.totalHours)
      formData.append('duration', that.chargebeeUser.duration)
      formData.append('learning_plan_start_date', that.chargebeeUser.learning_plan_start_date)



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
    deleteCompany: function (id) {
          let that = this
          this.$swal({
              title: 'Are you sure?',
              text: 'All the related info will be deleted, you wont be able to revert !',
              type: 'warning',
              showCancelButton: true,
              confirmButtonText: 'Yes Delete it!',
              cancelButtonText: 'No, Keep it!',
              showCloseButton: true,
              showLoaderOnConfirm: true
          }).then((result) => {
              if (result.value) {
                  Api.deleteCompany(id).then(response => {
                      this.$swal({
                          icon: 'success',
                          title: 'Success',
                          text: 'Company deleted successfully',
                          showConfirmButton: true
                      }).then(function () {
                          that.getCompaniesList()
                      })
                  }).catch((error) => {
                      this.$swal({
                          icon: 'error',
                          title: 'error',
                          text: error.response.data.message,
                          showConfirmButton: true
                      }).then(function () {
                          that.todo.disabled = false
                      })
                  })
              }
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
