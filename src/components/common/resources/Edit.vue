<template>
    <b-modal id="update-resource-modal" title="Update Resource" :hide-footer=hideFooter>
        <form enctype="multipart/form-data">
            <div id="details">
                <div class="form-group"  v-if="user.role == 'ADMIN'">
                    <label>Select Company <span class="err">*</span></label>
                    <select class="form-control" v-model="resourceUpdate.company">
                        <option selected value="">Select</option>
                        <option v-for="cl in companiesList" :value="cl.id" v-bind:key="cl.id">{{ cl.company_name }}
                        </option>
                    </select>
                </div>
                <div class="form-group">
                    <label>Title <span class="err">*</span></label>
                    <input type="text" class="form-control" id="title" placeholder="Title"
                        v-model="resourceUpdate.title">
                </div>
                <div class="form-group">
                    <label>Description<span class="err">*</span></label>
                    <textarea class="form-control" id="description" placeholder="Description"
                        v-model="resourceUpdate.description"></textarea>
                </div>
                <div class="form-group">
                    <label>Link<span class="err">*</span></label>
                    <input type="text" class="form-control" id="link" placeholder="Link" v-model="resourceUpdate.link">
                </div>
                <div class="form-group">
                    <label>File<span class="err">*</span></label>
                    <input type="file" class="form-control" id="file" ref="fileUpdate" @change="updateFileOnChange">
                </div>
                <div class="form-group">
                    <label>Visibility<span class="err">*</span></label>
                    <input type="radio" id="visibility" v-model="resourceUpdate.visibility" value="PRIVATE"> PRIVATE
                    <input type="radio" id="visibility" v-model="resourceUpdate.visibility" value="PUBLIC"> PUBLIC
                </div>
                <button type="button" @click="updateResource" class="btn btn-primary"
                    :disabled="resourceUpdate.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
    name: 'Edit',
    mixins: [AppMixin],
    props: [
        'getResourcesList',
        'resourceUpdate'
    ],
    data() {
        return {
            hideFooter: true,

        }
    },
    methods: {

        updateFileOnChange: function (e) {
            let that = this;
            this.resourceUpdate.file = this.$refs.fileUpdate.files[0];
        },
        updateResource: function () {
            let that = this;
            if (!that.resourceUpdate.title || !that.resourceUpdate.description) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill title and description fields",
                    showConfirmButton: true
                });
            } else if (!that.resourceUpdate.link && !that.resourceUpdate.showFile) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill link or upload file fields",
                    showConfirmButton: true
                });
            } else {
                that.resourceUpdate.disabled = true;
                const formData = new FormData();
                formData.append('file', that.resourceUpdate.file);
                formData.append('link', that.resourceUpdate.link);
                formData.append('description', that.resourceUpdate.description);
                formData.append('title', that.resourceUpdate.title);
                formData.append('id', that.resourceUpdate.id)
                formData.append('visibility', that.resourceUpdate.visibility);
                formData.append('company', that.resourceUpdate.company);

                Api.updateResource(formData).then(response => {
                    that.resourceUpdate.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Resource details updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.resourceUpdate.disabled = false;
                        that.$bvModal.hide('update-resource-modal')
                        that.getResourcesList()
                    });
                }
                ).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.resource.disabled = false;
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
