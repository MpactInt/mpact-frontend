<template>
<section>
    <div>
        <div class="py-6 text-center px-8 space-y-1">
            <p class="bg-center text-[#0A0446] uppercase font-bold">
                Welcome To
            </p>
            <p class="text-3xl font-bold text-[#0A0446]">{{ stepUpdate.title }}</p>
        </div>

        <ul class="mx-5 flex flex-wrap space-x-1 items-center justify-center pb-6 nav nav-pills" id="myTab"
            data-tabs-toggle="#myTabContent" role="tablist">
            <li role="presentation">

                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1  rounded-md  text-center text-md border border-1 border-black nav-link active"
                    id="v-pills-home-tab" data-bs-toggle="pill" data-bs-target="#v-pills-home"
                    type="button" role="tab" aria-controls="v-pills-home" aria-selected="true" v-on:click="stepTab = 1">Overview</button>
            </li>
            <li role="presentation">
                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1 rounded-md text-center text-md border border-1 border-black nav-link"
                    id="v-pills-profile-tab" data-bs-toggle="pill" data-bs-target="#v-pills-profile"
                    type="button" role="tab" aria-controls="v-pills-profile" aria-selected="false" v-on:click="stepTab = 2">Guide Book</button>
            </li>
            <li role="presentation">
                <button 
                    class="b-0 flex items-center font-sixe-[20px] px-12 py-1 rounded-md text-center text-md border border-1 border-black nav-link"
                    id="v-pills-messages-tab" data-bs-toggle="pill" data-bs-target="#v-pills-messages"
                    type="button" role="tab" aria-controls="v-pills-messages" aria-selected="false" v-on:click="stepTab = 3">Toolkit</button>
            </li>
        </ul>
    </div>

    <div id="myTabContent">
        <div id="overview" role="tabpanel" aria-labelledby="overview-tab" class="flex flex-col px-8" v-if="stepTab == 1">
            <div class="my-3 space-y-1">
                <p class="text-xl font-bold ">Overview</p>
                <p class="leading-7">{{ stepUpdate.overview }}</p>
            </div>

            <div class="my-3 space-y-1" v-html="stepUpdate.description"></div>
        </div>

        <div id="book" role="tabpanel" aria-labelledby="book-tab" class="flex flex-col p-8" v-if="stepTab == 2">
            <div class="row">
              <form @submit="uploadGuideBook" enctype="multipart/form-data">
                <div class="form-group">
                  <label><b>Upload Guide Book</b></label>
                  <input type="file" class="form-control" id="guideBook" ref="guideBook"
                    @change="guideBookOnChange()" />
                </div>
                <div class="form-group">
                  <button type="submit" class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" :disabled="step.disabled">Upload</button>
                </div>
              </form>
            </div>

            <embed v-if="stepUpdate.guideBook" :src="toolkitPath + '/' + stepUpdate.guideBook" width="100%" height="2100px" />
            <p v-if="!stepUpdate.guideBook">Guide Book Not uploaded </p>
        </div>

        <div id="toolkit" role="tabpanel" aria-labelledby="toolkit-tab" class="flex flex-col px-8" v-if="stepTab == 3">
            <!-- card-10 stat -->
            <div class="w-full" v-if="user.role == 'ADMIN'">
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
                                    placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getToolkitList">
                            </div>
                        </form>

                        <div class="flex flex-row space-x-1">
                            <button
                                class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-modal>

                                <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                </svg>
                                <span class="flex-1 text-white ml-3 whitespace-nowrap">Upload Toolkit</span>
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
                                        Description
                                    </th>
                                    <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                        File
                                    </th>
                                    <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                        Action
                                    </th>
                                </tr>
                            </thead>
                            <tbody class="text-[#090446]">
                                <tr class="bg-white hover:bg-gray-50" v-if="toolkitList.data.length" v-for="tk in toolkitList.data" v-bind:key="tk.id">
                                    <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                        {{ tk.title | truncate(20) }}
                                    </td>
                                    <td class="px-6 py-4 border-r border-gray-300">
                                        <p v-html="truncateParagraph(tk.description, 80)"></p>
                                    </td>
                                    <td class="px-6 py-4 border-r border-gray-300">
                                        <a class="cursor-pointer links" @click="downloadToolkit(tk.id, tk.file)">Download</a>
                                    </td>
                                    <td
                                        class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                        <button
                                            class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getToolkit(tk)">
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
                                            class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteToolkit(tk.id)">
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

                                    </td>
                                </tr>
                                <tr class="bg-white hover:bg-gray-50" v-if="!toolkitList.data.length">
                                    <td scope="row"
                                        class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="5">
                                        No Data Found
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            <!-- card-10 end -->
        </div>
    </div>

    <b-modal id="add-modal" title="Upload Toolkit" :hide-footer=hideFooter>
      <form @submit="uploadToolkit" enctype="multipart/form-data">
        <div class="form-group">
          <label><b>Title</b></label>
          <input type="text" class="form-control" id="title" v-model="toolkit.title" />
        </div>
        <div class="form-group">
          <label><b>Description</b></label>
          <textarea type="text" class="form-control" id="description" v-model="toolkit.description"></textarea>
        </div>
        <div class="form-group">
          <label><b>Upload Toolkit Files</b></label>
          <input type="file" class="form-control" id="file" ref="file" @change="fileOnChange()" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" :disabled="toolkit.disabled">Upload</button>
        </div>
      </form>
    </b-modal>

    <b-modal id="update-modal" title="Update Toolkit" :hide-footer=hideFooter>
      <form @submit="updateToolkit" enctype="multipart/form-data">
        <div class="form-group">
          <label><b>Title</b></label>
          <input type="text" class="form-control" id="title" v-model="toolkitUpdate.title" />
        </div>
        <div class="form-group">
          <label><b>Description</b></label>
          <textarea type="text" class="form-control" id="description" v-model="toolkitUpdate.description"></textarea>
        </div>
        <div class="form-group">
          <label><b>Upload Toolkit Files</b></label>
          <input type="file" class="form-control" id="file" ref="fileUpdate" @change="fileOnChangeUpdate()" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" :disabled="toolkitUpdate.disabled">Upload</button>
        </div>
      </form>
    </b-modal>
  </section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

export default {
  name: 'ViewStep',
  mixins: [AppMixin],
  data() {
    return {
      stepTab: 1,
      step: {
        'disabled': false,
        'file': '',
        'guideBook': '',
      },
      toolkitList:[],
      toolkit: {
        'title': '',
        'description': '',
        'file': '',
        'disabled': false,
      },
      toolkitUpdate: {
        'title': '',
        'description': '',
        'file': '',
        'disabled': false,
      },
      searchData: {
        'sortBy': '',
        'sortOrder': '',
        'keyword': ''
      },
      hideFooter: true,
    }
  },
  methods: {
    fileOnChange: function (e) {
      this.toolkit.file = this.$refs.file.files[0];
    },
    fileOnChangeUpdate: function (e) {
      this.toolkitUpdate.file = this.$refs.fileUpdate.files[0];
    },
    guideBookOnChange: function (e) {
      this.step.guideBook = this.$refs.guideBook.files[0];
    },
    uploadToolkit: function (e) {
      e.preventDefault();
      let that = this
      const formData = new FormData();
      formData.append('file', that.toolkit.file);
      formData.append('id', this.$route.params.id);
      formData.append('title', that.toolkit.title);
      formData.append('description', that.toolkit.description);

      that.toolkit.disabled = true;
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.uploadToolkit(formData, headers).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "File Uploaded Successfully",
          showConfirmButton: true
        }).then(function () {
          that.toolkit.disabled = false;
          that.toolkit.title = ''
          that.toolkit.description = ''
          that.$refs.file.value = null
          that.$bvModal.hide('add-modal')
          that.getToolkitList()
        });
      }
      ).catch((error) => {
        that.toolkit.disabled = false;
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    uploadGuideBook: function (e) {
      e.preventDefault();
      let that = this
      const formData = new FormData();
      formData.append('guideBook', that.step.guideBook);
      formData.append('id', this.$route.params.id)
      that.step.disabled = true;
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.uploadGuideBook(formData, headers).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Guide Book Uploaded Successfully",
          showConfirmButton: true
        }).then(function () {
          that.step.disabled = false;
          that.getStep(that.$route.params.id)
          that.$refs.guideBook.value = null;
        });
      }
      ).catch((error) => {
        that.step.disabled = false;
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
    downloadToolkit: function (id, name) {
      Api.downloadToolkit(id)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = name
          link.click()
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
    deleteToolkit: function (id) {
      let that = this
      this.$swal({
        title: 'Are you sure?',
        text: 'You wont be able to revert !',
        type: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes Delete it!',
        cancelButtonText: 'No, Keep it!',
        showCloseButton: true,
        showLoaderOnConfirm: true
      }).then((result) => {
        if (result.value) {
          Api.deleteToolkit(id).then(response => {
            this.$swal({
              icon: "success",
              title: "success",
              text: "Deleted Successfully",
              showConfirmButton: true
            }).then(() => {
              that.getToolkitList()
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
    getToolkitList: function () {
      let that = this
      Api.getToolkitList(that.$route.params.id,that.searchData).then(response => {
        that.toolkitList = response.data.res
      });
    },
    getToolkit: function (toolkit) {
      let that = this
        that.$bvModal.show('update-modal')
        that.toolkitUpdate.id = toolkit.id
        that.toolkitUpdate.title = toolkit.title
        that.toolkitUpdate.description = toolkit.description
        // that.toolkitUpdate.file = toolkit.file
    },
    updateToolkit: function (e) {
      e.preventDefault();
      let that = this
      const formData = new FormData();
      formData.append('file', that.toolkitUpdate.file);
      formData.append('id', that.toolkitUpdate.id);
      formData.append('title', that.toolkitUpdate.title);
      formData.append('description', that.toolkitUpdate.description);

      that.toolkitUpdate.disabled = true;
      let headers = {
        'Content-Type': 'multipart/form-data',
        'Access-Control-Allow-Origin': '*'
      }
      Api.updateToolkit(formData, headers).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "Toolkit Updated Successfully",
          showConfirmButton: true
        }).then(function () {
          that.toolkitUpdate.disabled = false;
          that.toolkitUpdate.title = ''
          that.toolkitUpdate.description = ''
          that.$refs.fileUpdate.value = null
          that.$bvModal.hide('update-modal')
          that.getToolkitList();
        });
      }
      ).catch((error) => {
        that.toolkit.disabled = false;
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    },
  },
  mounted() {
    this.getStep(this.$route.params.id)
    this.getToolkitList();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
