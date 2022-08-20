<template>
    <section class="admin-learning-plan-section half-cut-bg">
      <h1 class="page-title text-left mt-0">CheckIn Survey <span>Questions</span></h1>
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-6 my-2 d-flex" v-if="user.role == 'ADMIN'">
                <button class="btn btn-primary float-right ml-auto" v-b-modal.add-modal>Add CheckIn Survey</button>
            </div>
        </div>
      <div class="table-responsive">
            <table class="table">
                <tr>
                    <th>Question</th>
                    <th>Min Rating Description</th>
                    <th>Max Rating Description</th>
                    <th>Action</th>
                </tr>
                <tr v-if="checkInSurveyLength" v-for="p in checkInSurvey.data" v-bind:key="p.id">
                    <td>{{ p.question }}</td>
                    <td>{{ p.min_desc }}</td>
                    <td>{{ p.max_desc }}</td>
                    <td>
                    <div class="d-flex align-items-center p-0" style="min-width: 100px;">
                        <a type="button" class="mx-3 d-block" @click="getCheckInSurvey(p)">
                        <img src="../../assets/images/table-edit.svg" alt="table-edit" width="24" height="24" />
                        </a>
                        <a type="button" class="mx-3 d-block" @click="deleteCheckInSurvey(p.id)">
                        <img src="../../assets/images/table-delete.svg" alt="table-delete" width="24" height="24" />
                        </a>
                        <router-link class="mx-3 d-block" :to="'/admin/check-in-survey/' + p.id">
                            <img src="../../assets/images/table-eye.svg" alt="table-eye" width="24" height="24" />
                        </router-link>
                    </div>
                    </td>
                </tr>
                <tr v-if="!checkInSurveyLength">
                    <td colspan="5">No Data Found</td>
                </tr>
            </table>
        </div>
        <b-modal id="add-modal" size="lg" title="Add New CheckIn Survey" :hide-footer=hideFooter no-fade
            no-enforce-focus>
            <form>
                <div class="form-group">
                    <label>Question <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.question" placeholder="Question" />
                </div>
                <div class="form-group">
                    <label>Min Rating Description <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.minDesc"
                        placeholder="Min Rating Description" />
                </div>
                <div class="form-group">
                    <label>Max Rating Description <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="addData.maxDesc"
                        placeholder="Max Rating Description" />
                </div>
                <div class="form-group">
                    <button type="button" @click="addCheckInSurvey" class="btn btn-primary"
                        :disabled="addData.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
        <b-modal id="update-modal" size="lg" title="Update CheckIn Survey" :hide-footer=hideFooter no-fade
            no-enforce-focus>
            <form>
                <div class="form-group">
                    <label>Question <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.question" placeholder="Question" />
                </div>
                <div class="form-group">
                    <label>Min Rating Description <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.minDesc"
                        placeholder="Min Rating Description" />
                </div>
                <div class="form-group">
                    <label>Max Rating Description <span class="err">*</span></label>
                    <input class="form-control" type="text" v-model="updateData.maxDesc"
                        placeholder="Max Rating Description" />
                </div>
                <div class="form-group">
                    <button type="button" @click="updateCheckInSurvey" class="btn btn-primary"
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
    name: 'CheckInSurveys',
    mixins: [AppMixin],
    data() {
        return {
            hideFooter: true,
            addData: {
                question: '',
                minDesc: '',
                maxDesc: '',
                disabled: false
            },
            updateData: {
                id: '',
                question: '',
                minDesc: '',
                maxDesc: '',
                disabled: false
            }
        }
    },
    components: {
    },
    methods: {

        addCheckInSurvey: function (e) {
            let that = this;
            if (!that.addData.question || !that.addData.minDesc || !that.addData.maxDesc) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.addData.disabled = true;
                Api.addCheckInSurvey(that.addData).then(response => {
                    that.addData.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "CheckIn Survey added successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.addData.disabled = false
                        that.addData.question = ''
                        that.$bvModal.hide('add-modal')
                        that.getCheckInSurveyList()
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
        getCheckInSurvey: function (data) {
            let that = this;
            that.updateData.id = data.id
            that.updateData.question = data.question
            that.updateData.minDesc = data.min_desc
            that.updateData.maxDesc = data.max_desc
            that.$bvModal.show('update-modal')
        },
        updateCheckInSurvey: function (e) {
            let that = this;
            if (!that.updateData.question || !that.updateData.minDesc || !that.updateData.maxDesc) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.updateData.disabled = true;
                Api.updateCheckInSurvey(that.updateData).then(response => {
                    that.updateData.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "CheckIn Survey updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.updateData.disabled = false
                        that.updateData.question = ''
                        that.$bvModal.hide('update-modal')
                        that.getCheckInSurveyList()
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
        deleteCheckInSurvey: function (id) {
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
                    Api.deleteCheckInSurvey(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "CheckIn Survey deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getCheckInSurveyList()
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
    },
    mounted() {
        this.getCheckInSurveyList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
