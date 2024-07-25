<template>
  <section>
   <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Consulting Hours</span> 
        </p>
    </div>

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
                            placeholder="Search" required v-model="getConsultingHourData.keyword" v-on:keyup="getConsultingHoursList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                  <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-chu>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add consulting hrs used</span>
                    </button>
                </div>
            </div>

            <div class="relative overflow-x-auto shadow-md">
                <table class="w-full text-sm text-center text-white">
                    <thead class="text-xs text-white bg-[#0A0446]">
                        <tr>
                            <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                Company
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Consulting Hours
                            </th>
                            
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50"  v-for="r in consultingHoursList.data" v-bind:key="r.id">
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span>{{ r.company_name }}</span> 
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span>{{ r.consulting_hour }}</span>
                            </td>
                           
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" @click="getCompaniesList(); getConsultingHours(r.id)">
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
                            </td>
                        </tr>
                        <tr class="bg-white hover:bg-gray-50" v-if="!consultingHoursLength">
                            <td scope="row"
                                class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap" colspan="9">
                                No Data Found
                            </td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="consultingHoursList" @pagination-change-page="getConsultingHoursList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <!--Add Consulting hour modal popup--> 
    <Add :getConsultingHoursList="getConsultingHoursList"></Add> 
    <!--Update Consulting hour modal popup-->
    <Edit :getConsultingHoursList="getConsultingHoursList" :workshopUpdateData="consultinghoursUpdate"></Edit>
  </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../consulting-hours/Add'
import Edit from '../consulting-hours/Edit.vue';

export default {
  name: 'List',
  mixins: [AppMixin],
  components: { Add,Edit },
  data() {
    return {
    }
  },
  methods: {
    
    
  },
  mounted() {
    this.getConsultingHoursList()
    //this.getWorkshopsList()
    this.getCompaniesListMultiselect()
    this.getCompaniesList()
    //this.getConsultingHours();
  
    
  }
}
</script>
