<template>
    <section class="admin-learning-plan-section half-cut-bg">
        <div class="py-6 flex justify-between px-8">
            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                <span class="text-[#090446]">Popup Survey Questions</span>
            </p>
        </div>

        <!-- card-10 stat -->
        <div class="w-full">
            <div class="py-6 px-8">
                <div class="flex justify-between py-6">
                    <form class="flex items-center">
                        <label for="simple-search" class="sr-only">Search</label>
                        <div class="relative w-full">
                            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor"
                                    viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </div>
                            <input type="text" id="simple-search"
                                class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5"
                                placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getPopupSurveyList">
                        </div>
                    </form>


                    <div class="flex flex-row space-x-1">
                        <button
                            class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-modal>

                            <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                            <span class="flex-1 text-white ml-3 whitespace-nowrap">Add Popup Survey</span>
                        </button>
                        <button
                            class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" @click="exportPopupSurvey">
                            <svg class="mr-2" width="24" height="24" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs" x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M337.318 246.398 276 307.716V156c0-11.046-8.954-20-20-20s-20 8.954-20 20v151.716l-61.318-61.318c-7.81-7.811-20.474-7.811-28.284 0-7.811 7.811-7.811 20.474 0 28.285 20.935 20.932 94.304 94.313 95.585 95.573 7.828 7.701 20.408 7.637 28.159-.113l95.46-95.46c7.81-7.811 7.81-20.474 0-28.285s-20.474-7.811-28.284 0z" fill="#ffffff" data-original="#000000" opacity="1" ></path><path d="M256 16C123.362 16 16 123.344 16 256c0 132.638 107.343 240 240 240 132.638 0 240-107.343 240-240 0-132.638-107.344-240-240-240zm0 440c-110.28 0-200-89.72-200-200S145.72 56 256 56s200 89.72 200 200-89.72 200-200 200z" fill="#ffffff" data-original="#000000" opacity="1" ></path></g></svg>
                            <span class="flex-1 text-white ml-3 whitespace-nowrap">Export</span>
                        </button>
                    </div>
                </div>

                <div class="relative overflow-x-auto shadow-md">
                    <table class="w-full text-sm text-center text-white">
                        <thead class="text-xs text-white bg-[#0A0446]">
                            <tr>
                                <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                    Question
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Option 1
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Option 2
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Option 3
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Option 4
                                </th>
                                <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-[#090446]">
                            <tr class="bg-white hover:bg-gray-50" v-if="popupSurveyLength" v-for="p in popupSurvey.data" v-bind:key="p.id">
                                <td scope="row"
                                    class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                    {{ p.question }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ p.option_1 }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ p.option_2 }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ p.option_3 }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ p.option_4 }}
                                </td>
                                <td
                                    class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300" >
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getPopupSurvey(p)">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <g clip-path="url(#clip0_143_2408)">
                                                <path
                                                    d="M7.33301 2.66666H4.53301C3.4129 2.66666 2.85285 2.66666 2.42503 2.88464C2.0487 3.07639 1.74274 3.38235 1.55099 3.75867C1.33301 4.1865 1.33301 4.74655 1.33301 5.86666V11.4667C1.33301 12.5868 1.33301 13.1468 1.55099 13.5746C1.74274 13.951 2.0487 14.2569 2.42503 14.4487C2.85285 14.6667 3.4129 14.6667 4.53301 14.6667H10.133C11.2531 14.6667 11.8132 14.6667 12.241 14.4487C12.6173 14.2569 12.9233 13.951 13.115 13.5746C13.333 13.1468 13.333 12.5868 13.333 11.4667V8.66666M5.33299 10.6667H6.44935C6.77547 10.6667 6.93853 10.6667 7.09198 10.6298C7.22803 10.5972 7.35809 10.5433 7.47739 10.4702C7.61194 10.3877 7.72724 10.2724 7.95785 10.0418L14.333 3.66666C14.8853 3.11437 14.8853 2.21894 14.333 1.66666C13.7807 1.11437 12.8853 1.11437 12.333 1.66665L5.95783 8.04182C5.72723 8.27242 5.61193 8.38772 5.52947 8.52228C5.45637 8.64157 5.40249 8.77163 5.36983 8.90768C5.33299 9.06113 5.33299 9.22419 5.33299 9.55031V10.6667Z"
                                                    stroke="#0A0446" stroke-linecap="round"
                                                    stroke-linejoin="round" />
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_143_2408">
                                                    <rect width="16" height="16" fill="white" />
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Edit</span>
                                    </button>

                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deletePopupSurvey(p.id)">
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                                stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>

                                        <span
                                            class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Delete</span>
                                    </button>

                                    <router-link type="button" class="mx-3 d-block" width="24" :to="'/admin/popup-survey/' + p.id">
                                        <button
                                            class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" >
                                            <img src="../../assets/images/table-eye.svg" alt="table-eye" width="24" height="24" />
                                        </button>
                                    </router-link>

                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50" v-if="!popupSurveyLength">
                                <td scope="row"
                                    class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="6">No Data Found</td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination :data="popupSurvey" @pagination-change-page="getPopupSurveyList" />
                </div>
            </div>
        </div>
        <!-- card-10 end -->

        <b-modal id="add-modal" size="lg" title="Add New Popup Survey" :hide-footer=hideFooter no-fade no-enforce-focus>
            <form>
                <div class="form-group">
                    <label>Question <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.question" placeholder="Question" />
                </div>
                <div class="form-group">
                    <label>Option 1 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.option_1" placeholder="Option 1" />
                </div>
                <div class="form-group">
                    <label>Option 2 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.option_2" placeholder="Option 2" />
                </div>
                <div class="form-group">
                    <label>Option 3 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.option_3" placeholder="Option 3" />
                </div>
                <div class="form-group">
                    <label>Option 4 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.option_4" placeholder="Option 4" />
                </div>
                <div class="form-group">
                    <button type="button" @click="addPopupSurvey" class="btn btn-primary"
                        :disabled="addData.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
        <b-modal id="update-modal" size="lg" title="Update Popup Survey" :hide-footer=hideFooter no-fade
            no-enforce-focus>
            <form>
                <div class="form-group">
                    <label>Question <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.question" placeholder="Question" />
                </div>
                <div class="form-group">
                    <label>Option 1 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.option_1" placeholder="Option 1" />
                </div>
                <div class="form-group">
                    <label>Option 2 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.option_2" placeholder="Option 2" />
                </div>
                <div class="form-group">
                    <label>Option 3 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.option_3" placeholder="Option 3" />
                </div>
                <div class="form-group">
                    <label>Option 4 <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.option_4" placeholder="Option 4" />
                </div>
                <div class="form-group">
                    <button type="button" @click="updatePopupSurvey" class="btn btn-primary"
                        :disabled="updateData.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
    </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
export default {
    name: 'PopupSurveys',
    mixins: [AppMixin],
    data() {
        return {
            hideFooter: true,
            addData: {
                question: '',
                option_1: '',
                option_2: '',
                option_3: '',
                option_4: '',
                disabled: false
            },
            updateData: {
                id: '',
                question: '',
                option_1: '',
                option_2: '',
                option_3: '',
                option_4: '',
                disabled: false
            },
            searchData: {
                'sortBy': '',
                'sortOrder': '',
                'keyword': ''
            }
        }
    },
    components: {
    },
    methods: {

        addPopupSurvey: function (e) {
            let that = this;
            if (!that.addData.question || !that.addData.option_1 || !that.addData.option_2 || !that.addData.option_3 || !that.addData.option_4) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.addData.disabled = true;
                Api.addPopupSurvey(that.addData).then(response => {
                    that.addData.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Popup Survey added successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.addData.disabled = false
                        that.addData.question = ''
                        that.addData.option_1 = ''
                        that.addData.option_2 = ''
                        that.addData.option_3 = ''
                        that.addData.option_4 = ''
                        that.$bvModal.hide('add-modal')
                        that.getPopupSurveyList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.addData.disabled = false;
                    });
                });
            }
        },
        getPopupSurvey: function (data) {
            let that = this;
            that.updateData.id = data.id
            that.updateData.question = data.question
            that.updateData.option_1 = data.option_1
            that.updateData.option_2 = data.option_2
            that.updateData.option_3 = data.option_3
            that.updateData.option_4 = data.option_4
            that.$bvModal.show('update-modal')
        },
        updatePopupSurvey: function (e) {
            let that = this;
            if (!that.updateData.question || !that.updateData.option_1 || !that.updateData.option_2 || !that.updateData.option_3 || !that.updateData.option_4) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.updateData.disabled = true;
                Api.updatePopupSurvey(that.updateData).then(response => {
                    that.updateData.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Popup Survey updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.updateData.disabled = false
                        that.updateData.question = ''
                        that.updateData.option_1 = ''
                        that.updateData.option_2 = ''
                        that.updateData.option_3 = ''
                        that.updateData.option_4 = ''
                        that.$bvModal.hide('update-modal')
                        that.getPopupSurveyList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.addData.disabled = false;
                    });
                });
            }
        },
        deletePopupSurvey: function (id) {
            let that = this
            this.$swal({
                title: 'Are you sure?',
                text: 'All the related info will be deleted, you wont be able to revert !',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes Delete it!',
                cancelButtonText: 'No, Keep it!',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Api.deletePopupSurvey(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Popup Survey deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getPopupSurveyList()
                        });
                    }).catch((error) => {
                        this.$swal({
                            icon: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                        });
                    });
                }
            });
        },
        getPopupSurveyList: function () {
            let that = this
            Api.getPopupSurveyList(that.searchData).then(response => {
                that.popupSurvey = response.data.res
                that.popupSurveyLength = that.popupSurvey.data.length
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                }).then(function () {
                });
            });
        },
        exportPopupSurvey: function () {
          let that = this
          Api.exportPopupSurvey()
            .then(response => {
              let blob = new Blob([response.data])
              let link = document.createElement('a')
              link.href = window.URL.createObjectURL(blob)
              link.download = 'PopupSurveyExport.csv'
              link.click()
            }
            ).catch((error) => {
              this.$swal({
                icon: "error",
                title: "error",
                text: error.response.data.message,
                showConfirmButton: true
              });
            });
        },
    },
    mounted() {
        this.getPopupSurveyList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
