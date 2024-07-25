<template>
<section>
  <div class="py-6 px-8">
      <div class="wrap space-y-2 justify-between">
          <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
              <span class="text-[#090446]">Edit profile</span>
          </p>
      </div>
  </div>

  <div class="flex flex-col space-y-6 px-2 py-10 border border-1 mx-8 my-2 rounded-md">
      <div class="mx-8 px-8 py-6 border border-1 rounded-lg flex flex-wrap items-center justify-between space-y-2 px-8" v-if="authUser.role!='ADMIN'">
          <div class="flex flex-wrap items-center space-x-4">
              <div class="flex items-baseline">
                  <img class="profile-img h-20 border border-4 border-gray-200 rounded-full" :src="authUser.profile_image">
                  <label class="-ml-6 bg-white px-1.5 py-.6 border border-2 border-gray-300 rounded-full font-bold cursor-pointer" @click="$refs.file.click()">+</label>
                  <input type="file" ref="file" class="hidden" @change="uploadProfileImage" accept=".jpeg, .jpg, .png">

              </div>
              <div class="flex flex-col">
                  <p class="font-bold">{{ authUser.first_name }} {{ authUser.last_name }}</p>
                  <p class="text-sm">{{ authUser.company_name }} </p>
              </div>
          </div>
      </div>

      <div class="mx-8 px-8 py-6 border border-1 rounded-lg items-center justify-between space-y-2 px-8">
          <p class="font-bold text-[#0A0446]">Personal information</p>

          <div class="mt-2 grid grid-cols-1 gap-4">
              <form class="w-full">
                  <div class="flex flex-wrap -mx-3 mb-2">
                      <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-firstname">
                              First Name *
                          </label>
                          <input class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="firstname" placeholder="First Name" v-model="authUser.first_name" @keypress="alphabetsOnly">
                          <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-lastname">
                              Last Name *
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text" id="lastname" placeholder="Last Name"
                              v-model="authUser.last_name" @keypress="alphabetsOnly">
                      </div>
                      <div class="w-full md:w-1/2 px-3" v-if="authUser.role == 'COMPANY_EMP'">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city-state">
                              Title *
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text" id="title" placeholder="Title" v-model="authUser.title">
                      </div>
                      <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0" v-if="authUser.role == 'COMPANY_ADMIN'">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-email">
                              Company Name *
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                              type="text" id="companyname" placeholder="Company Name"
                              v-model="authUser.company_name">
                          <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                      </div>
                      <div class="w-full md:w-1/2 px-3" v-if="authUser.role == 'COMPANY_ADMIN'">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-phone">
                              Company Domain *
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text" id="companydomain" placeholder="Company Domain" v-model="authUser.company_domain">
                      </div>
                      <div class="w-full md:w-1/2 px-3" v-if="authUser.role == 'COMPANY_ADMIN'">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city-state">
                              Total Employees *
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text" id="title" placeholder="Total Employees" v-model="authUser.total_employees">
                      </div>
                      <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city-state">
                              Address *
                          </label>
                          <textarea class="form-control" id="address" placeholder="Address" v-model="authUser.address"></textarea>  
                      </div>
                      
                  </div>
                  <div class="mx-auto ">
                      <button class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black"  type="button" @click="updateProfile" :disabled="authUser.disabled">
                          Submit
                      </button>
                  </div>
              </form>
          </div>
      </div>
  </div>

</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
  name: 'CommonProfile',
  mixins: [AppMixin],
  data() {
    return {
      hideFooter: true,
      profile: {
        profile_image: ''
      },
      authUser: {
        'first_name': '',
        'last_name': '',
        'address': '',
        'company_name': '',
        'company_domain': '',
        'title': '',
        'disabled': false
      }
    }
  },
  methods: {
    uploadProfileImage: function (e) {
      let that = this
      that.profile.profile_image = that.$refs.file.files[0]
      e.preventDefault()
      const formData = new FormData()
      formData.append('profile_image', that.profile.profile_image)
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.uploadProfileImage(formData, headers).then(response => {
        this.$swal({
          icon: 'success',
          title: 'Success',
          text: 'Profile Image Updated Successfully',
          showConfirmButton: true
        }).then(function () {
          $('.profile-img').attr('src', response.data.res.profile_image)
          $('.profile-image').attr('src', response.data.res.profile_image)
          $('.logo-img').attr('src', response.data.res.profile_image)
        })
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    updateProfile: function () {
      let that = this
      if (!that.authUser.first_name || !that.authUser.last_name || !that.authUser.company_name || !that.authUser.address) {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: 'Please fill all required fields',
          showConfirmButton: true
        })
      } else {
        that.authUser.disabled = true

        Api.updateProfile(that.authUser).then(response => {
          that.authUser.disabled = false
          this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Profile details updated successfully',
            showConfirmButton: true
          }).then(function () {
            that.authUser.disabled = false
            
            that.getAuthUser()
            if (that.authUser.role == 'COMPANY_EMP') {
              $('.c-name').text(that.authUser.title)
            }
            else {
              $('.c-name').text(that.authUser.company_name)
            }
            $('.f-name').text(that.authUser.first_name + ' ' + that.authUser.last_name)

          })
        }
        ).catch((error) => {
          this.$swal({
            icon: 'error',
            title: 'error',
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.authUser.disabled = false
          })
        })
      }
    }
  },
  created() {
    this.getAuthUser()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
