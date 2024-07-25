<template>
    <b-modal id="update-category-modal" title="Update Category" :hide-footer=hideFooter>
        <form enctype="multipart/form-data">
            <div id="details">
               
                <div class="form-group">
                    <label>Category <span class="err">*</span></label>
                    <input type="text" class="form-control" id="category_name" placeholder="Category"
                        v-model="categoryUpdate.category_name">
                </div>
                <div class="form-group">
                    <label>Description<span class="err">*</span></label>
                    <textarea class="form-control" id="category_desc" placeholder="Description"
                        v-model="categoryUpdate.category_desc"></textarea>
                </div>
               
                <div class="form-group">
                    <label>File</label>
                    <input type="file" class="form-control" id="category-images" ref="fileUpdate" @change="updateFileOnChange">
                </div>
                
                <button type="button" @click="updateCategory" class="btn btn-primary"
                    :disabled="categoryUpdate.disabled">Submit</button>

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
        'getCategoriesList',
        'categoryUpdate'
    ],
    data() {
        return {
            hideFooter: true,

        }
    },
    methods: {
        updateFileOnChange: function (e) {
            let that = this;
            this.categoryUpdate.category_image = this.$refs.fileUpdate.files[0];
        },
        updateCategory: function () {
            let that = this;
            if (!that.categoryUpdate.category_name || !that.categoryUpdate.category_desc) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill Category and description fields",
                    showConfirmButton: true
                });
            } else if (!that.categoryUpdate.showFile) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill upload file fields",
                    showConfirmButton: true
                });
            } else {
                that.categoryUpdate.disabled = true;
                const formData = new FormData();
                formData.append('id', that.categoryUpdate.id)
                formData.append('category_name', that.categoryUpdate.category_name);
                formData.append('category_desc', that.categoryUpdate.category_desc);
                formData.append('category_image', that.categoryUpdate.category_image);
              
       
                Api.updateCategory(formData).then(response => {
                    that.categoryUpdate.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Category details updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.categoryUpdate.disabled = false;
                        that.$bvModal.hide('update-category-modal')
                        that.getCategoriesList()
                    });
                }
                ).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.categoryUpdate.disabled = false;
                    });
                });
            }
        },

    },
    created() {
        console.log(this.categoryUpdate)
    }
}
</script>
