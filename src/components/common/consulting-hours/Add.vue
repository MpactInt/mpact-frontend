<template>
    <b-modal id="add-chu" size="lg" title="Consulting Hours" :hide-footer=hideFooter no-fade no-enforce-focus>
    <form class="sm:w-2/3 w-full px-8 lg:px-0 mx-auto" @submit="validateForm" ref="createCompanyForm" enctype="multipart/form-data">
        <div class="pb-2 pt-4">
            <label>Select Company <span class="err">*</span></label>
            <select class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="consultingHour.company_id" placeholder="Select a company">
                <option value="" disabled>Select a company</option>
                <option v-for="company in companiesListselect" :key="company.id" :value="company.id">
                    {{ company.name }}
                </option>
            </select>
        </div>
        <div class="pb-2 pt-4">
            <label>Consulting Hours <span class="err">*</span></label>
            <input type="text" id="consulting_hours" placeholder="Consulting Hours" class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]" v-model="consultingHour.consulting_hours">
        </div>
        <div class="px-[65px] py-2">
            <button type="submit" class="block w-full py-2 text-lg rounded-[10px] bg-[#BE0858] hover:bg-[#ab064e] focus:outline-none" :disabled="consultingHour.disabled">Submit</button>
        </div>
        
    </form>
    </b-modal>
</template> 
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import axios from 'axios'

export default {
    name: 'ConsultingModel', 
    mixins: [AppMixin],
    props: {
        getConsultingHoursList: {
            type: Function
        }
    },
    data() {
        return {
            consultingHour: {
                'company_id': '',
                'consulting_hours': '',
                'disabled': false,
            },
            subscriptionPlans: [],
            hideFooter: true,
            plans: [],
            url:''
        }
    },
    methods: {
        validateForm: function (e) 
        {
            e.preventDefault();
            let that = this;
            if(!that.consultingHour.company_id || !that.consultingHour.consulting_hours) 
            {
                this.$swal({
                icon: 'error',
                title: 'error',
                text: 'Please all required fields', 
                showConfirmButton: true
                })
            }
            else 
            { 
                that.consultingHour.disabled = true;
                const formData = new FormData();
                formData.append('company_id', that.consultingHour.company_id);
                formData.append('consulting_hours', that.consultingHour.consulting_hours);
                axios.post(APP_URL + '/add-consulting-hours', formData,
                    {
                        headers: {
                            'Access-Control-Allow-Origin': '*'
                        }
                    }).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Consulting Hour added successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.$bvModal.hide('add-chu')
                            that.consultingHour.company_id = ''
                            that.consultingHour.consulting_hours = ''
                            that.getConsultingHoursList()
                            that.consultingHour.disabled = false;
                        });

                    }
                    ).catch((error) => {
                        that.consultingHour.disabled = false;
                        this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.consultingHour.disabled = false;
                    });
                    });
            }
            
        },
        getPlans: function () 
        {
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
    this.getCompaniesListMultiselect()
    console.log(this.getCompaniesListMultiselect(),'company select');
  
  }
}
</script>
