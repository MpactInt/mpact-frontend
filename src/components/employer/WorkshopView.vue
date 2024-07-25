<template>
<section>
    <div class="py-4 px-8">
        <div class="flex flex-wrap space-y-2 justify-between">
            <p class="uppercase text-3xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                <span class="text-[#090446]">WORKSHOPS</span>
            </p>
        </div>
    </div>

    <div class="space-y-2 px-8">
        <div class="flex flex-col md:flex-col lg:flex-row items-start space-x-4 rounded-[18px] mb-8">
            <div class="w-full lg:w-1/2">
                <a href="#">
                    <img class="object-cover rounded-[15px] w-[100%] h-72"
                        :src="workshopPath + '/' + workshopUpdate.img" alt="product image" />
                </a>
            </div>
            <div class="mt-2 w-full lg:mt-0 lg:w-1/2 rounded-lg text-[#0A0446]">
                <div class="pb-2 flex flex-col">
                    <a href="#">
                        <p class="font-bold text-[24px] tracking-tight">
                            <span class="text-[#090446]">{{ workshopUpdate.title }}</span>
                        </p>
                    </a>

                    <p class="text-md text-justify text-gray-500 leading-6 py-1">
                        {{ workshopUpdate.description }}
                    </p>

                    <div class="mb-2">
                        <div class="flex flex-col leading-5">
                            <p class="flex flex-row items-center">
                                <span class="mr-1">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9999 15C8.82977 15 6.01065 16.5306 4.21585 18.906C3.82956 19.4172 3.63641 19.6728 3.64273 20.0183C3.64761 20.2852 3.81521 20.6219 4.02522 20.7867C4.29704 21 4.67372 21 5.42708 21H18.5726C19.326 21 19.7027 21 19.9745 20.7867C20.1845 20.6219 20.3521 20.2852 20.357 20.0183C20.3633 19.6728 20.1701 19.4172 19.7839 18.906C17.9891 16.5306 15.1699 15 11.9999 15Z"
                                            stroke="#090446" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                        <path
                                            d="M11.9999 12C14.4851 12 16.4999 9.98528 16.4999 7.5C16.4999 5.01472 14.4851 3 11.9999 3C9.51457 3 7.49985 5.01472 7.49985 7.5C7.49985 9.98528 9.51457 12 11.9999 12Z"
                                            stroke="#090446" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="font-bold rounded-lg text-center">Leader: </span>
                                <span class="m-1">{{ workshopUpdate.instructor }}</span>
                            </p>
                            <p class="flex flex-row items-center">
                                <span class="mr-1">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                            stroke="#090446" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="font-bold rounded-lg text-center">Time:
                                </span>
                                <span class="m-1">{{ workshopUpdate.total_hours }} Hour(s)</span>
                            </p>
                            <p class="flex flex-row items-center">
                                <span class="mr-1">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                                            stroke="#090446" stroke-width="2" stroke-linecap="round"
                                            stroke-linejoin="round" />
                                    </svg>
                                </span>
                                <span class="font-bold">Date: </span>
                                <span class="m-1">{{ workshopUpdate.date | timeStampToDateOnly }} {{workshopUpdate.date | timeStampToTimeOnly}}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="space-y-2 px-8">
        <div class="mt-4 mb-2">
            <p class="font-bold text-[24px] tracking-tight">
                <span class="text-[#090446]">Additional Information</span>
            </p>
        </div>

        <div class="row mt-3" v-html="workshopUpdate.additional_info">
      </div>
    </div>

    <div class="space-y-2 px-8 pb-4">
        <div class="mt-6 mb-2">
            <p class="font-bold text-[24px] tracking-tight">
                <span class="text-[#090446]">Registered Employees</span>
            </p>
        </div>
        <div class="relative overflow-x-auto shadow-md rounded-lg">
            <table class="w-full text-sm text-center text-white">
                <thead class="text-xs text-white bg-[#0A0446]">
                    <tr>
                        <th scope="col" class="px-6 py-4 border border-gray-700">
                            Employee Name
                        </th>
                        <th scope="col" class="px-6 py-4 border border-gray-700">
                            Company Name
                        </th>
                    </tr>
                </thead>
                <tbody class="text-[#090446]">
                    <tr class="bg-white hover:bg-gray-50" v-if="workshopUpdateUserList.length" v-for="r in workshopUpdateUserList" v-bind:key="r.id">
                        <td scope="row" class="px-6 py-4 border border-gray-300 font-medium whitespace-nowrap"  >
                            {{ r.first_name }} {{ r.last_name }}
                        </td>
                        <td class="px-6 py-4 border border-gray-300">
                            {{ r.company_name }}
                        </td>
                    </tr>
                    <tr class="bg-white hover:bg-gray-50"  v-if="!workshopUpdateUserList.length">
                        <td colspan="2">No Data Found</td>
                    </tr>
                </tbody>
            </table>
            
            <!--<nav class="py-2 px-6 border border-gray-300" aria-label="Table navigation">
                <div class="flex items-center justify-between">
                    <span class="text-sm font-normal text-gray-500">Showing <span
                            class="font-semibold text-gray-900">1-10</span> of <span
                            class="font-semibold text-gray-900">1000</span></span>
                    <ul class="inline-flex items-center space-x-1">
                        <li>
                            <a href="#"
                                class="block px-2 py-1 ml-0 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">
                                <span class="sr-only">Previous</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-2 py-1 leading-tight text-white rounded-md bg-[#0A0446] hover:bg-[#0A0446] border border-gray-300 hover:text-white">1</a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-2 py-1 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">2</a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-2 py-1 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">3</a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-2 py-1 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">4</a>
                        </li>
                        <li>
                            <a href="#"
                                class="px-2 py-1 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">5</a>
                        </li>
                        <li>
                            <a href="#"
                                class="block px-2 py-1 leading-tight text-black rounded-md bg-[#F2F2F2] hover:bg-[#0A0446] border border-gray-300 hover:text-white">
                                <span class="sr-only">Next</span>
                                <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fill-rule="evenodd"
                                        d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                                        clip-rule="evenodd"></path>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>-->
        </div>
    </div>
</section>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'
import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';
import { Vue2TinymceEditor } from "vue2-tinymce-editor";

export default {
  name: 'WorkshopConfiguration',
  mixins: [AppMixin],
  components: {
    Vue2TinymceEditor, DatePicker
  },
  data() {
    return {

    }
  },
  methods: {

  },
  mounted() {
    this.getWorkshop(this.$route.params.id)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

</style>
