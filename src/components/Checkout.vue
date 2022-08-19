<template>
    <section class="employer-announcements-section pink-pattern-bg">
        <div class="login-inner">
            <div class="col-md-12 p-5 card-box">
                <form class="login-from" @submit="validateForm" ref="createCompanyForm">
                    <div class="login-form-box">
                        <div class="logo">
                            <a href="javascript:void(0)">
                                <img src="../assets/images/logo.png">
                            </a>
                        </div>
                        <h1 class="page-title text-left mt-3 "><span>Checkout</span></h1>
                        <div class="row">
                            <div class="col-md-8">
                                <h5 class="page-sub-title">Billing Information</h5>
                        <div class="row">
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="firstname" placeholder="First Name"
                                            v-model="companyData.billingAddress.firstName" @keypress="alphabetsOnly">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastname" placeholder="Last Name"
                                            v-model="companyData.billingAddress.lastName" @keypress="alphabetsOnly">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email"
                                            v-model="companyData.billingAddress.email">
                                    </div>
                                </div>
                                <div class="col-lg-6">
                                    <div class="form-group">
                                        <input type="number" class="form-control" id="employees"
                                            placeholder="Number of employees" v-model="companyData.employees">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="company" placeholder="Company Name"
                                            v-model="companyData.billingAddress.company">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="firstName" placeholder="Address"
                                            v-model="companyData.billingAddress.address">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastName" placeholder="City"
                                            v-model="companyData.billingAddress.city">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="state" placeholder="State"
                                            v-model="companyData.billingAddress.state">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="zip" placeholder="Zipcode"
                                            v-model="companyData.billingAddress.zip" @keypress="numbersOnly">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control" id="country" placeholder="Select Country"
                                            v-model="companyData.billingAddress.country">
                                            <option value="">Select Country</option>
                                            <option v-for="c in countries" :value="c.code" v-bind:key="c.id">
                                                {{ c.name }}
                                            </option>
                                        </select>
                                        <!-- <input type="text" class="form-control" id="country" placeholder="Country"
                                            v-model="companyData.billingAddress.country"> -->
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <button type="submit" class="d-block btn btn-primary">Submit</button>
                                </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <h5 class="page-sub-title">Cart Item </h5>
                                <div class="card mb-0 "style=" z-index: 9;">
                                      <ul class="list-group list-group-flush">
                                        <li class="list-group-item"><p class="card-text  d-flex align-items-center w-100"><b> Cart Item</b> <span class="my-0 mr-0 ml-auto total-items">{{ cartItems.length }}</span></p> </li>
                                      </ul>
                                    </div>
                                <!-- <h5 class="page-sub-title">Your Cart <span class="total-items">{{ cartItems.length }}</span></h5> -->
                                <div class="cart-item card m-0"  v-for="ci in cartItems" v-bind:key="ci.id">
                                    <div class="card-title">
                                        {{ ci.description }} :
                                        <span class="card-subtitle">
                                        {{ ci.amount / 100 | totalAmount }} <small> {{ currencyCode }}</small>
                                        </span>
                                    </div>
                                </div>
                                    <div class="card  text-white bg-dark mt-0">
                                        <div class="card-body">
                                           <h5 class="card-title white-color"> Total :
                                                {{ estimateData / 100 | totalAmount }} 
                                                <small>{{ currencyCode }}</small>
                                            </h5>
                                        </div>
                                    </div>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>

<script>
// import Api from '../router/api'
/* eslint-disable */
import Api from '../router/api'
import AppMixin from '../mixins/AppMixin'
export default {
    name: 'CreateCompany',
    mixins: [AppMixin],
    data() {
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
            estimateData: [],
            cartItems: [],
            countries: [],
            currencyCode: ''
        }
    },
    methods: {
        getCountries: function () {
            let that = this;
            that.companyData.link = that.$route.params.link
            Api.getCountries(that.companyData).then(response => {
                that.countries = response.data.res
            })
        },
        validateForm: function (e) {
            e.preventDefault();
            let that = this;
            console.log(that.companyData)
            if (that.companyData.billingAddress.firstName == '' || that.companyData.billingAddress.lastName == '' || that.companyData.billingAddress.email == '' ||
                that.companyData.employees == '' || that.companyData.billingAddress.company == '' || that.companyData.billingAddress.address == '' ||
                that.companyData.billingAddress.city == '' || that.companyData.billingAddress.state == '' || that.companyData.billingAddress.zip == '' || that.companyData.billingAddress.country == '') {
                this.$swal({
                    icon: "error",
                    title: "Error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
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
            let that = this;
            Api.getCompanyDetails(link).then(response => {
                // console.log(response.data.res);
                that.companyData.billingAddress.email = response.data.res.email
                that.companyData.billingAddress.company = response.data.res.company_name
                that.companyData.employees = response.data.res.total_employees
                that.companyData.plan = response.data.res.selected_plan_id
                that.companyData.addon = response.data.res.selected_addon_id
                this.createEstimate();
            }
            ).catch((error) => {

            });
        }
    },
    mounted() {
        this.getCompanyDetails(this.$route.params.link)
        this.getCountries()
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
