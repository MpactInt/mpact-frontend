<template>
    <form class="sm:w-2/3 w-full px-8 lg:px-0 mx-auto" @submit="validateForm" ref="createCompanyForm" enctype="multipart/form-data">
        <div class="pb-2 pt-4" v-if="modalAdd">
            <multiselect v-model="chargebeeUser.planData" :options="plans" placeholder="Type to search" track-by="name" label="name">
                <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
        </div>
        <div class="pb-2 pt-4">
            <input type="text" id="companyname" placeholder="Company/Organization Name *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.companyname">
        </div>


        <div class="pb-2 pt-4">
            <input type="text" id="first_name" placeholder="First Name *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.first_name">
        </div>
        <div class="pb-2 pt-4">
            <input type="text" id="last_name" placeholder="Last Name *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.last_name">
        </div>
        <div class="pb-2 pt-4">
            <input type="email" id="email" placeholder="Company/Organization Representative Email *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.email">
        </div>
        <div class="pb-2 pt-4">
            <input type="password" id="password" placeholder="Password *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]"  v-model="chargebeeUser.password">
        </div>
        <div class="pb-2 pt-4">
            <input type="password" id="cpassword" placeholder="Confirm Password *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.cpassword" >
            <input type="hidden" v-model="chargebeeUser.email_password_detail">
        </div>

        <div class="pb-2 pt-4">
            <input type="text" id="companydomain" placeholder="Company Url *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.domain">
        </div>
        <div class="pb-2 pt-4">
            <input type="number" id="employees" placeholder="Number of Employees *" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.employees">
        </div>
        <div class="pb-2 pt-4" v-if="modalAdd">
          <!-- <input type="text" id="duration" placeholder="Duration" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.duration"> -->
          <label for="learning_plan_start_date">General Learning Plan Interval Duration</label>
                <select id="duration" placeholder="Duration"  class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.duration">
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
        <div class="pb-2 pt-4"  v-if="modalAdd">
          <label for="learning_plan_start_date">General Learning Plan Start Date</label>
          <input type="date" id="learning_plan_start_date" placeholder="Learning plan start date" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="chargebeeUser.learning_plan_start_date">
      </div>
        <div class="px-[65px] py-2">
            <button type="submit" class="block w-full py-2 text-lg rounded-[10px] bg-[#BE0858] hover:bg-[#ab064e] focus:outline-none" :disabled="chargebeeUser.disabled">Submit</button>
        </div>

    </form>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import axios from 'axios'

export default {
    name: 'Add',
    mixins: [AppMixin],
    props: [
        'modalAdd'
    ],
    data() {
        return {
            chargebeeUser: {
                'companyname': '',
                'email': '',
                'password': '',
                'cpassword':'',
                'cpassword':'',
                'email_password_detail':0,
                'first_name':'',
                'last_name':'',
                'domain': '',
                'employees': '',
                'plan': '',
                'addon': '',
                'logo': '',
                'disabled': false,
                'periodUnit': '',
                'planType': '',
                'planData': '',
                "duration":'',
                "learning_plan_start_date":'',
                // terms: ''
            },
            subscriptionPlans: [],
            hideFooter: true,
            plans: [],
            url:''
        }
    },
    methods: {
        fileOnChange: function (e) {
            let that = this;
            this.chargebeeUser.logo = this.$refs.logo.files[0];
            this.url = URL.createObjectURL(e.target.files[0]);
        },
        validateForm: function (e) {
            e.preventDefault();
            let that = this;
            if (that.modalAdd != 1) {
                this.chargebeeUser.plan = this.$route.query.plan
                this.chargebeeUser.periodUnit = this.$route.query.periodUnit
                this.chargebeeUser.planType = this.$route.query.itemId
            }
            else {
                this.chargebeeUser.plan = this.chargebeeUser.planData.id
                this.chargebeeUser.periodUnit = this.chargebeeUser.planData.periodUnit
                this.chargebeeUser.planType = this.chargebeeUser.planData.itemId
            }

            if (!that.chargebeeUser.plan) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please select a plan from plans page",
                    showConfirmButton: true
                });
            }
            else if (!that.chargebeeUser.companyname || !that.chargebeeUser.first_name || !that.chargebeeUser.last_name || !that.chargebeeUser.email || !that.chargebeeUser.password ||  !that.chargebeeUser.cpassword || !that.chargebeeUser.domain || !that.chargebeeUser.employees) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
            }else if(that.chargebeeUser.password != that.chargebeeUser.cpassword){
                 this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Confirm Password not matched",
                    showConfirmButton: true
                });
            }
             else {
                that.chargebeeUser.disabled = true;
                const formData = new FormData();
                formData.append('companyname', that.chargebeeUser.companyname);
                formData.append('first_name', that.chargebeeUser.first_name);
                formData.append('last_name', that.chargebeeUser.last_name);
                formData.append('email', that.chargebeeUser.email);
                formData.append('password', that.chargebeeUser.password);
                formData.append('email_password_detail', that.chargebeeUser.email_password_detail);
                formData.append('domain', that.chargebeeUser.domain);
                formData.append('employees', that.chargebeeUser.employees);
                formData.append('plan', that.chargebeeUser.plan);
                formData.append('periodUnit', that.chargebeeUser.periodUnit);
                formData.append('planType', that.chargebeeUser.planType);
                formData.append('addon', that.chargebeeUser.addon);
                formData.append('duration', that.chargebeeUser.duration);
                formData.append('learning_plan_start_date', that.chargebeeUser.learning_plan_start_date);



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
                            text: "Company created successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.chargebeeUser.disabled = false;
                            if (that.modalAdd) {
                                that.$router.push('/admin/checkout/' + response.data.res.employee_registration_link);
                            } else {
                                that.$router.push('/checkout/' + response.data.res.employee_registration_link);
                            }
                        });

                    }
                    ).catch((error) => {
                        that.chargebeeUser.disabled = false;
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
            Api.getPlans2().then(response => {
                that.plans = response.data.res
            }
            ).catch((error) => {

            });
        },
    },
    created() {
        this.getPlans()
    },
    mounted() {
        let that = this;
        if (this.isLoggedIn) {
            that.chargebeeUser.email_password_detail = 1;
        }
    }
}
</script>
