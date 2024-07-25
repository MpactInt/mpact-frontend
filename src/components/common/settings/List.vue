<template>
    <section>
        <div class="py-6 flex justify-between px-8">
            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                <span class="text-[#090446]">Settings</span>
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
                                placeholder="Search" required v-model="getSettingsData.keyword" v-on:keyup="getSettingsList">
                        </div>
                    </form>
                </div>

                <div class="relative overflow-x-auto shadow-md">
                    <table class="w-full text-sm text-center text-white">
                        <thead class="text-xs text-white bg-[#0A0446]">
                            <tr>
                                <th scope="col" class="px-6 py-4 rounded-tl-lg border-r border-gray-700">
                                    Key
                                </th>
                                <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                    Value
                                </th>
                                <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-[#090446]">
                            <tr class="bg-white hover:bg-gray-50" v-if="settingsLength" v-for="r in settings.data" v-bind:key="r.id">
                                <td class="px-6 py-4 border-r border-gray-300">
                                    <span>{{ r.key }}</span>
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.value }}
                                </td>
                                <td
                                    class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" v-if="user.role == 'ADMIN'" @click="getSetting(r.key)">
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
                        </tbody>
                    </table>
                    <pagination :data="settings" @pagination-change-page="getSettingsList"/>
                </div>
            </div>
        </div>
        <!-- card-10 end -->
   
        <!--Update resource modal popup-->
        <Edit :getSettingsList="getSettingsList" :settingsUpdate="settingsUpdate"></Edit>

    </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'

import Edit from '../settings/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: {Edit},
  data () {
    return {
      settings: {},
      getSettingsData: {
        sortBy: '',
        keyword: ''
      },
      settingsUpdate: {
        id: '',
        key: '',
        value: ''
      },  
      settingsLength: ''
    }
  },
  methods: {
    
    getSettingsList: function (page = 1) { 
      let that = this
      Api.getSettingsList(that.getSettingsData, page).then(response => {
        that.settings = response.data.res
        that.settingsLength = that.settings.data.length
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
          that.settings.disabled = false
        })
      })
    },
    getSetting: function (key) {
      let that = this;
      Api.getSetting(key).then(response => { 
        that.settingsUpdate.id = response.data.res.id
        that.settingsUpdate.key = response.data.res.key
        that.settingsUpdate.value = response.data.res.value
        that.$bvModal.show('update-settings-modal')
      }).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    }
  },
  mounted () {
    this.getSettingsList()
  }
}
</script>
