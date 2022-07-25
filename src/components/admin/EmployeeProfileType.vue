<template>
    <div class="col-md-9">
        <h3>Employee Profile Type</h3>
        <div class="row">
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-3">
            </div>
            <div class="col-md-3" v-if="user.role == 'ADMIN'">
                <button class="btn btn-primary float-right" v-b-modal.add-profile-type-modal>Add Profile Type</button>
            </div>
        </div>
        <div class="row mt-3">
            <table class="table">
                <tr>
                    <td>Profile Type</td>
                    <td>File</td>
                    <td>Action</td>
                </tr>
                <tr v-if="profileType.length" v-for="p in profileType" v-bind:key="p.id">
                    <td>{{ p.profile_type }}</td>
                    <td><a class="cursor-pointer" @click="downloadProfileTypeFile(p.id, p.file)">{{ p.file }}</a></td>
                    <td>
                        <button class="btn btn-primary" @click="getProfileType(p)"><i class="fa fa-pencil"></i></button>
                        <button class="btn btn-danger" @click="deleteProfileType(p.id)"><i
                                class="fa fa-trash"></i></button>
                        <router-link class="btn btn-primary" :to="'/admin/employee-profile-type/' + p.id"><i class="fa fa-eye"></i>
                        </router-link>
                    </td>
                </tr>
                <tr v-if="!profileType.length">
                    <td colspan="5">No Data Found</td>
                </tr>
            </table>
        </div>
        <b-modal id="add-profile-type-modal" size="lg" title="Add New Profile Type" :hide-footer=hideFooter no-fade
            no-enforce-focus>
            <form enctype="multipart/form-data" @submit="addProfileTypeF">
                <div class="form-group">
                    <label>Profile Type</label>
                    <input class="form-control" type="text" v-model="addProfileType.profileType"
                        placeholder="Profile Type" />
                </div>
                <div class="form-group">
                    <label>Upload File</label>
                    <input class="form-control" type="file" ref="file" @change="fileOnChange" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" :disabled="addProfileType.disabled">Submit</button>
                </div>
            </form>
        </b-modal>
        <b-modal id="update-profile-type-modal" size="lg" title="Update Profile Type" :hide-footer=hideFooter no-fade
            no-enforce-focus>
            <form @submit="updateProfileTypeF" enctype="multipart/form-data">
                <div class="form-group">
                    <label>Title</label>
                    <input class="form-control" type="text" v-model="updateProfileType.profileType"
                        placeholder="Title" />
                </div>
                <div class="form-group">
                    <label>Upload File</label>
                    <input class="form-control" type="file" ref="update_file" @change="updateFileOnChange" />
                </div>
                <div class="form-group">
                    <button type="submit" class="btn btn-primary" :disabled="addProfileType.disabled">Submit</button>
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
    name: 'EmployeeProfileType',
    mixins: [AppMixin],
    data() {
        return {
            hideFooter: true,
            addProfileType: {
                profileType: '',
                file: '',
                disabled: false
            },
            updateProfileType: {
                profileType: '',
                id: '',
                file: '',
                disabled: false
            }
        }
    },
    components: {
    },
    methods: {
        updateFileOnChange: function (e) {
            let that = this;
            that.updateProfileType.file = ''
            that.updateProfileType.file = this.$refs.update_file.files[0];
        },
        fileOnChange: function (e) {
            let that = this;
            that.addProfileType.file = ''
            that.addProfileType.file = this.$refs.file.files[0];
        },
        addProfileTypeF: function (e) {
            e.preventDefault()
            let that = this;
            if (!that.addProfileType.profileType || !that.addProfileType.file) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.addProfileType.disabled = true;
                const formData = new FormData();
                formData.append('file', that.addProfileType.file);
                formData.append('profileType', that.addProfileType.profileType);
                Api.addProfileTypeF(formData).then(response => {
                    that.addProfileType.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Profile type added successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.addProfileType.disabled = false
                        that.addProfileType.profileType = ''
                        that.$bvModal.hide('add-profile-type-modal')
                        that.getProfileTypeList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.addProfileType.disabled = false;
                    });
                });
            }
        },
        getProfileType: function (data) {
            let that = this;
            that.updateProfileType.id = data.id
            that.updateProfileType.profileType = data.profile_type
            that.$bvModal.show('update-profile-type-modal')
        },
        updateProfileTypeF: function (e) {
            e.preventDefault()
            let that = this;
            if (!that.updateProfileType.profileType) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.updateProfileType.disabled = true;
                const formData = new FormData();
                formData.append('id', that.updateProfileType.id);
                formData.append('file', that.updateProfileType.file);
                formData.append('profileType', that.updateProfileType.profileType);
                Api.updateProfileTypeF(formData).then(response => {
                    that.updateProfileType.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Profile type updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.updateProfileType.disabled = false
                        that.$bvModal.hide('update-profile-type-modal')
                        that.getProfileTypeList()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.updateProfileType.disabled = false;
                    });
                });
            }
        },
        deleteProfileType: function (id) {
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
                    Api.deleteProfileType(id).then(response => {
                        this.$swal({
                            icon: "success",
                            title: "Success",
                            text: "Profile Type deleted successfully",
                            showConfirmButton: true
                        }).then(function () {
                            that.getProfileTypeList()
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
        this.getProfileTypeList()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
