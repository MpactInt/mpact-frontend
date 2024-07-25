<template>
  <section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold"> 
            <span class="text-[#090446]">Learning Plan</span>
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
                            placeholder="Search" required v-model="searchData.keyword" v-on:keyup="getLearningPlanList">
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
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add New Learning Plan</span>
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
                                Profile Type
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="learningPlanLength" v-for="lp in learningPlan.data" v-bind:key="lp.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                <img :src="learningPlanPath + '/' + lp.image" class="table-img" height="75" width="75" />
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ lp.title }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <p v-html="lp.description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 80)"></p>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span>{{ lp.profile_type.map(({ profile_type }) => profile_type).join(', ') }}</span>
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getLearningPlan(lp.id)">
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
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteLearningPlan(lp.id)">
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

                                <router-link :to="'/admin/learning-plan/' + lp.id">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" >
                                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4"
                                                stroke="#6A6767" stroke-width="1.5" stroke-linecap="round"
                                                stroke-linejoin="round" />
                                        </svg>
                                        <img src="../../assets/images/table-eye.svg" alt="table-delete" width="24" height="24" />
                                    </button>
                                </router-link>

                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50" v-if="!learningPlanLength">
                            <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap"colspan="5">No Data Found</td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="learningPlan" @pagination-change-page="getLearningPlanList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <!--Add learning plan modal popup-->
    <b-modal id="add-modal" title="Add New Learning Plan" :hide-footer=hideFooter no-fade no-enforce-focus>
      <form enctype="multipart/form-data">
        <div id="details">
          <div class="form-group" v-if="user.role == 'ADMIN'">
              <label>Select Company <span class="err">*</span></label>
              <multiselect v-model="plan.company" :options="companiesListMultiselect" group-values="values"
                  group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search"
                  track-by="name" label="name">
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
              </multiselect>
          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Profile Type <span class="err">*</span></label>
            <!-- <multiselect v-model="plan.profile_type" :options="profileTypeListMultiselect" group-values="values"
              group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
              label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect> -->
            <a class="btn btn-sm btn-info" @click.prevent="addInputField()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>


            <div v-for="(proFileTypeList, index) in proFileTypeLists" :key="proFileTypeList.id">
               <div style="display:flex;justify-content: space-around;margin-top:10px">
                  <label for="">Profile Type</label>
                  <select v-model="proFileTypeList.selectedOption" class="form-control" style="width: 31%;">
                    <option  v-for="row in profileTypeListMultiselect[0].values" :value="row.id">{{row.name}}</option>
                  </select>
                  <label for="">Order</label>
                  <input type="number" v-model="proFileTypeList.value" class="form-control" style="width: 31%;"/>
                  <button @click.prevent="removeInputField(proFileTypeList.id)" class="btn btn-sm btn-danger">
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
               </div>
            </div>


          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Resources <span class="err">*</span></label>
            <multiselect v-model="plan.resources" :options="resourcesListMultiselect" group-values="values"
              group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
              label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Part <span class="err">*</span></label>
             <select class="form-control" v-model="plan.part">
                <option value="part1">Part 1</option>
                <option value="part2">Part 2</option>
                <option value="part3">Part 3</option>
                <option value="part4">Part 4</option>
                <option value="general">General</option>
            </select>
          </div>
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="plan.title">
          </div>
          <div class="form-group">
            <label>Description<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="plan.description" placeholder="Tools and Review"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Image<span class="err">*</span></label>
            <input type="file" class="form-control" id="image" ref="image" @change="imageOnChange">
          </div>
          <div class="form-group">
            <label>Email Subject<span class="err">*</span></label>
            <input type="text" class="form-control" id="email_subject" placeholder="Email Subject" v-model="plan.email_subject"> 
          </div>
          <div class="form-group">
            <label>Email Body<span class="err">*</span></label>
            <textarea type="text" class="form-control" id="email_body" placeholder="Email Body" v-model="plan.email_body"></textarea>
          </div>
          <button type="button" class="btn btn-primary" @click="addLearningPlan" :disabled="plan.disabled">Submit
          </button>
        </div>
      </form>
    </b-modal>

    <!--Update learning plan modal popup-->
    <b-modal id="update-modal" title="Update Learning Plan" :hide-footer=hideFooter size="lg" no-fade no-enforce-focus>
      <form enctype="multipart/form-data">
        <div id="details">
          <div class="form-group" v-if="user.role == 'ADMIN'">
              <label>Select Company <span class="err">*</span></label>
              <multiselect v-model="planUpdate.company" :options="companiesListMultiselect" group-values="values"
                  group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search"
                  track-by="name" label="name">
                  <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
              </multiselect>
          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Profile Type <span class="err">*</span></label>
            <!-- <select class="form-control" v-model="planUpdate.profile_type">
              <option value="">Select</option>
              <option v-for="pt in profileType" v-bind:key="pt.id" :value="pt.id">
                {{ pt.profile_type }}
              </option>
            </select> -->

            <!-- <multiselect v-model="planUpdate.profile_type" :options="profileTypeListMultiselectUpdate"
              group-values="values" group-label="selectAll" :multiple="true" :group-select="true"
              placeholder="Type to search" track-by="name" label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect> -->

            <a class="btn btn-sm btn-info" @click.prevent="updateInputField()">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="mr-2"><path d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"></path></svg>
            </a>


            <div v-for="(proFileTypeList, index) in updateProFileTypeLists" :key="proFileTypeList.id">
               <div style="display:flex;justify-content: space-around;margin-top:10px">
                  <label for="">Profile Type</label>
                  <select v-model="proFileTypeList.selectedOption" class="form-control" style="width: 31%;">
                    <option  v-for="row in profileTypeListMultiselectUpdate[0].values" :value="row.id">{{row.name}}</option>
                  </select>
                  <label for="">Order</label>
                  <input type="number" v-model="proFileTypeList.value" class="form-control" style="width: 31%;"/>
                  <button @click="updateRemoveInputField(proFileTypeList.id)" class="btn btn-sm btn-danger">
                    <svg width="22" height="22" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6 2H10M2 4H14M12.6667 4L12.1991 11.0129C12.129 12.065 12.0939 12.5911 11.8667 12.99C11.6666 13.3412 11.3648 13.6235 11.0011 13.7998C10.588 14 10.0607 14 9.00623 14H6.99377C5.93927 14 5.41202 14 4.99889 13.7998C4.63517 13.6235 4.33339 13.3412 4.13332 12.99C3.90607 12.5911 3.871 12.065 3.80086 11.0129L3.33333 4" stroke="gray" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  </button>
               </div>
            </div>



          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Resources <span class="err">*</span></label>
            <multiselect v-model="planUpdate.resources" :options="resourcesListMultiselect" group-values="values"
              group-label="selectAll" :multiple="true" :group-select="true" placeholder="Type to search" track-by="name"
              label="name">
              <span slot="noResult">Oops! No elements found. Consider changing the search query.</span>
            </multiselect>
          </div>
          <div class="form-group" v-if="user.role == 'ADMIN'">
            <label>Select Part <span class="err">*</span></label>
            <select class="form-control" v-model="planUpdate.part">
                <option value="part1">Part 1</option>
                <option value="part2">Part 2</option>
                <option value="part3">Part 3</option>
                <option value="part4">Part 4</option>
                <option value="general">General</option>
            </select>
          </div>
          <div class="form-group">
            <label>Title <span class="err">*</span></label>
            <input type="text" class="form-control" id="title" placeholder="Title" v-model="planUpdate.title">
          </div>
          <div class="form-group">
            <label>Description<span class="err">*</span></label>
            <vue2-tinymce-editor v-model="planUpdate.description" placeholder="Description"></vue2-tinymce-editor>
          </div>
          <div class="form-group">
            <label>Image<span class="err">*</span></label>
            <input type="file" class="form-control" id="image" ref="imageUpdate" @change="imageOnChangeUpdate">
          </div>
          <div class="form-group">
            <label>Email Subject<span class="err">*</span></label>
            <input type="text" class="form-control" id="email_subject" placeholder="Email Subject" v-model="planUpdate.email_subject"> 
          </div>
          <div class="form-group">
            <label>Email Body<span class="err">*</span></label>
            <textarea type="text" class="form-control" id="email_body" placeholder="Email Body" v-model="planUpdate.email_body"></textarea>
          </div>
          <button type="button" class="btn btn-primary" @click="updateLearningPlan"
            :disabled="planUpdate.disabled">Submit
          </button>
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
import Api from '../../router/api'
import { Vue2TinymceEditor } from "vue2-tinymce-editor";


export default {
  name: 'LearningPlan',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor
  },
  data() {
    return {
      hideFooter: true,
      plan: {
        'company': '',
        'profile_type': '',
        'part': '',
        'title': '',
        'description': '',
        'image': '',
        'email_subject': '',
        'email_body': '',
        'disabled': false,
        'resources':''
      },
      planUpdate: {
        'id': '',
        'company': '',
        'profile_type': '',
        'part': '',
        'title': '',
        'description': '',
        'image': '',
        'email_subject': '',
        'email_body': '',
        'disabled': false,
        'resources':''
      },
      companyListMultiselectUpdate: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      profileTypeListMultiselectUpdate: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      resourcesListMultiselect: [
        {
          selectAll: 'Select All',
          values: []
        }
      ],
      searchData: {
        'sortBy': '',
        'sortOrder': '',
        'keyword': ''
      },
      proFileTypeLists:[],
      updateProFileTypeLists:[],

    }
  },
  methods: {
    addInputField() {
     var  obj =  this.proFileTypeLists[this.proFileTypeLists.length - 1];
      const lastId = obj ? obj.id : 0;

      this.proFileTypeLists.push({ id: lastId + 1, value: '',name:'', selectedOption: null });
    },
    removeInputField(id) {
         console.log({id})
      this.proFileTypeLists = this.proFileTypeLists.filter(item => item.id !== id);
    },
    updateInputField() {
     var  obj =  this.updateProFileTypeLists[this.updateProFileTypeLists.length - 1];
      const lastId = obj ? obj.id : 0;

      this.updateProFileTypeLists.push({ id: lastId + 1, value: '',name:'', selectedOption: null });
    },
    updateRemoveInputField(id) {
      this.updateProFileTypeLists = this.updateProFileTypeLists.filter(item => item.id !== id);
    },
    getLearningPlan: function (id) {
      Api.getLearningPlan(id).then(response => {
        this.planUpdate.id = response.data.res.id
        this.planUpdate.title = response.data.res.title
        this.planUpdate.description = response.data.res.description
        this.planUpdate.part = response.data.res.part
        this.planUpdate.company = response.data.res.company
        this.planUpdate.profile_type = response.data.res.profile_type
        this.planUpdate.email_subject = response.data.res.email_subject
        this.planUpdate.email_body = response.data.res.email_body
        // console.log({profile_type:response.data.res.profile_type})
        this.updateProFileTypeLists = [];
        response.data.res.profile_type.map((e)=>{
          this.updateProFileTypeLists.push({ id: e.id + 1, value: e.order,name:'', selectedOption: e.id });
        })
        this.planUpdate.resources = response.data.res.files
        this.getProfileTypeListMultiselectUpdate()
        this.getCompanyListMultiselectUpdate()
        this.$bvModal.show('update-modal')
      })

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
              icon: 'success',
              title: 'Success',
              text: 'Learning Plan deleted successfully',
              showConfirmButton: true
            }).then(function () {
              that.getLearningPlanList()
              this.getProfileTypeListMultiselect()
              this.getProfileTypeListMultiselectUpdate()

            })
          }).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.todo.disabled = false
            })
          })
        }
      })
    },
    imageOnChange: function (e) {
      let that = this
      this.plan.image = this.$refs.image.files[0]
    },
    imageOnChangeUpdate: function (e) {
      let that = this
      this.planUpdate.image = this.$refs.imageUpdate.files[0]
    },
    addLearningPlan: function (e) {
      e.preventDefault()
      let that = this
      // profile_type: [{"id":1,"name":"General"},{"id":2,"name":"Expert"},{"id":3,"name":"Stabilizer"},{"id":4,"name":"Analyzer"}]
      that.plan.profile_type = [];
       this.proFileTypeLists.map((it)=>{
        var pt =  this.profileTypeListMultiselect[0].values.filter(item => item.id == it.selectedOption);
        // console.log({profileType})
        if(pt.length){
          pt[0].order = it.value;
          that.plan.profile_type.push(pt[0])
        }
      })
      console.log(that.plan.profile_type);

      // return '';

      if (!that.plan.title || !that.plan.description || !that.plan.image || !that.plan.part) {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: 'Please all required fields',
          showConfirmButton: true
        })
      } else {
        that.plan.disabled = true
        const formData = new FormData()
        formData.append('company', JSON.stringify(that.plan.company))
        formData.append('profile_type', JSON.stringify(that.plan.profile_type))
        formData.append('resources', JSON.stringify(that.plan.resources))
        formData.append('part', that.plan.part)
        formData.append('image', that.plan.image)
        formData.append('description', that.plan.description)
        formData.append('title', that.plan.title)
        formData.append('email_subject', that.plan.email_subject)
        formData.append('email_body', that.plan.email_body)
        Api.addLearningPlan(formData).then(response => {
          that.plan.disabled = false

          let headers = {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
          this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Learning Plan created successfully',
            showConfirmButton: true
          }).then(function () {
            that.$bvModal.hide('add-modal')
            that.plan.profile_type = ''
            that.plan.title = ''
            that.plan.description = ''
            that.plan.part = ''
            that.plan.email_subject = ''
            that.plan.email_body = ''
            that.$refs.image.value = null
            that.getLearningPlanList()
            this.profileTypeListMultiselectUpdate()
            this.profileTypeListMultiselect();
            this.proFileTypeLists = [];
          })
        }
        ).catch((error) => {
          that.plan.disabled = false
          this.$swal({
            icon: 'error',
            title: 'error',
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.plan.disabled = false
          })
        })
      }
    },
    updateLearningPlan: function (e) {
      e.preventDefault()
      let that = this

      that.planUpdate.profile_type = [];
       this.updateProFileTypeLists.map((it)=>{
            var pt =  this.profileTypeListMultiselectUpdate[0].values.filter(item => item.id == it.selectedOption);
            if(pt.length){
              pt[0].order = it.value;
              that.planUpdate.profile_type.push(pt[0])
            }
      })
      console.log(that.planUpdate.profile_type);

      if (!that.planUpdate.title || !that.planUpdate.description || !that.planUpdate.part) 
      {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: 'Please all required fields',
          showConfirmButton: true
        })
      } 
      else 
      {
        console.log(that.planUpdate.email_subject,"update Field")
        that.plan.disabled = true
        const formData = new FormData()
        formData.append('company', JSON.stringify(that.planUpdate.company))
        formData.append('profile_type', JSON.stringify(that.planUpdate.profile_type))
        formData.append('resources', JSON.stringify(that.planUpdate.resources))
        formData.append('image', that.planUpdate.image)
        formData.append('description', that.planUpdate.description)
        formData.append('part', that.planUpdate.part)
        formData.append('title', that.planUpdate.title)
        formData.append('email_subject', that.planUpdate.email_subject) 
        formData.append('email_body', that.planUpdate.email_body)
        formData.append('id', that.planUpdate.id)
        Api.updateLearningPlan(formData).then(response => {
          that.planUpdate.disabled = false
          console.log(response,"Learning plan Updae")

          let headers = {
            'Content-Type': 'multipart/form-data',
            'Access-Control-Allow-Origin': '*'
          }
          this.$swal({
            icon: 'success',
            title: 'Success',
            text: 'Learning Plan updated successfully',
            showConfirmButton: true
          }).then(function () {
            that.$bvModal.hide('update-modal')
            that.planUpdate.profile_type = ''
            that.planUpdate.title = ''
            that.planUpdate.description = ''
            that.planUpdate.part = ''
            that.planUpdate.email_subject = ''
            that.planUpdate.email_body = ''
            that.$refs.imageUpdate.value = null
            that.getLearningPlanList()
            this.companyListMultiselectUpdate()
            this.profileTypeListMultiselectUpdate()
            this.profileTypeListMultiselect()
          })
        }
        ).catch((error) => {
          that.plan.disabled = false
          this.$swal({
            icon: 'error',
            title: 'error',
            text: error.response.data.message,
            showConfirmButton: true
          }).then(function () {
            that.plan.disabled = false
          })
        })
      }
    },
    getResourcesListMultiselect: function () {
      let that = this
      Api.getResourcesListMultiselect().then(response => {
        let that = this
        that.resourcesListMultiselect[0].values = response.data.res
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
    getCompanyListMultiselectUpdate: function () {
      let that = this
      Api.getCompanyListMultiselectUpdate().then(response => {
        let that = this
        that.companyListMultiselectUpdate[0].values = response.data.res
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
    getProfileTypeListMultiselectUpdate: function () {
      let that = this
      Api.getProfileTypeListMultiselectUpdate().then(response => {
        let that = this
        that.profileTypeListMultiselectUpdate[0].values = response.data.res
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
    getLearningPlanList: function (page = 1) {
      let that = this
      Api.getLearningPlanList(page, that.searchData).then(response => {
        that.learningPlan = response.data.res
        that.learningPlanLength = that.learningPlan.data.length
        that.learningPlanPath = response.data.path
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
    this.getCompaniesListMultiselect()
    //this.getCompaniesListMultiselectUpdate()
    this.getProfileTypeListMultiselect()
    this.getProfileTypeListMultiselectUpdate()
    this.getLearningPlanList()
    this.getResourcesListMultiselect()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
