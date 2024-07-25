<template>
  <section class="admin-welcome-note-section pink-pattern-bg">
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">WELCOME NOTE</span>
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
                            placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getWelcomeNoteList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" @click="getWelcomeNoteCompanies()" v-b-modal.add-modal>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add New Welcome Note</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Image
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Title
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Description
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Company
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="welcome_notes_length" v-for="n in welcome_notes.data" v-bind:key="n.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                <img v-if="n.image" :src="path + '/' + n.image" class="table-img" height="75" width="75" /><span v-else>NA</span>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ n.title }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300" v-html="n.description"></td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{n.company.map(({company_name})=>company_name).join(', ') }}
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getCompaniesList(); getSingleWelcomeNote(n.id)">
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
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteWelcomeNote(n.id)">
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
                        <tr class="bg-white hover:bg-gray-50" v-if="!welcome_notes_length">
                            <td class="px-6 py-4 border-r border-gray-300" colspan="5">
                                No Data Found
                            </td>
                        </tr>

                    </tbody>
                </table>
                <pagination :data="welcome_notes" @pagination-change-page="getWelcomeNoteList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <b-modal id="add-modal" size="lg" title="Add New Welcome Note" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form @submit="addWelcomeNoteCompany" ref="addWelcomeNoteForm" enctype="multipart/form-data">
        <div class="form-group">
          <label>Select Company <span class="err">*</span></label>
          <multiselect v-model="note.company" :options="companiesList" group-values="values" group-label="selectAll"
            :multiple="true" :group-select="true" placeholder="Type to search" track-by="name" label="name">
            <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
        </div>
        <div class="form-group">
          <label>Title <span class="err">*</span></label>
          <input type="text" class="form-control" id="welcome_note" v-model="note.title" placeholder="Title"
            autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Description <span class="err">*</span></label>
          <vue2-tinymce-editor v-model="note.description" placeholder="Description"></vue2-tinymce-editor>
        </div>
        <div class="form-group">
          <label>Upload Image
            <!-- <span class="err">*</span> -->
          </label> <input type="file" ref="welcome_image" id="welcome_image" @change="imageOnChange"
            accept=".jpg, .jpeg, .png" />
        </div>
        <div class="form-group">
          <button type="submit" class="btn btn-primary" :disabled="note.disabled">Add</button>
        </div>
      </form>
    </b-modal>

    <b-modal id="update-modal" size="lg" title="Update Welcome Note" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form @submit="updateWelcomeNoteCompany" ref="updateWelcomeNoteForm" enctype="multipart/form-data">
        <div class="form-group">
          <label>Select Company <span class="err">*</span></label>
          <multiselect v-model="noteUpdate.company" :options="companiesListUpdate" group-values="values"
            group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
            label="name">
            <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
          </multiselect>
        </div>
        <div class="form-group">
          <label>Title <span class="err">*</span></label>
          <input type="text" class="form-control" id="welcome_note" v-model="noteUpdate.title" placeholder="Title"
            autocomplete="off" />
        </div>
        <div class="form-group">
          <label>Description <span class="err">*</span></label>
          <vue2-tinymce-editor v-model="noteUpdate.description" placeholder="Description"></vue2-tinymce-editor>
        </div>
        <div class="form-group">
          <label>Upload Image
            <!-- <span class="err">*</span> -->
          </label> <input type="file" ref="welcome_image_update" id="welcome_image_update" @change="imageOnChangeUpdate"
            accept=".jpg, .jpeg, .png" />
        </div>

        <div class="form-group">
          <button type="submit" class="btn btn-primary" :disabled="note.disabled">Update</button>
        </div>
      </form>
    </b-modal>

  </section>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import axios from 'axios'
import Api from '../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";
export default {
  name: 'Settings',
  data() {
    return {
      hideFooter: true,
      note: {
        'title': '',
        'description': '',
        'image': '',
        'company': '',
        'disabled': false
      },
      noteUpdate: {
        'id': '',
        'title': '',
        'description': '',
        'image': '',
        'company': '',
        'disabled': false
      },
      companiesList: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      companiesListUpdate: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      welcome_notes: {},
      welcome_note: {},
      path: '',
      welcome_notes_length: 0,
      searchData:{
        'sortBy':'',
        'sortOrder':'',
        'keyword':''
      }
    }
  },
  components: {
    Vue2TinymceEditor
  },
  mixins: [AppMixin],
  methods: {
    imageOnChangeUpdate: function (e) {
      let that = this;
      that.noteUpdate.image = ''
      that.noteUpdate.image = this.$refs.welcome_image_update.files[0];
    },
    imageOnChange: function (e) {
      let that = this;
      that.note.image = ''
      that.note.image = this.$refs.welcome_image.files[0];
    },
    addWelcomeNoteCompany: function (e) {
      e.preventDefault()
      let that = this;
      console.log(that.note.company)
      if (!that.note.company || !that.note.title || !that.note.description) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.note.disabled = true;
        const formData = new FormData();
        formData.append('image', that.note.image);
        formData.append('title', that.note.title);
        formData.append('description', that.note.description);
        formData.append('company', JSON.stringify(that.note.company))
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.addWelcomeNoteCompany(formData).then(response => {
          that.note.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Welcome note added successfully",
            showConfirmButton: true
          }).then(function () {
            that.note.disabled = false
            that.$refs.welcome_image.value = null;
            that.note.title = ''
            that.note.description = ''
            that.$bvModal.hide('add-modal')
            that.getWelcomeNoteList();
          });
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.note.disabled = false;
          });
        });
      }
    },
    getWelcomeNoteCompanies: function (e) {
      let that = this
      Api.getWelcomeNoteCompanies().then(response => {
        that.companiesList[0].values = response.data.res
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        })
      });
    },
    getWelcomeNoteList: function (page = 1) {
      let that = this
      Api.getWelcomeNoteList(page,that.searchData).then(response => {
        that.welcome_notes = response.data.res
        that.welcome_notes_length = that.welcome_notes.data.length
        that.path = response.data.path
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        })
      });
    },
    getSingleWelcomeNote: function (id) {
      let that = this
      Api.getSingleWelcomeNote(id).then(response => {
        that.$bvModal.show('update-modal')
        that.noteUpdate.id = response.data.res.id
        that.noteUpdate.title = response.data.res.title
        that.noteUpdate.description = response.data.res.description
        that.noteUpdate.company = response.data.res.company
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        })
      });
    },
    getCompaniesList: function () {
      let that = this
      Api.getCompaniesList().then(response => {
        let that = this
        that.companiesListUpdate[0].values = response.data.res
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
    updateWelcomeNoteCompany: function (e) {
      e.preventDefault()
      let that = this;
      if (!that.noteUpdate.company || !that.noteUpdate.title || !that.noteUpdate.description) {
        this.$swal({
          icon: "error",
          title: "error",
          text: "Please fill all required fields",
          showConfirmButton: true
        });
      } else {
        that.noteUpdate.disabled = true;
        const formData = new FormData();
        formData.append('id', that.noteUpdate.id);
        formData.append('image', that.noteUpdate.image);
        formData.append('title', that.noteUpdate.title);
        formData.append('description', that.noteUpdate.description);
        formData.append('company', JSON.stringify(that.noteUpdate.company))
        let headers = {
          'Content-Type': 'multipart/form-data',
          'Access-Control-Allow-Origin': '*'
        }
        Api.updateWelcomeNoteCompany(formData).then(response => {
          that.noteUpdate.disabled = false;
          this.$swal({
            icon: "success",
            title: "Success",
            text: "Welcome note upated successfully",
            showConfirmButton: true
          }).then(function () {
            that.noteUpdate.disabled = false
            that.$refs.welcome_image_update.value = null;
            that.noteUpdate.title = ''
            that.noteUpdate.description = ''
            that.$bvModal.hide('update-modal')
            that.getWelcomeNoteList();
          });
        }
        ).catch((error) => {
          this.$swal({
            icon: "error",
            title: "error",
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.note.disabled = false;
          });
        });
      }
    },
    deleteWelcomeNote: function (id) {
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
          Api.deleteWelcomeNote(id).then(response => {
            this.$swal({
              icon: "success",
              title: "Success",
              text: "Welcome Note deleted successfully",
              showConfirmButton: true
            }).then(function () {
              that.getWelcomeNoteList()
            });
          }).catch((error) => {
            this.$swal({
              icon: "error",
              title: "error",
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.opportunity.disabled = false;
            });
          });
        }
      });
    },

  },
  mounted() {
    this.getWelcomeNoteList()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
