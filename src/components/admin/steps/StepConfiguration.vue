<template>
  <section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Steps</span> 
        </p>
    </div>
    
    <!-- card-10 stat -->
    <div class="w-full">
        <div class="py-6 px-8">
            <div class="flex justify-between py-6">
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
                            placeholder="Search" required v-model="getStepData.keyword" v-on:keyup="getStepsList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-step-modal>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add New Step</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Overview
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="stepsLength" v-for="r in stepsList" v-bind:key="r.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ r.title }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.overview }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <img :src="filePath + '/' + r.image" class="table-img" height="70" width="70" />
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getStep(r.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <g clip-path="url(#clip0_143_2408)">
                                            <path
                                                d="M7.33301 2.66666H4.53301C3.4129 2.66666 2.85285 2.66666 2.42503 2.88464C2.0487 3.07639 1.74274 3.38235 1.55099 3.75867C1.33301 4.1865 1.33301 4.74655 1.33301 5.86666V11.4667C1.33301 12.5868 1.33301 13.1468 1.55099 13.5746C1.74274 13.951 2.0487 14.2569 2.42503 14.4487C2.85285 14.6667 3.4129 14.6667 4.53301 14.6667H10.133C11.2531 14.6667 11.8132 14.6667 12.241 14.4487C12.6173 14.2569 12.9233 13.951 13.115 13.5746C13.333 13.1468 13.333 12.5868 13.333 11.4667V8.66666M5.33299 10.6667H6.44935C6.77547 10.6667 6.93853 10.6667 7.09198 10.6298C7.22803 10.5972 7.35809 10.5433 7.47739 10.4702C7.61194 10.3877 7.72724 10.2724 7.95785 10.0418L14.333 3.66666C14.8853 3.11437 14.8853 2.21894 14.333 1.66666C13.7807 1.11437 12.8853 1.11437 12.333 1.66665L5.95783 8.04182C5.72723 8.27242 5.61193 8.38772 5.52947 8.52228C5.45637 8.64157 5.40249 8.77163 5.36983 8.90768C5.33299 9.06113 5.33299 9.22419 5.33299 9.55031V10.6667Z"
                                                stroke="#0A0446" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </g>
                                        <defs>
                                            <clipPath id="clip0_143_2408">
                                                <rect width="16" height="16" fill="white" />
                                            </clipPath>
                                        </defs>
                                    </svg>
                                    <span class="flex-1 text-[#0A0446] ml-3 whitespace-nowrap">Edit</span>
                                </button>

                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteStep(r.id)">
                                    <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                            stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>

                                    <span
                                        class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">Delete</span>
                                </button>

                                <router-link :to="'/admin/view-step/' + r.id">
                                    <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2"  :to="'/admin/view-step/' + r.id">
                                        <img src="../../../assets/images/table-eye.svg" alt="table-eye" width="24" height="24" />
                                        <span class="flex-1 font-medium text-gray-800 ml-3 whitespace-nowrap">&nbsp;</span>
                                    </button>
                                </router-link>

                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    <!-- card-10 end -->


    <!--Add step modal popup-->
    <b-modal id="add-step-modal" title="Add New Step" :hide-footer=hideFooter size="lg" no-fade no-enforce-focus>
      <form enctype="multipart/form-data" @submit="addStep">
        <div id="details">
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="step.title">
          </div>
          <div class="form-group">
            <label>Overview<span class="err">*</span></label>
            <textarea class="form-control" id="overview" placeholder="Overview" v-model="step.overview"></textarea>
          </div>
          <div class="form-group">
            <label>Tools and Review<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="step.description" placeholder="Tools and Review"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Upload Image <span class="err">*</span></label>
            <input type="file" class="form-control" id="image" ref="image" @change="fileOnChange">
          </div>
          <button type="submit" class="btn btn-primary" :disabled="step.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
    <!--Update step modal popup-->
    <b-modal id="update-step-modal" title="Update Step" :hide-footer=hideFooter size="lg" no-fade no-enforce-focus>
      <form enctype="multipart/form-data" @submit="updateStep">
        <div id="details">
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="stepUpdate.title">
          </div>
          <div class="form-group">
            <label>Overview<span class="err">*</span></label>
            <textarea class="form-control" id="overview" placeholder="Overview"
              v-model="stepUpdate.overview"></textarea>
          </div>
          <div class="form-group">
            <label>Tools and Review<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="stepUpdate.description" placeholder="Tools and Review"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Upload Image <span class="err">*</span></label>
            <input type="file" class="form-control" id="image" ref="imageUpdate" @change="fileOnChangeUpdate">
          </div>
          <button type="submit" class="btn btn-primary" :disabled="step.disabled">Submit</button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'StepConfiguration',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor
  },
  data() {
    return {
      hideFooter: true,
      stepsList: {},
      stepsLength: 0,
      step: {
        'title': '',
        'overview': '',
        'description': '',
        'image': '',
        'disabled': false,
      },

      getStepData: {
        'sortBy': '',
        'keyword': '',
        'sortOrder':''
      },
      filePath: ''
    }
  },
  methods: {
    fileOnChange: function (e) {
      this.step.image = this.$refs.image.files[0];
    },
    fileOnChangeUpdate: function () {
      this.stepUpdate.image = this.$refs.imageUpdate.files[0];
    },
    getStepsList: function (page = 1) {
      let that = this
      Api.getStepsList(page, that.getStepData).then(response => {
        let that = this
        that.stepsList = response.data.res
        that.stepsLength = that.stepsList.length
        that.filePath = response.data.path
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    addStep: function (e) {
      e.preventDefault();
      let that = this;
      if (!that.step.title || !that.step.description || !that.step.image) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields fields",
          showConfirmButton: true
        });
      } else {
        let that = this
        that.step.disabled = true;
        const formData = new FormData();
        formData.append('image', that.step.image);
        formData.append('title', that.step.title)
        formData.append('overview', that.step.overview)
        formData.append('description', that.step.description)
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.addStep(formData, headers).then(response => {
          that.step.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Step created successfully",
            showConfirmButton: true
          }).then(function () {
            that.step.title = ''
            that.step.description = ''
            that.$refs.image.value = null;
            that.$bvModal.hide('add-step-modal')
            that.getStepsList()
          });
        }
        ).catch((error) => {
          that.step.disabled = false;
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.step.disabled = false;
          });
        });
      }
    },
    deleteStep: function (id) {
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
          Api.deleteStep(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getStepsList()
            });
          }
          ).catch((error) => {
            this.$swal({
              icon: "error",
              title: "error",
              text: error.response.data.message,
              showConfirmButton: true
            });
          });
        }
      })
    },
    updateStep: function (e) {
      e.preventDefault()
      let that = this;
      if (!that.stepUpdate.title || !that.stepUpdate.description || !that.stepUpdate.image) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.stepUpdate.disabled = true;
        const formData = new FormData();
        formData.append('id', that.stepUpdate.id);
        formData.append('image', that.stepUpdate.image)
        formData.append('title', that.stepUpdate.title)
        formData.append('overview', that.stepUpdate.overview)
        formData.append('description', that.stepUpdate.description)
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.updateStep(formData, headers).then(response => {
          that.stepUpdate.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Step details updated successfully",
            showConfirmButton: true
          }).then(function () {
            that.stepUpdate.disabled = false;
            that.$bvModal.hide('update-step-modal')
            that.getStepsList()
          });
        }).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.step.disabled = false;
          });
        });
      }
    },
  },
  mounted() {
    this.getStepsList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
