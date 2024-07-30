<template>
  <section class="registration-link half-cut-bg">
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Non Employee Surevey Invite</span>
        </p>
    </div>


    <!-- card-10 stat -->
    <div class="w-full">
        <div class="pb-6 px-8">
            <form class="w-full lg:w-1/3">
                <div class="my-2">
                    <div class="mb-2 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                            for="email">
                            Insert an email to send invite:
                        </label>
                        <input
                            class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                            id="forgot-email" type="email" placeholder="Enter email" aria-describedby="emailHelp" v-model="sendEmail.email">
                        <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                    </div>
                    <div class="">
                        <button type="button" 
                            class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#BE0858] text-white text-center text-md" @click="sendSurveyInviteLinkToEmail" :disabled="sendEmail.disabled">
                            Submit
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
    <!-- card-10 end -->
  </section>
</template>

<script>
/* eslint-disable */
import Api from '../../../router/api'
import AppMixin from '../../../mixins/AppMixin'

export default {
  name: 'RegistrationLink',
  data() {
    return {
      hideFooter: true,
      sendEmail: {
        'email': '',
        'disabled': false
      },
      linkCopied: false
    }
  },
  mixins: [AppMixin],
  methods: {
    sendSurveyInviteLinkToEmail: function () {
      let that = this
      if (!that.sendEmail.email) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please Enter Email",
          showConfirmButton: true
        });
      } else {
        that.sendEmail.disabled = true
        Api.sendSurveyInviteLinkToEmail(that.sendEmail).then(response => {
          this.$swal({
            icon: "success",
            title: "success",
            text: "Email sent successfully",
            showConfirmButton: true
          }).then(() => {
            that.sendEmail.email = ''
            that.sendEmail.disabled = false
            
          });
        }
        ).catch((error) => {
          that.sendEmail.disabled = false
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
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
