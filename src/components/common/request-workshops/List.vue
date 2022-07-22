<template>
    <div class="mt-3">
        <div class="row">
            <div class="col-md-3">
                <select v-model="getWorkshopData.sortBy" class="form-control" v-on:change="getWorkshopList">
                    <option value="">Sort By</option>
                    <option value="name">Name</option>
                </select>
            </div>
            <div class="col-md-3">
                <input type="text" v-model="getWorkshopData.keyword" class="form-control" placeholder="Search"
                    v-on:keyup="getWorkshopList" />
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-3" v-if="user.role != 'ADMIN'">
                <button class="btn btn-primary float-right" v-b-modal.request-workshop-modal>Request Workshop</button>
            </div>
        </div>
        <div class="row mt-3">
            <table class="table">
                <tr>
                    <td v-if="user.role == 'ADMIN'">Company Name</td>
                    <td>Name</td>
                    <td>Workshop Focus</td>
                    <td>Desired Date</td>
                    <td>Workshop Length</td>
                    <td>Workshop Type</td>
                    <td>Audience</td>
                    <td>Requirements</td>
                    <td>Expectations</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                <tr v-if="workshopsLength" v-for="r in workshops.data" v-bind:key="r.id">
                    <td v-if="user.role == 'ADMIN'">{{ r.company_name }}</td>
                    <td>{{ r.name }}</td>
                    <td>{{ r.workshop_focus }}</td>
                    <td>{{ r.desired_date | timeAgo }}</td>
                    <td>{{ r.workshop_length }}</td>
                    <td>{{ r.workshop_type }}</td>
                    <td>{{ r.audience }}</td>
                    <td>{{ r.requirements }}</td>
                    <td>{{ r.expectations }}</td>
                    <td>{{r.status}}</td>
                    <td>
                        <button v-if="user.role != 'ADMIN'" class="btn btn-danger"
                            @click="deleteRequestWorkshop(r.id)"><i class="fa fa-trash"></i></button>
                        <button v-if="user.role == 'ADMIN' && r.status == 'NEW'" class="btn btn-primary"
                            @click="acceptRequestWorkshop(r.id)"><i class="fa fa-check"></i></button>
                        <button v-if="user.role == 'ADMIN' && r.status == 'NEW'" class="btn btn-danger"
                            @click="rejectRequestWorkshop(r.id)"><i class="fa fa-times"></i></button>
                    </td>
                </tr>
                <tr v-if="!workshopsLength">
                    <td colspan="5">No Data Found</td>
                </tr>
            </table>
            <pagination :data="workshops" @pagination-change-page="getWorkshopList" />
        </div>
        <!--Add resource modal popup-->
        <Add :getWorkshopList="getWorkshopList"></Add>
        <!--Update resource modal popup-->
        <!-- <Edit :getWorkshopList="getWorkshopList" :workshopUpdate="workshopUpdate"></Edit> -->
    </div>
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
                keyword: ''
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
