<template>
    <section>

        <div class="px-8 py-6 flex justify-between">
            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                <span class="text-[#090446]">request workshop</span>
            </p>
        </div>

        <!-- card-10 stat -->
        <div class="w-full">
            <div class="flex flex-wrap space-x-2 space-y-1">
                <router-link to="/employer/request-workshop" class="btn">
                    <button
                        class="flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-[#BE0858] text-white text-center text-md shadow">
                        Request for Workshop
                    </button>
                </router-link>
                <router-link to="/employer/workshop-history" class="btn">
                    <button
                        class="flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-white text-black text-center text-md shadow">
                        Workshop History
                    </button>
                </router-link>
            </div>
            <div class="p-6 flex justify-between px-8">
                <form class="w-full">
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-title-1">
                                Title *
                            </label>
                            <input
                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 mb-3 leading-tight focus:outline-none focus:bg-white"
                                id="grid-title-1" type="text" placeholder="Name" v-model="workshop.name">
                            <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-workshop-focus">
                                Workshop Focus *
                            </label>
                            <input
                                class="appearance-none block w-full text-gray-700 border border-gray-200 rounded py-3 px-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-workshop-focus" type="text" placeholder="Workshop Focus" v-model="workshop.workshop_focus">
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full md:w-1/2 px-3 mb-2 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-desired-data">
                                Desired Date *
                            </label>
                            <date-picker v-model="workshop.desired_date" type="datetime" :use12h="format" placeholder="Desired Date" :disabled-date="disabledRange"></date-picker>
                        </div>

                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="grid-workshop-length">
                                Workshop Length *
                            </label>
                            <div class="relative">
                                <select class="w-full border border-gray-200 text-gray-700 py-3 px-8 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-workshop-length" v-model="workshop.workshop_length">
                                    <option value="">Select</option>
                                    <option>30 min</option>
                                    <option>1 hr</option>
                                    <option>2 hrs</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-1/2">
                            <div class="w-full px-3 mb-2 md:mb-0">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-workshop-type">
                                    Workshop Type *
                                </label>
                                <select class="w-full border border-gray-200 text-gray-700 py-3 px-8 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-workshop-length" v-model="workshop.workshop_type">
                                    <option value="">Select</option>
                                    <option value="IN_PERSON">In Person</option>
                                    <option value="VIRTUAL">Virtual</option>
                                </select>
                                <p class="text-red-500 text-xs italic hidden">Please fill out this field.</p>
                            </div>
                            <div class="w-full  px-3">
                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="requirements">
                                    Requirements
                                </label>
                                <textarea id="requirements" rows="2"
                                    class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                    placeholder="Requirements" v-model="workshop.requirements"></textarea>
                            </div>
                        </div>
                        <div class="w-full md:w-1/2 px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="audiance">
                                Audiance
                            </label>
                            <textarea id="audiance" rows="6"
                                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Audience" v-model="workshop.audience"></textarea>
                        </div>
                    </div>
                    <div class="flex flex-wrap -mx-3 mb-2">
                        <div class="w-full px-3">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                for="expectations">
                                Expectations
                            </label>
                            <textarea id="expectations" rows="4"
                                class="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500"
                                placeholder="Expectations" v-model="workshop.expectations"></textarea>
                        </div>
                    </div>
                    <div class="mx-auto ">
                        <button 
                            type="button" class="b-0 flex items-center font-sixe-[20px] px-12 py-2  rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" @click="requestWorkshop"  :disabled="workshop.disabled">
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
        <!-- card-10 end -->

    </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
export default {
    name: 'Add',
    mixins: [AppMixin],
    props: {
        getWorkshopList: {
            type: Function
        }
    },
    data() {
        return {
            format: true,
            hideFooter: true,
            workshop: {
                // company: '',
                name: '',
                workshop_focus: '',
                desired_date: '',
                workshop_length: '',
                workshop_type: '',
                audience: '',
                requirements: '',
                expectations: '',
                disabled: false
            },
        }
    },
    components: { DatePicker },
    methods: {
        requestWorkshop: function () {
            let that = this;
            //console.log(that.workshop)
            if (!that.workshop.name || !that.workshop.workshop_focus || !that.workshop.desired_date ||
                !that.workshop.workshop_length || !that.workshop.workshop_type) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required fields",
                    showConfirmButton: true
                })
            } else {
                that.workshop.disabled = true;
                Api.requestWorkshop(that.workshop).then(response => {
                    that.workshop.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Workshop requested successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.workshop.disabled = false
                        that.workshop.name = ''
                        that.workshop.company = ''
                        that.workshop.workshop_focus = ''
                        that.workshop.workshop_length = ''
                        that.workshop.workshop_type = ''
                        that.workshop.workshop_focus = ''
                        that.workshop.desired_date = ''
                        that.workshop.audience = ''
                        that.workshop.requirements = ''
                        that.workshop.expectations=''
                        //that.$bvModal.hide('request-workshop-modal')
                        that.getWorkshopList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.workshop.disabled = false;
                    });
                });
            }
        },


    },
    mounted() {
        this.getCompaniesList()
    }
}
</script>
