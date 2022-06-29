<template>
    <section class="col-md-9 login-section">
        <div class="login-inner">
            <div class="col-md-12 p-5">
                <form class="login-from" @submit="validateForm" ref="createCompanyForm">
                    <div class="login-form-box">
                        <div class="logo">
                            <a href="javascript:void(0)">
                                <img src="../assets/images/logo.png">
                            </a>
                        </div>
                        <p class="semi-bold text-gray f-18">Checkout</p>
                        <div class="row">
                            <div class="col-md-8">
                                <h5>Billing Information</h5>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="firstname" placeholder="First Name"
                                            v-model="companyData.billingAddress.firstname">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="text" class="form-control" id="lastname" placeholder="Last Name"
                                            v-model="companyData.billingAddress.lastname">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <input type="email" class="form-control" id="email" placeholder="Email"
                                            v-model="companyData.billingAddress.email">
                                    </div>
                                </div>
                                <div class="col-md-12">
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
                                            v-model="companyData.billingAddress.zip">
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="form-group">
                                        <select class="form-control" id="country" placeholder="Select Country"
                                            v-model="companyData.billingAddress.country">
                                            <option v-for="c in countries" :value="c.code" v-bind:key="c.id">
                                                {{ c.name }}
                                            </option>
                                        </select>
                                        <!-- <input type="text" class="form-control" id="country" placeholder="Country"
                                            v-model="companyData.billingAddress.country"> -->
                                    </div>
                                </div>
                                <button type="submit" class="d-block btn btn-primary">Submit</button>
                            </div>
                            <div class="col-md-4">
                                <h5>Your Cart <span class="total-items">{{ cartItems.length }}</span></h5>
                                <div class="col-md-12 row cart-item" v-for="ci in cartItems" v-bind:key="ci.id">
                                    <div class="col-md-8">
                                        {{ ci.description }} :
                                    </div>
                                    <div class="col-md-3">
                                        {{ ci.amount / 100 }}
                                    </div>
                                </div>
                                <div class="col-md-12 row cart-item">
                                    <div class="col-md-8">
                                        Total :
                                    </div>
                                    <div class="col-md-3">
                                        {{ estimateData / 100 }}
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
                'link': ''
            },
            estimateData: [],
            cartItems: [],
            countries: []
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
            that.companyData.link = that.$route.params.link
            Api.createSubscription(that.companyData).then(response => {
                window.location = response.data.res.url
            })
        },
        createEstimate: function () {
            let that = this
            Api.createEstimate(that.companyData).then(response => {
                that.estimateData = response.data.res[0].invoice_estimate.total
                console.log(response.data.res[0].invoice_estimate.total)
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
