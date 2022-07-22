<template>
    <div class="col-md-9">
        <div class="row mb-3">
            <div class="col-md-4">

            </div>
            <div class="col-md-4">

            </div>
            <div class="col-md-4">
                <button class="btn btn-primary float-right" v-b-modal.add-modal>Add New Learning Plan</button>
            </div>
        </div>
        <h3>Learning Plan</h3>
        <table class="table">
            <tr>
                <td>Image</td>
                <td>Title</td>
                <td>Description</td>
                <td>Profile Type</td>
                <td>Action</td>
            </tr>
            <tr v-if="learningPlanLength" v-for="lp in learningPlan.data" v-bind:key="lp.id">
                <td><img :src="learningPlanPath + '/' + lp.image" height="75" width="75" /></td>
                <td>{{ lp.title }}</td>
                <td>{{ lp.description }}</td>
                <td>{{ lp.profile_type }}</td>
                <td>
                    <button class="btn btn-primary" @click="getLearningPlan(lp)"><i class="fa fa-pencil"></i></button>
                    <button class="btn btn-danger" @click="deleteLearningPlan(lp.id)"><i
                            class="fa fa-trash"></i></button>
                    <router-link class="btn btn-primary"
                        :to="'/admin/learning-plan/' + lp.id"><i class="fa fa-eye"></i></router-link>
                </td>
            </tr>
            <tr v-if="!learningPlanLength">
                <td colspan="5">No Data Found</td>
            </tr>
        </table>
        <b-modal id="add-modal" title="Add New Learning Plan" :hide-footer=hideFooter>
            <form enctype="multipart/form-data">
                <div id="details">
                    <div class="form-group" v-if="user.role == 'ADMIN'">
                        <label>Select Profile Type <span class="err">*</span></label>
                        <select class="form-control" v-model="plan.profile_type">
                            <option value="">Select</option>
                            <option v-for="pt in profileType" v-bind:key="pt.id" :value="pt.id">
                                {{ pt.profile_type }}
                            </option>
                        </select>
                    </div>
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
                    <button type="button" class="btn btn-primary" @click="addLearningPlan"
                        :disabled="plan.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
        <b-modal id="update-modal" title="Add New Learning Plan" :hide-footer=hideFooter>
            <form enctype="multipart/form-data">
                <div id="details">
                    <div class="form-group" v-if="user.role == 'ADMIN'">
                        <label>Select Profile Type <span class="err">*</span></label>
                        <select class="form-control" v-model="planUpdate.profile_type">
                            <option value="">Select</option>
                            <option v-for="pt in profileType" v-bind:key="pt.id" :value="pt.id">
                                {{ pt.profile_type }}
                            </option>
                        </select>
                    </div>
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
                    <button type="button" class="btn btn-primary" @click="updateLearningPlan"
                        :disabled="planUpdate.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
    </div>
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
            hideFooter: true,
            plan: {
                'profile_type': '',
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
        getLearningPlan: function (data) {
            this.planUpdate.id = data.id
            this.planUpdate.title = data.title
            this.planUpdate.description = data.description
            this.planUpdate.profile_type = data.profile_type_id
            this.$bvModal.show('update-modal')
        },
        deleteLearningPlan: function (id) {
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
                    Api.deleteLearningPlan(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Todo deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getLearningPlanList()
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
        imageOnChange: function (e) {
            let that = this;
            this.plan.image = this.$refs.image.files[0];
        },
        imageOnChangeUpdate: function (e) {
            let that = this;
            this.planUpdate.image = this.$refs.imageUpdate.files[0];
        },
        addLearningPlan: function (e) {
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
                formData.append('profile_type', that.plan.profile_type);
                formData.append('image', that.plan.image);
                formData.append('description', that.plan.description);
                formData.append('title', that.plan.title);
                Api.addLearningPlan(formData).then(response => {
                    that.plan.disabled = false;

                    let headers = {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Learning Plan created successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.$bvModal.hide('add-modal')
                        that.plan.profile_type = ''
                        that.plan.title = ''
                        that.plan.description = ''
                        that.$refs.image.value = null;
                        that.getLearningPlanList()
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
        updateLearningPlan: function (e) {
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
                formData.append('profile_type', that.planUpdate.profile_type);
                formData.append('image', that.planUpdate.image);
                formData.append('description', that.planUpdate.description);
                formData.append('title', that.planUpdate.title);
                formData.append('id', that.planUpdate.id);
                Api.updateLearningPlan(formData).then(response => {
                    that.planUpdate.disabled = false;

                    let headers = {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Learning Plan updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.$bvModal.hide('update-modal')
                        that.planUpdate.profile_type = ''
                        that.planUpdate.title = ''
                        that.planUpdate.description = ''
                        that.$refs.imageUpdate.value = null;
                        that.getLearningPlanList()
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
        this.getLearningPlanList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
