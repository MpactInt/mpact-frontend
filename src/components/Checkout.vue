<template>
<section class="employer-announcements-section pink-pattern-bg">
    <div class="bg-[#F7F7F7]">
            <nav class="sticky top-0 z-50 w-full bg-white border-b border-gray-200">
                <div class="flex flex-wrap justify-between items-center py-4 px-6">

                    <a href="#" class="flex items-center">
                        <img src="../assets/images/logo.png" class="h-8 mr-3" alt="Logo" />
                    </a>

                    <button data-collapse-toggle="mega-sidebar" type="button"
                    class="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                    aria-controls="mega-sidebar" aria-expanded="false">
                        <span class="sr-only">Open main menu</span>
                        <svg class="w-6 h-6" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </button>
                </div>
            </nav>

            <div class="py-6 px-8 px-2 py-10 border border-1 rounded-lg mx-8 my-8 shadow">

                <div class="wrap justify-between">
                    <p class="uppercase text-3xl text-gray-400 uppercase font-bold">
                        <span class="text-[#0A0446]">CHECKOUT</span>
                    </p>
                </div>

                <hr class="h-px my-4 bg-gray-200 border-0">


                <div class="flex flex-row my-2 space-x-4 rounded-md">
                    <div
                        class="w-full md:w-[60%] px-8 py-6 border border-1 rounded-lg bg-white items-center justify-between space-y-2">
                        <p class="font-bold text-[#0A0446] ">Billing Information
                        </p>

                        <div class="mt-2">
                            <div class="flex justify-between py-4">
                                <form class="w-full" @submit="validateForm" ref="createCompanyForm">
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-firstname-1">
                                                First Name
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="firstname" type="text" placeholder="First Name" v-model="companyData.billingAddress.firstName" @keypress="alphabetsOnly"> 
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-lastname-1">
                                                Last Name *
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="lastname" type="text" placeholder="Last Name" v-model="companyData.billingAddress.lastName" @keypress="alphabetsOnly">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-email-1">
                                                Email
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="email" type="email" placeholder="Email" required v-model="companyData.billingAddress.email">
                                        </div>
                                        <div class="w-full md:w-1/2 px-3">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-emp-num-1">
                                                Number of Employee
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="employees" type="number" placeholder="0" v-model="companyData.employees">
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-full px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-company-name-1">
                                                Company Name
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="company" type="text" placeholder="Company Name" v-model="companyData.billingAddress.company">
                                        </div>
                                    </div>
                                    
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-full px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-city-name-1">
                                                City
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-city-name-1" type="text" placeholder="City" v-model="companyData.billingAddress.city">
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-full px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-state-name-1">
                                                State
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-state-name-1" type="text" placeholder="State" v-model="companyData.billingAddress.state">
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full md:w-full px-3 mb-2 md:mb-0">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-zip-name-1">
                                                Zip Code
                                            </label>
                                            <input
                                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-zip-name-1" type="number" placeholder="Zip Code" v-model="companyData.billingAddress.zip" @keypress="numbersOnly"> 
                                        </div>
                                    </div>

                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full px-3">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="address-1">
                                                Address
                                            </label>
                                            <textarea id="address-1" rows="4"
                                                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                                placeholder="Leave a comment..." required v-model="companyData.billingAddress.address"></textarea>
                                        </div>
                                    </div>
                                    <div class="flex flex-wrap -mx-3 mb-2">
                                        <div class="w-full px-3">
                                            <label
                                                class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                for="grid-country-1">
                                                Country
                                            </label>
                                            <div class="relative">
                                                <select
                                                    class="w-full px-3 border border-gray-200 text-gray-700 py-3 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                    id="country" v-model="companyData.billingAddress.country">
                                                    <option value="">Select Country</option>
                                                    <option v-for="c in countries" :value="c.code" v-bind:key="c.id">
                                                      {{ c.name }}
                                                    </option>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="mx-auto ">
                                        <button type="submit"
                                            class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black">
                                            Submit
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

                    </div>

                    <div class="flex flex-col space-y-4 w-full md:w-[40%]">


                        <div
                            class="px-8 py-6 border border-1 bg-white rounded-lg items-center justify-between space-y-2 px-8">

                            <div class="flex flex-row justify-between">
                                <p class="font-bold text-[#0A0446]">Order Summary</p>
                                <p class="font-medium text-white bg-[#0A0446] rounded-full px-2">{{ cartItems.length }}</p>
                            </div>

                            <hr class="h-px my-2 bg-gray-200 border-0">

                            <div class="w-full">
                                <div class="flex flex-row justify-between"  v-for="ci in cartItems" v-bind:key="ci.id">
                                    <h1 class="text-[#0A0446] font-medium text-lg truncate ">{{ ci.description }}</h1>
                                    <h1 class="text-[#0A0446] font-bold text-lg">{{ ci.amount / 100 | totalAmount }} {{ currencyCode }}</h1>
                                </div>

                                <hr class="h-px my-2 bg-gray-200 border-0">

                                <div class="flex flex-row justify-between">
                                    <h1 class="text-[#0A0446] font-bold text-lg truncate">Total</h1>
                                    <h1 class="text-[#0A0446] font-bold text-lg">{{ estimateData / 100 | totalAmount }} {{ currencyCode }}</h1>
                                </div>
                            </div>
                        </div>
                        <button
                            class="text-sm font-bold px-8 py-2.5 w-full rounded-md bg-[#0A0446] text-white text-center text-md" @click="showUpdatePlanPopUp()">
                            Update Plan
                        </button>
                    </div>
                </div>

            </div>


            <!-- footer-stat -->
            <FooterEmployee></FooterEmployee>
            <!-- footer-end -->

        </div>

    <!--Update plan modal popup-->
    <b-modal id="update-plan-modal" title="Update Plan" :hide-footer=hideFooter>
      <form>
        <div id="update-details">
          <div class="form-group">
            <label>Subscription Plan <span class="err">*</span></label>
            <multiselect v-model="companyData.plan" :options="plans" placeholder="Type to search"
                track-by="name" label="name">
                <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>              
          </div>

          <div class="form-group">
            <label>Number of employees <span class="err">*</span></label>
            <input type="text" class="form-control" id="no-of-emp" placeholder="Number of employees"
              v-model="companyData.employees">
          </div>
          
          <button type="button" @click="updatePlan" class="btn btn-primary">Update
          </button>
        </div>
      </form>

    </b-modal>

  </section>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<script>
import FooterEmployee from '../components/employee/includes/Footer'
// import Api from '../router/api'
/* eslint-disable */
import Api from '../router/api'
import AppMixin from '../mixins/AppMixin'


export default {
  name: 'CreateCompany',
  mixins: [AppMixin],
  data () {
    return {
      msg: 'Create Company',
      companyData: {
        'employees': '',
        'plan': '',
        'addon': '',
        'billingAddress': {
          'firstName': '',
          'lastName': '',
          'email': '',
          'company': '',
          'phone': '',
          'address': '',
          'city': '',
          'state': '',
          'zip': '',
          'country': ''
        },
        'disabled': false,
        'terms': '',
        'link': '',
        'payOffline': ''
      },
      plans:[],
      estimateData: [],
      cartItems: [],
      countries: [],
      currencyCode: '',
    }
  },
  components: {  FooterEmployee },
  methods: {
    getCountries: function () {
      let that = this
      that.companyData.link = that.$route.params.link
      Api.getCountries(that.companyData).then(response => {
        that.countries = response.data.res
      })
    },
    validateForm: function (e) {
      e.preventDefault()
      let that = this
      //console.log(that.companyData)
      if (that.companyData.billingAddress.firstName == '' || that.companyData.billingAddress.lastName == '' || that.companyData.billingAddress.email == '' ||
        that.companyData.employees == '' || that.companyData.billingAddress.company == '' || that.companyData.billingAddress.address == '' ||
        that.companyData.billingAddress.city == '' || that.companyData.billingAddress.state == '' || that.companyData.billingAddress.zip == '' || that.companyData.billingAddress.country == '') {
        this.$swal({
          icon: 'error',
          title: 'Error',
          text: 'Please fill all required fields',
          showConfirmButton: true
        })
      } else {
        that.companyData.link = that.$route.params.link
        Api.createSubscription(that.companyData).then(response => {
          window.location = response.data.res.url
        })
      }
    },
    createEstimate: function () {
      let that = this
      Api.createEstimate(that.companyData).then(response => {
        that.estimateData = response.data.res[0].invoice_estimate.total
        that.currencyCode = response.data.res[0].invoice_estimate.currency_code
        that.cartItems = response.data.res[0].invoice_estimate.line_items
      })
    },
    getCompanyDetails: function (link) {
      let that = this
      Api.getCompanyDetails(link).then(response => {
          // console.log(response.data.res);
          that.companyData.billingAddress.email = response.data.res.email
          that.companyData.billingAddress.company = response.data.res.company_name
          that.companyData.employees = response.data.res.total_employees
          that.companyData.plan = response.data.res.selected_plan_id
          that.companyData.addon = response.data.res.selected_addon_id
          this.createEstimate()
        }
      ).catch((error) => {

      })
    },
    showUpdatePlanPopUp: function () {
      let that = this
      that.$bvModal.show('update-plan-modal')
    },
    updatePlan: function () { 
      let that = this
      if (!that.companyData.employees || !that.companyData.plan) {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: 'Please fill all required fields',
          showConfirmButton: true
        })
      } else {
        Api.updatePlan(that.companyData).then(response => {
          this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Profile details updated successfully',
            showConfirmButton: true
          }).then(function () {
            that.$bvModal.hide('update-plan-modal')
            location.reload();
          })
        })
      }
    
    },
    getPlans: function () {
        let that = this;
        Api.getPlans2().then(response => { 
            that.plans = response.data.res
        }
        ).catch((error) => {

        });
    },
  },

  mounted () {
    this.getCompanyDetails(this.$route.params.link)
    this.getCountries()
  },
  created() {
      this.getPlans()
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
