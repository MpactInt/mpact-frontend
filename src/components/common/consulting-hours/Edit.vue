<template>
    <b-modal id="update-workshop-modal" title="Update Consulting Hours" :hide-footer=hideFooter size="lg" no-fade
        no-enforce-focus>
        <form @submit="updateWorkshop">
            <div id="details">
                <div class="form-group">
                    <label>Select Company <span class="err">*</span></label>
                    <select class="sm:bg-white lg:bg-[#f3f3f366] border border-1 border-[#DCDCDC] rounded-[6px] block w-full p-4 text-black text-lg bg-[#f3f3f366]"  v-model="workshopUpdateData.company" :options="getCompaniesList" placeholder="Select a company">
                        <option value="" disabled>Select a company</option>
                        <option v-for="company in companiesListselect" :key="company.id" :value="company.id">
                            {{ company.name }}
                        </option> 
                    </select>
                </div>
                
                <div class="form-group">
                    <label>Consulting Hours <span class="err">*</span></label>
                    <input type="text" class="form-control" id="title" placeholder="Title"
                        v-model="workshopUpdateData.consulting_hours">
                </div>
                
                <button type="submit" class="btn btn-primary" :disabled="workshopUpdateData.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">
</style>
<script>
/* eslint-disable */
import moment from 'moment'
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import DatePicker from 'vue2-datepicker';
import { Vue2TinymceEditor } from "vue2-tinymce-editor";
import 'vue2-datepicker/index.css';
export default {
    name: 'Edit',
    mixins: [AppMixin],
    props: [
        'getWorkshopsLists',
        'workshopUpdateData'
    ],
    components: {
        Vue2TinymceEditor, DatePicker
    },
    data() {
        return {
            format: true,
            hideFooter: true,
        }
    },
    methods: {
        updateWorkshop: function (e) 
        {
            e.preventDefault()
            let that = this;
            console.log(that.workshopUpdateData)
            if (!that.workshopUpdateData.consulting_hours || !that.workshopUpdateData.company) 
            {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                });
            } 
            else {
                that.workshopUpdateData.disabled = true;
                const formData = new FormData();
                formData.append('id', that.workshopUpdateData.id);
                formData.append('consulting_hours', that.workshopUpdateData.consulting_hours)
                formData.append('company', that.workshopUpdateData.company)
                let headers = {
                    'Access-Control-Allow-Origin': '*'
                }
                Api.updateConsultingHours(formData, headers).then(response => {
                    that.workshopUpdateData.disabled = false;
                    console.log(response,"update Code")
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Consulting hours details updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.workshopUpdateData.disabled = false;
                        that.$bvModal.hide('update-workshop-modal')
                        that.getWorkshopsLists()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.workshopUpdateData.disabled = false;
                    });
                });
            }
        },
    },
    mounted() {
        this.getCompaniesListMultiselect()
        this.getProfileTypeListMultiselect()
        this.getCompaniesList()
    },
}
</script>
