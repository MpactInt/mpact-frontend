<template>
  <div class="col-md-9">
    <router-link to="/employer/team-management">
      <button class="btn-primary">
        <i class="fa fa-arrow-left white"></i>
      </button>
    </router-link>
    <div class="mt-5 mb-5">
      <h3>Employee Registration Link</h3>
      {{ employerDetails.employee_registration_link }}
      <button class="btn btn-primary" v-b-modal.email-link-modal>Send Link to Email</button>
      <button class="btn btn-primary" type="button" v-clipboard:copy="employerDetails.employee_registration_link"
        v-clipboard:success="onCopy">
        Copy Link
      </button>
      <p v-if="linkCopied" class="success">
        Link Copied
      </p>
    </div>

    <!--Send registration link to email popup-->
    <b-modal id="email-link-modal" title="Send link to email" :hide-footer=hideFooter>
      <div class="form-group">
        <label>Enter Email <span class="err">*</span></label>
        <input type="email" class="form-control" id="forgot-email" aria-describedby="emailHelp" placeholder="Email"
          v-model="sendEmail.email">
      </div>
      <button type="button" class="btn btn-primary" @click="sendLinkToEmail" :disabled="sendEmail.disabled">Send
        Email</button>
    </b-modal>
  </div>
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
        'link': '',
        'company_name': '',
        'company_id': '',
        'disabled': false
      },
      linkCopied: false
    }
  },
  mixins: [AppMixin],
  methods: {
    sendLinkToEmail: function () {
      let that = this
      if (!that.sendEmail.email) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please Enter Email",
          showConfirmButton: true
        });
      } else {
        that.sendEmail.link = that.employerDetails.employee_registration_link
        that.sendEmail.company_name = that.employerDetails.company_name
        that.sendEmail.company_id = that.employerDetails.id
        that.sendEmail.disabled = true
        Api.sendLinkToEmail(that.sendEmail).then(response => {
          this.$swal({
            icon: "success",
            title: "success",
            text: "Email sent successfully",
            showConfirmButton: true
          }).then(() => {
            that.sendEmail.email = ''
            that.sendEmail.disabled = false
            that.$bvModal.hide('email-link-modal')
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
    onCopy: function (e) {
      // alert('You just copied the following text to the clipboard: ' + e.text)
      this.linkCopied = true
      setTimeout(() => this.linkCopied = false, 2000);
    },
  },
  mounted() {
    this.getEmployeeRegistrationLink()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
