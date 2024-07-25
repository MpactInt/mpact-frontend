<template>
  <section>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Opportunities</span>
        </p>

        <button class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-if="user.role == 'ADMIN'" v-b-modal.add-opportunity-modal>
            <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                    d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                    stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
            <span class="flex-1 text-white ml-3 whitespace-nowrap">Add New Opportunity</span>
        </button> 
    </div>
    
    <!-- card-10 stat -->
    <div class="w-full" v-if="user.role == 'ADMIN'">
        <div class="py-6 px-8">
            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Company Name
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Content
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50" v-if="opportunitiesLength" v-for="r in opportunities.data" v-bind:key="r.id">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ r.company.map(({company_name}) => company_name).join(',') }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <p v-html="r.content"></p>
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getOpportunity(r.id)">
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
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteOpportunity(r.id)">
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
                        <tr class="bg-white hover:bg-gray-50" v-if="!opportunitiesLength">
                            <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="3">
                                No Data Found
                            </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="opportunities" @pagination-change-page="getOpportunityList"/>
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <!--Add resource modal popup-->
    <Add :getOpportunityList="getOpportunityList"></Add>
    <!--Update resource modal popup-->
    <Edit :getOpportunityList="getOpportunityList" :opportunityUpdate="opportunityUpdate"></Edit>

  </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../opportunities/Add.vue'
import Edit from '../opportunities/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: {Add, Edit},
  data () {
    return {
      opportunityUpdate: {
        id: '',
        company: '',
        description: '',
        company: '',
        disabled: false
      },
      opportunities: {},
      opportunitiesLength: ''
    }
  },
  methods: {
    getOpportunity: function (id) {
      let that = this
      Api.getOpportunity(id).then(response => {
        that.opportunityUpdate.id = response.data.res.id
        that.opportunityUpdate.company = response.data.res.company
        that.opportunityUpdate.description = response.data.res.description
        that.$bvModal.show('update-opportunity-modal')
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    deleteOpportunity: function (id) {
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
          Api.deleteOpportunity(id).then(response => {
            this.$swal({
              icon: 'success',
              title: 'Success',
              text: 'Opportunity deleted successfully',
              showConfirmButton: true
            }).then(function () {
              that.getOpportunityList()
            })
          }).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.opportunity.disabled = false
            })
          })
        }
      })
    },
    getOpportunityList: function (page = 1) {
      let that = this
      Api.getOpportunityList(page).then(response => {
        that.opportunities = response.data.res
        that.opportunitiesLength = that.opportunities.data.length
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
          that.opportunity.disabled = false
        })
      })
    },
  },
  mounted () {
    this.getOpportunityList()
  }
}
</script>
