<template>
    <b-modal id="add-category-modal" title="Add New Category" :hide-footer=hideFooter>
        <form enctype="multipart/form-data">
            <div id="details">
                <div class="form-group">
                    <label>Category <span class="err">*</span></label>
                    <input type="text" class="form-control" id="category_name" placeholder="Category" v-model="category.category_name">
                </div>
                <div class="form-group">
                    <label>Description<span class="err">*</span></label>
                    <textarea class="form-control" id="category_desc" placeholder="Description"
                        v-model="category.category_desc"></textarea>
                </div>
                <div class="form-group">
                    <label>Category Image</label>
                    <input type="file" class="form-control" id="file" ref="file" @change="fileOnChange">
                </div>
                <button type="button" @click="addCategory" class="btn btn-primary"
                    :disabled="category.disabled">Submit</button>
            </div>
        </form>
    </b-modal>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
export default {
    name: 'Add',
    mixins: [AppMixin],
    props: {
        getCategoriesList: {
            type: Function
        }
    },
    data() {
        return {
            hideFooter: true,
            category: {
                'category_name': '',
                'category_desc': '',
                'category_image': '',
                'disabled': false,
            },
        }
    },
    methods: {
        fileOnChange: function (e) {
            let that = this;
            this.category.category_image = this.$refs.file.files[0];
        },
        addCategory: function (e) {
            e.preventDefault();
            let that = this;
            if (!that.category.category_name || !that.category.category_desc) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill name and description fields",
                    showConfirmButton: true
                });
            } else if (that.category.category_image == '') {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill upload file field",
                    showConfirmButton: true
                });
            } else {
                that.category.disabled = true;
                const formData = new FormData();
                formData.append('category_name', that.category.category_name);
                formData.append('category_desc', that.category.category_desc);
                formData.append('category_image', that.category.category_image);
                
                Api.addCategory(formData).then(response => {
                    that.category.disabled = false;

                    let headers = {
                        'Content-Type': 'multipart/form-data',
                        'Access-Control-Allow-Origin': '*'
                    }
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Category created successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.$bvModal.hide('add-category-modal')
                        that.category.category_name = ''
                        that.category.category_desc = ''
                        that.$refs.file.value = null;
                        that.getCategoriesList()
                    });
                }
                ).catch((error) => {
                    that.category.disabled = false;
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.category.disabled = false;
                    });
                });
            }
        },


    }
}
</script>
