<template>
<div>
  <div class="grid grid-cols-4 space-x-2 h-50 px-8">
      <div class="col-span-3 my-2">
          <figure class="relative">
              <a href="#">
                  <img class="object-cover rounded-[15px] w-[100%] h-[25rem]"
                      src="https://motivationalspeakersagency.co.uk/sites/default/files/2018-11/speaker.jpg"
                      alt="product image" />
              </a>
          </figure>
      </div>

      <!-- card-1 stat -->
        <div class="max-w-sm bg-white border border-gray-200 rounded-lg shadow text-[#0A0446] my-2">
            <UpcomingWorkshops :timeStampToDateOnly="timeStampToDateOnly" :filePath="filePath" :upcomingWorkshop="upcomingWorkshop" :currentUrl="currentUrl" :upcomingWorkshopLength="upcomingWorkshopLength" @registerForWorkshop="registerForWorkshop"/>
        </div>
      <!-- card-1 end -->
  </div>

  <div class="my-6 w-full px-8">
      <p class="text-[46px] text-gray-400 dark:text-gray-500 uppercase font-bold">
          <span class="text-[#090446]">WORKSHOPS LISTING</span>
      </p>
  </div>

  <div class="space-y-2 space-x-2">
    <!-- card-7 stat -->
    <div class="grid grid-cols-4 p-[20px] space-x-4 bg-[#F2F2F2] rounded-[18px]" v-if="workshopsLength" v-for="w in workshopsList.data" v-bind:key="w.id">
        <div class="col-span-3">
            <router-link :to="'/employee/workshop/' + w.id">
                <img class="object-cover rounded-[15px] w-[100%] h-[25rem]"
                    :src="filePath + '/' + w.image" alt="product image" />
            </router-link>
        </div>
        <div class=" rounded-lg text-[#0A0446]">
            <div class="px-2 pb-4">
                <router-link :to="'/employee/workshop/' + w.id">
                    <p class="font-bold text-[24px] tracking-tight">
                        <span class="text-[#BE0858]">{{ w.title }}</span>
                    </p>
                </router-link>

                <p class="text-sm text-justify text-gray-500 leading-6 py-2">{{ w.description }}</p>

                <div class="flex flex-col py-1">
                    <p class="inline-flex my-2">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M11.9999 15C8.82977 15 6.01065 16.5306 4.21585 18.906C3.82956 19.4172 3.63641 19.6728 3.64273 20.0183C3.64761 20.2852 3.81521 20.6219 4.02522 20.7867C4.29704 21 4.67372 21 5.42708 21H18.5726C19.326 21 19.7027 21 19.9745 20.7867C20.1845 20.6219 20.3521 20.2852 20.357 20.0183C20.3633 19.6728 20.1701 19.4172 19.7839 18.906C17.9891 16.5306 15.1699 15 11.9999 15Z"
                                stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                            <path
                                d="M11.9999 12C14.4851 12 16.4999 9.98528 16.4999 7.5C16.4999 5.01472 14.4851 3 11.9999 3C9.51457 3 7.49985 5.01472 7.49985 7.5C7.49985 9.98528 9.51457 12 11.9999 12Z"
                                stroke="black" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" />
                        </svg>

                        </span>
                        <span class="font-medium rounded-lg text-center">Leader:&nbsp;</span>
                        <span class="font-bold">{{ w.instructor }}</span>

                    </p>
                    <p class="inline-flex my-2">
                        <span class="mr-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M12 6V12L16 14M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                    stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span class="font-medium rounded-lg text-center">Time:&nbsp;</span>
                        <span class="font-bold">{{ w.total_hours }} Hour(s)</span>
                    </p>
                    <p class="inline-flex my-2">
                        <span class="mr-1">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                                    stroke="black" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round" />
                            </svg>
                        </span>
                        <span>Date:&nbsp;</span>
                        <span class="font-bold">{{ w.date | timeStampToDateOnly }} {{w.date | timeStampToTimeOnly}}</span>
                    </p>
                </div>
            </div>
            <div class="rounded">
                <button
                    class="flex items-center font-sixe-[20px] px-12 py-2 mx-0 rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="!w.registered" @click="registerForWorkshop(w.id)">
                    Register Now
                    <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        xmlns="http://www.w3.org/2000/svg">
                        <path d="M5 12L19 12M19 12L12 5M19 12L12 19" stroke="white" stroke-width="1.5"
                            stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>
                <button
                    class="flex items-center font-sixe-[20px] px-12 py-2 mx-0 rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="w.registered">
                    Registered
                </button>
            </div>
        </div>
    </div>
    <!-- card-7 end -->

    <div class="grid grid-cols-4">
        <div class="md:col-span-1 lg:col-span-2"></div>
        <div>
            <pagination :data="workshopsList" @pagination-change-page="getWorkshopsList" />
        </div>
    </div>
  </div>
</div>
        
</template>

<script>
/* eslint-disable */
import AppMixin from "../../mixins/AppMixin";
import Api from "../../router/api";
import CustomSurvey from "./CustomSurvey.vue";
import UpcomingWorkshops from "./dashboard/sidebar/UpcomingWorkshops.vue";

export default {
  name: "Workshops",
  mixins: [AppMixin],
  components: { CustomSurvey, UpcomingWorkshops },
  data() {
    return {
        timeStampToDateOnly: '',
        currentUrl: '',
    };
  },
  methods: {
    registerForWorkshop: function(id) {
      let that = this;
      Api.registerForWorkshop(id).then(response => {
        this.$swal({
          icon: "success",
          title: "Success",
          text: "You have successfully registered for workshop",
          showConfirmButton: true
        });
        this.getWorkshopsList();
        this.getUpcomingWorkshop();
      });
    }
  },
  created() {
    this.getWorkshopsList();
    this.getUpcomingWorkshop();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
