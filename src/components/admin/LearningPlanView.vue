<template>
    <section class="popup-survey-view-section half-cut-bg">
        <h1 class="page-title text-left">Learning Plan</h1>
        <div class="row">
            <div class="col-md-5">
                <div class="popup-survey-lable">
                    <p class="w-100 mb-0 page-sub-title">Plan Title :</p> <p class="w-100 pink-color"><strong>{{ planSingle.title }}</strong></p>
                </div>
                <div class="popup-survey-lable">
                    <p class="w-100 mb-0 page-sub-title">Plan Description :</p> <p class="w-100 pink-color"><strong>{{ planSingle.description }} </strong></p> </div>
            </div>

            <div class="col-md-6 ml-auto">
                <div class="popup-survey-lable">
                    <p class="w-100 mb-0 page-sub-title">Plan Profile Type :</p> <p class="w-100 pink-color"><strong>{{ planSingle.profile_type }}</strong></p></div>
                <div class="popup-survey-lable ">
                    <p class="w-100 mb-0 page-sub-title">Plan Image :</p> <p class="w-100"><strong>
                        <img :src="planSingle.image" class="table-img" height="75" width="75" /></strong></p>
                </div>
            </div>
            <div class="col-md-12 d-flex mt-4 mb-3">
                 <button class="btn btn-primary ml-auto" v-b-modal.add-modal>Add Learning Plan</button>
            </div>
        </div>
        
      <div class="table-responsive">  
        <table class="table">
            <tr>
                <th>Title</th>
                <th>Description</th>
                <th>File</th>
                <th>Action</th>
            </tr>
            <tr v-if="planFiles.length" v-for="lp in planFiles" v-bind:key="lp.id">
                <td>{{ lp.title }}</td>
                <td>{{ lp.description }}</td>
                <td><a class="cursor-pointer links" @click="downloadLearningPlanFile(lp.id, lp.image)">Download</a></td>
                <td>
                    <div class="d-flex align-items-center p-0" style="min-width: 100px;">

                        <a type="button" class="mx-3 d-block" width="24" @click="getLearningPlanFile(lp)">
                            <img src="../../assets/images/table-edit.svg" alt="table-edit" width="24"
                                height="24" />
                        </a>
                        <a type="button" class="mx-3 d-block" width="24" @click="deleteLearningPlanFile(lp.id)">
                            <img src="../../assets/images/table-delete.svg" alt="table-delete" width="24"
                                height="24" />
                        </a>
                    </div>
                    <!-- <button class="btn btn-primary" @click="getLearningPlanFile(lp)"><i
                            class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger" @click="deleteLearningPlanFile(lp.id)"><i
                            class="fa fa-trash"></i></button> -->
                </td>
            </tr>
            <tr v-if="!planFiles.length">
                <td colspan="5">No Data Found</td>
            </tr>
        </table>
    </div>
        <b-modal id="add-modal" title="Add New Learning Plan" :hide-footer=hideFooter>
            <form enctype="multipart/form-data">
                <div id="details">
                    <div class="form-group">
                        <label>Title <span class="err">*</span></label>
                        <input type="text" class="form-control" id="title" placeholder="Title" v-model="plan.title">
                    </div>
                    <div class="form-group">
                        <label>Description<span class="err">*</span></label>
                        <textarea class="form-control" id="description" placeholder="Description"
                            v-model="plan.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Image<span class="err">*</span></label>
                        <input type="file" class="form-control" id="image" ref="image" @change="imageOnChange">
                    </div>
                    <button type="button" class="btn btn-primary" @click="addLearningPlanFile"
                        :disabled="plan.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
        <b-modal id="update-modal" title="Add New Learning Plan" :hide-footer=hideFooter>
            <form enctype="multipart/form-data">
                <div id="details">
                    <div class="form-group">
                        <label>Title <span class="err">*</span></label>
                        <input type="text" class="form-control" id="title" placeholder="Title"
                            v-model="planUpdate.title">
                    </div>
                    <div class="form-group">
                        <label>Description<span class="err">*</span></label>
                        <textarea class="form-control" id="description" placeholder="Description"
                            v-model="planUpdate.description"></textarea>
                    </div>
                    <div class="form-group">
                        <label>Image<span class="err">*</span></label>
                        <input type="file" class="form-control" id="image" ref="imageUpdate"
                            @change="imageOnChangeUpdate">
                    </div>
                    <button type="button" class="btn btn-primary" @click="updateLearningPlanFile"
                        :disabled="planUpdate.disabled">Submit</button>
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
    name: 'LearningPlan',
    mixins: [AppMixin],
    data() {
        return {
            filePath: '',
            hideFooter: true,
            plan: {
                'my_learning_plan_id': '',
                'title': '',
                'description': '',
                'image': '',
                'disabled': false
            },
          
            planUpdate: {
                'id': '',
                'profile_type': '',
                'title': '',
                'description': '',
                'image': '',
                'disabled': false
            }
        }
    },
    components: {

    },
    methods: {
        
        deleteLearningPlanFile: function (id) {
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
                    Api.deleteLearningPlanFile(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Todo deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getLearningPlanFiles()
                        });
                    }).catch((error) => {
                        this.$swal({
                            icon: "error",
                            title: "error",
                            text: error.response.data.message,
                            showConfirmButton: true
                        }).then(function () {
                            that.todo.disabled = false;
                        });
                    });
                }
            });
        },
        getLearningPlanFile: function (data) {
            this.planUpdate.id = data.id
            this.planUpdate.title = data.title
            this.planUpdate.description = data.description
            this.$bvModal.show('update-modal')
        },
        imageOnChange: function (e) {
            let that = this;
            this.plan.image = this.$refs.image.files[0];
        },
        imageOnChangeUpdate: function (e) {
            let that = this;
            this.planUpdate.image = this.$refs.imageUpdate.files[0];
        },
        addLearningPlanFile: function (e) {
            e.preventDefault();
            let that = this;
            if (!that.plan.title || !that.plan.description || !that.plan.image) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please all required fields",
                    showConfirmButton: true
                });
            } else {
                that.plan.disabled = true;
                const formData = new FormData();
                formData.append('image', that.plan.image);
                formData.append('description', that.plan.description);
                formData.append('title', that.plan.title);
                formData.append('my_learning_plan_id', that.$route.params.id)
                Api.addLearningPlanFile(formData).then(response => {
                    that.plan.disabled = false;

                    let headers = {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Learning Plan File created successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.$bvModal.hide('add-modal')
                        that.plan.title = ''
                        that.plan.description = ''
                        that.$refs.image.value = null;
                        that.getLearningPlanFiles()
                    });
                }
                ).catch((error) => {
                    that.plan.disabled = false;
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.plan.disabled = false;
                    });
                });
            }
        },
        updateLearningPlanFile: function (e) {
            e.preventDefault();
            let that = this;
            if (!that.planUpdate.title || !that.planUpdate.description) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please all required fields",
                    showConfirmButton: true
                });
            } else {
                that.plan.disabled = true;
                const formData = new FormData();
                formData.append('image', that.planUpdate.image);
                formData.append('description', that.planUpdate.description);
                formData.append('title', that.planUpdate.title);
                formData.append('id', that.planUpdate.id);
                Api.updateLearningPlanFile(formData).then(response => {
                    that.planUpdate.disabled = false;

                    let headers = {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Learning Plan File updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.$bvModal.hide('update-modal')
                        that.planUpdate.title = ''
                        that.planUpdate.description = ''
                        that.$refs.imageUpdate.value = null;
                        that.getLearningPlanFiles()
                    });
                }
                ).catch((error) => {
                    that.plan.disabled = false;
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.plan.disabled = false;
                    });
                });
            }
        },
    },
    mounted() {
        this.getProfileTypeList()
        this.getLearningPlanFiles()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
