<template>
    <section>
        <div class="py-6 flex justify-between px-8">
            <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                <span class="text-[#090446]">Past Tips</span>
            </p>

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
                        placeholder="Search" required v-model="getTipsData.keyword" v-on:keyup="getTipsList">
                </div>
            </form>
        </div>
        <!-- card-10 stat -->
        <div class="w-full">
            <div class="py-6 px-8">
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
                                    Audio File
                                </th>
                                <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody class="text-[#090446]">
                            <tr class="bg-white hover:bg-gray-50" v-if="tipsLength" v-for="r in tips.data" v-bind:key="r.id">
                                <td scope="row"
                                    class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                    {{ r.title | truncate(20) }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.description | truncate(40) }}
                                </td>
                                <td class="px-6 py-4 border-r border-gray-300">
                                    {{ r.audio_file | truncate(20) }}
                                </td>
                                <td
                                    class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">

                                    <button
                                        class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" v-if="user.role == 'ADMIN'" @click="deleteTip(r.id)">
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
                            <tr class="bg-white hover:bg-gray-50" v-if="!tipsLength">
                                <td scope="row" class="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap"colspan="4">No Data Found</td>
                            </tr>
                        </tbody>
                    </table>
                    <pagination :data="tips" @pagination-change-page="getTipsList"/>
                </div>
            </div>
        </div>
        <!-- card-10 end -->

        <!--Add resource modal popup-->
        <Add :getTipsList="getTipsList"></Add>
        <!--Update resource modal popup-->
        <Edit :getTipsList="getTipsList" :tipUpdate="tipUpdate"></Edit>
    </section>
</template>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../tips/Add.vue'
import Edit from '../tips/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: {Add, Edit},
  data () {
    return {
      tips: {},
      getTipsData: {
        sortBy: '',
        keyword: ''
      },
      tipsLength: '',
      tipUpdate: {
        'id': '',
        'category': '',
        'profile_type': '',
        'title': '',
        'description': '',
        'audio_file': '',
        'tip_type': '',
        'disabled': false,
      },
      tipId: {
        'tip_id': ''
      },
    }
  },
  methods: {
    getTipById: function () {
      let that = this
      Api.getTipById(that.tipId).then(response => {
        that.tipUpdate.id = response.data.res.id
        that.tipUpdate.title = response.data.res.title
        that.tipUpdate.description = response.data.res.description
        that.tipUpdate.audio_file = response.data.res.audio_file
        that.tipUpdate.tip_type = response.data.res.tip_type
        that.tipUpdate.category = response.data.res.category
        that.tipUpdate.profile_type = response.data.res.profile_type
        //that.$bvModal.show('update-tip-modal')
      })
    },

    deleteTip: function (id) { 
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
          Api.deleteTip(id).then(response => {
            this.$swal({
              icon: 'success',
              title: 'Success',
              text: 'Tip deleted successfully',
              showConfirmButton: true
            }).then(function () {
              that.getTipsList()
            })
          }).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            }).then(function () {
              that.Tip.disabled = false
            })
          })
        }
      })
    },
   
    getTipsList: function (page = 1) {
      let that = this
      Api.getPastTipsList(that.getTipsData, page).then(response => {
        that.tips = response.data.res
        that.tipsLength = that.tips.data.length
      }).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        }).then(function () {
          that.tip.disabled = false
        })
      })
    },
  },
  mounted () {
    this.getTipsList()
  }
}
</script>
