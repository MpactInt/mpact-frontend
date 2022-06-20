<template>
  <section class="login-section">
    <div class="login-inner">
      <div class="login-box">
        <div class="login-left">
          <div class="login-bg-text">
            <div class="left-content">
              <h1>Mpact International</h1>
              <h5>Innovating Change,</h5>
              <h5>One Prespective at a Time </h5>
            </div>
          </div>
        </div>
        <div class="login-right">
          <div class="login-form-box">
            <div class="logo">
              <a href="javascript:void(0)">
                <img src="../assets/images/logo.png">
              </a>
            </div>
            <p class="semi-bold text-gray f-18">Company Creation</p>
            <form class="login-from" @submit="validateForm" ref="createCompanyForm" enctype="multipart/form-data">
              <div class="row">
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="text" class="form-control" id="companyname" placeholder="Company/Organization Name"
                      v-model="chargebeeUser.companyname">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="email" class="form-control" id="email"
                      placeholder="Company/Organization Representative Email" v-model="chargebeeUser.email">
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
                    <input type="text" class="form-control" id="companydomain" placeholder="Company Domain"
                      v-model="chargebeeUser.domain">
                  </div>
                </div>
                <div class="col-md-12">
                  <div class="form-group">
                    <input type="number" class="form-control" id="employees" placeholder="Number of employees"
                      v-model="chargebeeUser.employees">
                  </div>
                </div>
                <!-- <div class="col-md-6">
                  <div class="form-group">
                    <select type="text" class="form-control" id="plan" placeholder="Plan" v-model="chargebeeUser.plan">
                      <option hidden>Select Plan</option>
                      <option v-for="plan in plans" v-bind:value="plan.id" v-bind:key="plan.id">{{ plan.name }}</option>
                    </select>
                  </div>
                </div>
                <div class="col-md-6">
                  <div class="form-group">
                    <select type="text" class="form-control" id="addon" placeholder="Addon" v-model="chargebeeUser.addon">
                      <option hidden>Select Addon</option>
                      <option v-for="plan in addons" v-bind:value="plan.id" v-bind:key="plan.id">{{ plan.name }}
                      </option>
                    </select>
                  </div>
                </div> -->
                <div class="col-md-12">
                  <div class="form-group">
                    <div class="custom-file">
                      <input type="file" class="custom-file-input" id="logo" ref="logo" @change="fileOnChange">
                      <label class="custom-file-label" for="customFile">Upload Company Logo</label>
                    </div>
                  </div>
                </div>
              </div>
              <p class="term-condition"><label class="custom-container text-gray">Terms and Conditons Here.
                  <input type="checkbox" id="terms" v-model="chargebeeUser.terms">
                  <span class="custom-checkmark"></span>
                </label>
              </p>
              <button type="submit" class="d-block btn btn-primary">Submit</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
// import Api from '../router/api'
/* eslint-disable */
import Api from '../router/api'
export default {
  name: 'CreateCompany',
  data() {
    return {
      msg: 'Create Company',
      chargebeeUser: {
        'companyname': '',
        'email': '',
        'password': '',
        // 'firstname':'',
        // 'lastname':'',
        'domain': '',
        'employees': '',
        'plan': '',
        'addon': '',
        'logo': '',
        'disabled': false,
        terms: ''
      },
      subscriptionPlans: []
    }
  },
  methods: {

    fileOnChange: function (e) {
      let that = this;
      this.chargebeeUser.logo = this.$refs.logo.files[0];
    },

    validateForm: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.$route.query.plan) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please select a plan from plans page",
          showConfirmButton: true
        });
      }
      else if (!that.chargebeeUser.companyname || !that.chargebeeUser.email || !that.chargebeeUser.password || !that.chargebeeUser.domain || !that.chargebeeUser.employees || !that.chargebeeUser.terms) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.chargebeeUser.disabled = true;
        const formData = new FormData();
        formData.append('companyname', that.chargebeeUser.companyname);
        formData.append('email', that.chargebeeUser.email);
        formData.append('domain', that.chargebeeUser.domain);
        formData.append('employees', that.chargebeeUser.employees);
        formData.append('plan', that.$route.query.plan);
        formData.append('periodUnit', that.$route.query.periodUnit);
        formData.append('planType', that.$route.query.planType);
        formData.append('password', that.chargebeeUser.password);
        formData.append('addon', that.chargebeeUser.addon);
        formData.append('logo', that.chargebeeUser.logo);

        axios.post(APP_URL + '/create-company', formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
              'Access-Control-Allow-Origin': '*'
            }
          }).then(response => {
            // const elem = this.$refs.chargebeeBtn
            // elem.click()
            // that.chargebeeUser.disabled = false;
            this.$swal({
              icon: "success",
              title: "Success",
              text: "Customer created successfully",
              showConfirmButton: true
            }).then(function () {
              that.chargebeeUser.disabled = false;
              that.$router.push('/checkout/' + response.data.res.employee_registration_link);
            });

          }
          ).catch((error) => {
            this.$swal({
              icon: "error",
              title: "error",
              text: error.response.data.message,
              showConfirmButton: true
            });
          });
      }
    },
    getPlans: function () {
      let that = this;
      Api.getPlans().then(response => {
        that.plans = response.data.res
      }
      ).catch((error) => {

      });
    },
  },
  mounted() {
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
