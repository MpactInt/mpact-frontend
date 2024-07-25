<template>
<section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Settings</span>
        </p>
    </div>

    <!-- card-10 stat -->
    <div class="w-full">
        <div class="mx-5 flex flex-wrap space-x-1 items-center">
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 rounded-md bg-white text-black text-center text-md shadow">
                <span class="flex-1 ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings">Welcome Note</router-link>
                </span>
            </button>
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-white text-black text-center text-md shadow">
                <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings-logo">Change Logo</router-link>
                </span>
            </button>
            <button
                class="m-1 flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-[#BE0858] text-white text-center text-md shadow">
                <span class="flex-1  ml-3 whitespace-nowrap">
                    <router-link to="/employer/settings-password">Change Password</router-link>
                </span>
            </button>
        </div>
        <div class="w-full">
            <div class="p-6 flex justify-between px-8">
                <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3 flex flex-col">
                            <div class="my-2">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-current-password">
                                    Current Password *
                                </label>
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" id="password" placeholder="Current Password" v-model="changePass.oldPassword">

                            </div>
                            <div class="my-2">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-current-password">
                                    New Password *
                                </label>
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" id="password" placeholder="New Password" v-model="changePass.newPassword">
                            </div>
                            <div class="my-2">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-current-password">
                                    Retype New Password *
                                </label>
                                <input
                                    class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" type="password" id="cpassword" placeholder="Confirm Password" v-model="changePass.confirmNewPassword">
                            </div>
                        </div>
                    </div>

                    <div class="mx-auto ">
                        <button
                            class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" type="button" :disabled="changePass.disabled" @click="changePassword">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <!-- card-10 end -->
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import axios from 'axios'
import Api from '../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'Settings',
  data() {
    return {
      changePass: {
        'oldPassword': '',
        'newPassword': '',
        'confirmNewPassword': '',
        'disabled': false
      }
    }
  },
  mixins: [AppMixin],
  methods: {
    changePassword: function () {
      let that = this;
      if (!that.changePass.oldPassword || !that.changePass.newPassword || !that.changePass.confirmNewPassword) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else if (that.changePass.newPassword != that.changePass.confirmNewPassword) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "New password and Confirm password not matched",
          showConfirmButton: true
        });
      } else {
        that.changePass.disabled = true;
        Api.changePassword(that.changePass).then(response => {
          that.changePass.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Password changed successfully",
            showConfirmButton: true
          }).then(function () {
            that.changePass.disabled = false
            that.changePass.oldPassword = ''
            that.changePass.newPassword = ''
            that.changePass.confirmNewPassword = ''
          });
        }).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.changePass.disabled = false;
          });
        });
      }
    },
  },
  mounted() {
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
