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
      
      <div class="mx-8 px-8 py-6 border border-1 rounded-lg items-center justify-between space-y-2 px-8">
          <p class="font-bold text-[#0A0446]">Personal information</p>

          <div class="mt-2 grid grid-cols-1 gap-4">
              <form class="w-full">
                  <div class="flex flex-wrap -mx-3 mb-2">

                      <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-phone">
                              Email
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="text" id="email" placeholder="Email" v-model="authUser.email">
                      </div>

                      <div class="w-full md:w-1/2 px-3">
                          <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city-state">
                              Password
                          </label>
                          <input
                              class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              type="password" id="password" placeholder="Password" v-model="authUser.password">
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
        'email': '',
        'password': '',
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
      if (!that.authUser.email && !that.authUser.password) {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: 'Please fill all fields',
          showConfirmButton: true
        })
      } else {
        that.authUser.disabled = true

        Api.updateAdminProfile(that.authUser).then(response => {
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
