<template>
    <section>
        <div class="py-6 flex justify-between px-8" >
            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold" v-if="user.role != 'ADMIN'">
                <span class="text-[#090446]">request workshop</span>
            </p>

            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold" v-if="user.role == 'ADMIN'">
                <span class="text-[#090446]">workshop requests</span>
            </p>

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
                        placeholder="Search" required v-model="getWorkshopData.keyword" v-on:keyup="getWorkshopList">
                </div>
            </form>
        </div>

        <!-- card-10 stat -->
        <div class="w-full">
            <div class="flex flex-wrap space-x-2 space-y-1"  v-if="user.role != 'ADMIN'">
                 <router-link to="/employer/request-workshop" class="btn">
                    <button
                        class="flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-white text-black text-center text-md shadow">
                        Request for Workshop
                    </button>
                </router-link>
                <router-link to="/employer/workshop-history" class="btn">
                    <button
                        class="flex items-center font-sixe-[20px] px-12 py-2 mx-8 rounded-md bg-[#BE0858] text-white text-center text-md shadow">
                        Workshop Request History
                    </button>
                </router-link>
            </div>

            <div class="py-6 px-8">
                <div class="relative overflow-x-auto shadow-md">
                    <table class="w-full text-sm text-center text-white">
                        <thead class="text-xs text-white bg-[#0A0446]">
                            <tr>
                                <th scope="col" class="px-4 py-4 rounded-tl-lg border-r border-gray-700" v-if="user.role == 'ADMIN'">
                                    Company Name
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Name
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Workshop Focus
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Desired Date
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Workshop Length
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Workshop Type
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Audience
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Requirements
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Expectations
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Status
                                </th>
                                <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-[#090446]">
                            <tr class="bg-white hover:bg-gray-50"  v-if="workshopsLength" v-for="r in workshops.data" v-bind:key="r.id">
                                <td scope="row"
                                    class="px-4 py-4 border-r border-gray-300 font-medium whitespace-nowrap" v-if="user.role == 'ADMIN'">
                                    {{ r.company_name }}
                                </td>
                                <td scope="row"
                                    class="px-4 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                    {{ r.name }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.workshop_focus }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.desired_date | timeAgo }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.workshop_length }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.workshop_type }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.audience }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.requirements }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.expectations }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.status }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteRequestWorkshop(r.id)" >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                                stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round"></path>
                                        </svg>
                                    </button>
                                    <a type="button" class="px-3" v-if="user.role == 'ADMIN' && r.status == 'NEW'"
                                    @click="acceptRequestWorkshop(r.id)" width="24" height="24">
                                        <i class="fa fa-check"></i>
                                        <!-- <img src="../../../assets/images/table-delete.svg"  width="24" height="24" alt="table-delete" />-->
                                    </a>
                                    <a type="button" class="px-3" v-if="user.role == 'ADMIN' && r.status == 'NEW'"
                                        @click="rejectRequestWorkshop(r.id)" width="24" height="24">
                                        <i class="fa fa-times"></i>
                                        <!-- <img src="../../../assets/images/table-delete.svg"  width="24" height="24" alt="table-delete" />-->
                                    </a>
                                </td>
                            </tr>
                            <tr class="bg-white hover:bg-gray-50" v-if="!workshopsLength">
                                <td scope="row"
                                    class="px-4 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="11">No Data Found</td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination :data="workshops" @pagination-change-page="getWorkshopList" />
                </div>

            </div>
        </div>
        <!-- card-10 end -->

    </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../request-workshops/Add.vue'
import Edit from '../request-workshops/Edit.vue'

export default {
    name: 'List',
    mixins: [AppMixin],
    components: { Add, Edit },
    data() {
        return {
            workshops: {
            },
            getWorkshopData: {
                sortBy: '',
                keyword: '',
                sortOrder: ''
            },
            workshopsLength: ''
        }
    },
    methods: {
        deleteRequestWorkshop: function (id) {
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
                    Api.deleteRequestWorkshop(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Workshop request deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
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
            });
        },
        getWorkshopList: function (page = 1) {
            let that = this;
            Api.getWorkshopList(that.getWorkshopData, page).then(response => {
                that.workshops = response.data.res
                that.workshopsLength = that.workshops.data.length
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
        },
        acceptRequestWorkshop: function (id) {
            let that = this
            this.$swal({
                title: 'Are you sure?',
                text: 'You want to accept this request ?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Api.acceptRequestWorkshop(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Workshop request accepted successfully",
                            showConfirmButton: true
                        }).then(function () {
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
            });
        },
        rejectRequestWorkshop: function (id) {
            let that = this
            this.$swal({
                title: 'Are you sure?',
                text: 'You want to reject this request ?',
                type: 'warning',
                showCancelButton: true,
                confirmButtonText: 'Yes',
                cancelButtonText: 'No',
                showCloseButton: true,
                showLoaderOnConfirm: true
            }).then((result) => {
                if (result.value) {
                    Api.rejectRequestWorkshop(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Workshop request rejected successfully",
                            showConfirmButton: true
                        }).then(function () {
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
            });
        },
    },
    mounted() {
        this.getWorkshopList()
    }
}
</script>
