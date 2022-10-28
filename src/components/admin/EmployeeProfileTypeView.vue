<template>
    <section class="popup-survey-view-section half-cut-bg">
        <router-link to="/admin/employee-profile-type" class="btn back">
            <!-- <button class="btn-primary"> -->
            <img src="../../assets/images/arrow-left.svg" alt="arrow-left" /> Back
            <!-- </button> -->
        </router-link>
        <h3 class="page-title text-left mt-0">Employee <span>Profile Type Details</span></h3>
        <p><b>Profile Type:</b> <span class="links">{{ profileType.profile_type }} </span></p>
        <p><b>File:</b> <a class="cursor-pointer links"
                @click="downloadProfileTypeFile(profileType.id, profileType.file)">{{
                        profileType.file
                }}</a></p>
        <div class="row mt-5">
            <div class="col-md-4">
                <h2 class="blue-color"><strong>Section 1</strong></h2>
                <form enctype="multipart/form-data" @submit="addUpdateSection1">
                    <div class="form-group">
                        <label>Title</label>
                        <input class="form-control" type="text" placeholder="title" v-model="section1.title" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>

                        <vue2-tinymce-editor v-model="section1.description" placeholder="Description">
                        </vue2-tinymce-editor>

                        <!-- <textarea class="form-control" placeholder="Description"
                            v-model="section1.description"></textarea> -->
                    </div>
                    <div class="form-group">
                        <label>Image</label>
                        <input class="form-control" type="file" ref="image" @change="imageOnChange" />
                    </div>
                    <div class="form-group mt-5" v-if="section1.imageShow">
                        <label>Uploaded Image</label><br>
                        <img :src="section1.imageShow" class="table-img" height="75" width="75" />
                    </div>
                    <div class="form-group mt-3">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <h2 class="blue-color"><strong>Section 2</strong></h2>
                <form @submit="addUpdateSection2">
                    <div class="form-group">
                        <label>Title</label>
                        <input class="form-control" type="text" placeholder="title" v-model="section2.title" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <vue2-tinymce-editor v-model="section2.description" placeholder="Description">
                        </vue2-tinymce-editor>

                    </div>
                    <div class="form-group form-group pt-4 mt-4">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
            <div class="col-md-4">
                <h2 class="blue-color"><strong>Section 3</strong></h2>
                <form enctype="multipart/form-data" @submit="addUpdateSection3">
                    <div class="form-group">
                        <label>Title</label>
                        <input class="form-control" type="text" placeholder="title" v-model="section3.title" />
                    </div>
                    <div class="form-group">
                        <label>Description</label>
                        <vue2-tinymce-editor v-model="section3.description" placeholder="Description">
                        </vue2-tinymce-editor>

                    </div>
                    <div class="form-group form-group pt-4 mt-4">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
    name: 'EmployeeProfileTypeView',
    mixins: [AppMixin],
    data() {
        return {
            profileType: {}
        }
    },
    components: {
        Vue2TinymceEditor
    },
    methods: {
        imageOnChange: function (e) {
            let that = this;
            that.section1.image = ''
            that.section1.image = that.$refs.image.files[0];
        },
        // imageOnChangeMultiple: function () {
        //     let that = this;
        //     console.log(that.$refs.imageMultiple.files.length)
        //     for (let i = 0; i < that.$refs.imageMultiple.files.length; i++) {
        //         that.section3.image.push(that.$refs.imageMultiple.files[i]);
        //     }
        // },
        addUpdateSection1: function (e) {
            e.preventDefault()
            let that = this;
            console.log(that.section1);
            if (!that.section1.title || !that.section1.description || !that.section1.image) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.section1.disabled = true;
                const formData = new FormData();
                formData.append('image', that.section1.image);
                formData.append('title', that.section1.title);
                formData.append('description', that.section1.description);
                formData.append('profileType', that.$route.params.id);
                formData.append('id', that.section1.id);
                Api.addUpdateSection1(formData).then(response => {
                    that.section1.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.section1.disabled = false
                        that.$refs.image.value = null;
                        that.getSection1()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.section1.disabled = false;
                    });
                });
            }
        },
        addUpdateSection2: function (e) {
            e.preventDefault()
            let that = this;
            console.log(that.section1);
            if (!that.section2.title || !that.section2.description) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.section2.disabled = true;
                const formData = new FormData();
                formData.append('title', that.section2.title);
                formData.append('description', that.section2.description);
                formData.append('profileType', that.$route.params.id);
                formData.append('id', that.section2.id);
                Api.addUpdateSection2(formData).then(response => {
                    that.section2.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.section2.disabled = false
                        that.getSection2()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.section2.disabled = false;
                    });
                });
            }
        },
        addUpdateSection3: function (e) {
            e.preventDefault()
            let that = this;
            console.log(that.section1);
            if (!that.section3.title || !that.section3.description) {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: "Please fill all required  fields",
                    showConfirmButton: true
                })
            } else {
                that.section3.disabled = true;
                const formData = new FormData();
                // formData.append('image', that.section3.image);
                formData.append('title', that.section3.title);
                formData.append('description', that.section3.description);
                formData.append('profileType', that.$route.params.id);
                formData.append('id', that.section3.id);
                Api.addUpdateSection3(formData).then(response => {
                    that.section3.disabled = false;
                    this.$swal({
                        icon: "success",
                        title: "Success",
                        text: "Updated successfully",
                        showConfirmButton: true
                    }).then(function () {
                        that.section3.disabled = false
                        that.$refs.imageMultiple.value = null;
                        that.getSection3()
                    });
                }).catch((error) => {
                    this.$swal({
                        icon: "error",
                        title: "error",
                        text: error.response.data.message,
                        showConfirmButton: true
                    }).then(function () {
                        that.section3.disabled = false;
                    });
                });
            }
        },

        getProfileType: function () {
            let that = this
            Api.getProfileType(this.$route.params.id).then(response => {
                that.profileType = response.data.res
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
    },
    mounted() {
        this.getSection1()
        this.getSection2()
        this.getSection3()
        this.getProfileType()
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
