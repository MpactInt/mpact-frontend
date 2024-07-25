<template>
<div>
    <div class="py-6 flex justify-between px-8">
        <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
            <span class="text-[#090446]">Resources</span>
        </p>

        <form class="flex items-center" v-if="user.role == 'COMPANY' && company.role=='COMPANY_EMP'">
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
                <input type="text" id="simple-search" class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required v-model="getResourceData.keyword" v-on:keyup="getResourcesList">
            </div>
        </form>
    </div>

    <div class="space-y-2 px-8" v-if="user.role == 'COMPANY' && company.role=='COMPANY_EMP'">
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

              <!-- card-1 start -->
              <div class="max-w-full p-2 bg-white border border-gray-200 rounded-[15px] shadow text-[#0A0446] my-4" v-if="resourcesLength" v-for="r in resourcesList.data" v-bind:key="r.id">
                  <div class="">
                      <a class="" href="#">
                          <img class="object-cover rounded-[15px]"
                              src="../../../assets/images/logo25dpi.png"
                              alt="product image" />
                      </a>
                  </div>

                  <div class="px-2 py-4">
                      <a href="#">
                          <p class="font-bold text-[16px] tracking-tight">
                              <span class="text-[#BE0858]">{{ r.title }}</span>
                          </p>
                      </a>

                      <p class="text-sm  text-gray-500 leading-6 py-2">
                          {{ r.description }}
                          <a href="#" class="font-medium text-[#BE0858]">See More...</a>
                      </p>


                  </div>

                  <div class="my-4 rounded">
                      <button
                          class="flex items-center font-sixe-[20px] px-8 py-2 mx-auto rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="r.file" @click="downloadFile(r.id, r.file)">
                          Download File
                          <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="white" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </button>
                  </div>
              </div>
              <!-- card-1 end -->

          </div>

          <div class="text-end py-6">
              <pagination :data="resourcesList" @pagination-change-page="getResourcesList" />
          </div>
    </div>

    <div class="w-full flex md:flex-wrap justify-between px-8" v-if="user.role == 'COMPANY' && company.role=='COMPANY_ADMIN'">
        <div class="flex md:flex-wrap md:w-full justify-between py-3">
            
            <div class="m-2 flex justify-between space-x-2 space-y-1">
                <form>
                    <label for="simple-search" class="sr-only">SearchSDF</label>
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
                            placeholder="Search" required v-model="getResourceData.keyword" v-on:keyup="getResourcesList">
                    </div>
                </form>
            </div>

            <button  data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" class="m-2 flex py-2 space-x-2 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg" v-b-modal.add-resource-modal> 
                <svg class="h-5 pl-3" xmlns="http://www.w3.org/2000/svg" version="1.1" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:svgjs="http://svgjs.com/svgjs"  x="0" y="0" viewBox="0 0 512 512" style="enable-background:new 0 0 512 512" xml:space="preserve"><g><path d="M256 0C114.833 0 0 114.833 0 256s114.833 256 256 256 256-114.853 256-256S397.167 0 256 0zm0 472.341c-119.275 0-216.341-97.046-216.341-216.341S136.725 39.659 256 39.659 472.341 136.705 472.341 256 375.295 472.341 256 472.341z" fill="#2c3e50" data-original="#000000" opacity="1"></path><path d="M355.148 234.386H275.83v-79.318c0-10.946-8.864-19.83-19.83-19.83s-19.83 8.884-19.83 19.83v79.318h-79.318c-10.966 0-19.83 8.884-19.83 19.83s8.864 19.83 19.83 19.83h79.318v79.318c0 10.946 8.864 19.83 19.83 19.83s19.83-8.884 19.83-19.83v-79.318h79.318c10.966 0 19.83-8.884 19.83-19.83s-8.864-19.83-19.83-19.83z" fill="#2c3e50" data-original="#000000"  opacity="1"></path></g></svg>
                <span class="pr-3">Add New Resource</span>
            </button>
        </div>
    </div>

    <!-- card-10 stat -->
    <div class="w-full px-8" v-if="user.role == 'COMPANY' && company.role=='COMPANY_ADMIN'">
        <!-- card-8 stat -->
        <div class="flex p-[20px] space-x-4 border border-1 border-gray-100 rounded-[18px] my-4 bg-white" v-if="resourcesLength" v-for="r in resourcesList.data" v-bind:key="r.id">
            <div class="flex items-center space-x-4 w-full">
                <div class="flex-shrink-0">
                    <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="26" cy="26" r="26" fill="#0A0446" />
                        <g clip-path="url(#clip0_0_1)">
                            <path
                                d="M18.4375 19.25C18.5121 19.25 18.5836 19.2204 18.6364 19.1676C18.6891 19.1149 18.7188 19.0433 18.7188 18.9688V18.875C18.7188 18.8004 18.6891 18.7289 18.6364 18.6761C18.5836 18.6234 18.5121 18.5938 18.4375 18.5938C18.3629 18.5938 18.2914 18.6234 18.2386 18.6761C18.1859 18.7289 18.1562 18.8004 18.1562 18.875V18.9688C18.1562 19.0433 18.1859 19.1149 18.2386 19.1676C18.2914 19.2204 18.3629 19.25 18.4375 19.25Z"
                                fill="white" />
                            <path
                                d="M18.1562 24.2188C18.1562 24.2933 18.1859 24.3649 18.2386 24.4176C18.2914 24.4704 18.3629 24.5 18.4375 24.5C18.5121 24.5 18.5836 24.4704 18.6364 24.4176C18.6891 24.3649 18.7188 24.2933 18.7188 24.2188V19.9062C18.7188 19.8317 18.6891 19.7601 18.6364 19.7074C18.5836 19.6546 18.5121 19.625 18.4375 19.625C18.3629 19.625 18.2914 19.6546 18.2386 19.7074C18.1859 19.7601 18.1562 19.8317 18.1562 19.9062V24.2188Z"
                                fill="white" />
                            <path
                                d="M19.6094 29.6125C19.6094 29.7679 19.7577 29.8906 19.913 29.8906H22.938C22.9748 29.891 23.0112 29.884 23.0452 29.8702C23.0793 29.8564 23.1103 29.8359 23.1364 29.8101C23.1625 29.7842 23.1832 29.7535 23.1973 29.7195C23.2115 29.6856 23.2187 29.6493 23.2188 29.6125V29.1146C23.2188 29.04 23.1891 28.9684 23.1364 28.9157C23.0836 28.8629 23.0121 28.8333 22.9375 28.8333C22.8629 28.8333 22.7914 28.8629 22.7386 28.9157C22.6859 28.9684 22.6562 29.04 22.6562 29.1146V29.3281H20.1719V26.8906H22.4099C22.4845 26.8906 22.556 26.861 22.6087 26.8082C22.6615 26.7555 22.6911 26.684 22.6911 26.6094C22.6911 26.5348 22.6615 26.4632 22.6087 26.4105C22.556 26.3578 22.4845 26.3281 22.4099 26.3281H19.913C19.7577 26.3281 19.6094 26.4322 19.6094 26.5875V29.6125Z"
                                fill="white" />
                            <path
                                d="M23.0194 27.1419L21.8967 28.0833L21.513 27.6996C21.4869 27.6732 21.4559 27.6521 21.4217 27.6377C21.3875 27.6233 21.3507 27.6158 21.3136 27.6157C21.2765 27.6155 21.2397 27.6227 21.2054 27.6369C21.171 27.651 21.1399 27.6718 21.1136 27.6981C21.0874 27.7243 21.0666 27.7555 21.0524 27.7899C21.0383 27.8242 21.0311 27.861 21.0313 27.8981C21.0314 27.9352 21.0389 27.972 21.0533 28.0062C21.0678 28.0404 21.0888 28.0714 21.1153 28.0974L21.6811 28.6633C21.7308 28.713 21.7974 28.7423 21.8677 28.7454C21.938 28.7485 22.0068 28.7251 22.0607 28.6799L23.381 27.573C23.4382 27.5251 23.474 27.4564 23.4806 27.3821C23.4871 27.3078 23.4639 27.2339 23.416 27.1767C23.3681 27.1195 23.2994 27.0837 23.2251 27.0771C23.1507 27.0706 23.0769 27.0938 23.0197 27.1417L23.0194 27.1419Z"
                                fill="white" />
                            <path
                                d="M24.6973 27.6875H28.8897C28.9643 27.6875 29.0358 27.6579 29.0886 27.6051C29.1413 27.5524 29.171 27.4808 29.171 27.4062C29.171 27.3317 29.1413 27.2601 29.0886 27.2074C29.0358 27.1546 28.9643 27.125 28.8897 27.125H24.6973C24.6227 27.125 24.5511 27.1546 24.4984 27.2074C24.4456 27.2601 24.416 27.3317 24.416 27.4062C24.416 27.4808 24.4456 27.5524 24.4984 27.6051C24.5511 27.6579 24.6227 27.6875 24.6973 27.6875Z"
                                fill="white" />
                            <path
                                d="M24.6973 29.0469H31.0545C31.1291 29.0469 31.2007 29.0172 31.2534 28.9645C31.3062 28.9118 31.3358 28.8402 31.3358 28.7656C31.3358 28.691 31.3062 28.6195 31.2534 28.5668C31.2007 28.514 31.1291 28.4844 31.0545 28.4844H24.6973C24.6227 28.4844 24.5511 28.514 24.4984 28.5668C24.4456 28.6195 24.416 28.691 24.416 28.7656C24.416 28.8402 24.4456 28.9118 24.4984 28.9645C24.5511 29.0172 24.6227 29.0469 24.6973 29.0469Z"
                                fill="white" />
                            <path
                                d="M19.6094 35C19.6094 35.0746 19.639 35.1461 19.6918 35.1989C19.7445 35.2516 19.816 35.2812 19.8906 35.2812H22.9375C23.0121 35.2812 23.0836 35.2516 23.1364 35.1989C23.1891 35.1461 23.2188 35.0746 23.2188 35V31.9531C23.2188 31.8785 23.1891 31.807 23.1364 31.7543C23.0836 31.7015 23.0121 31.6719 22.9375 31.6719H19.8906C19.816 31.6719 19.7445 31.7015 19.6918 31.7543C19.639 31.807 19.6094 31.8785 19.6094 31.9531V35ZM20.1719 32.2344H22.6562V34.7188H20.1719V32.2344Z"
                                fill="white" />
                            <path
                                d="M24.6973 33.0781H28.8897C28.9643 33.0781 29.0358 33.0485 29.0886 32.9957C29.1413 32.943 29.171 32.8715 29.171 32.7969C29.171 32.7223 29.1413 32.6507 29.0886 32.598C29.0358 32.5453 28.9643 32.5156 28.8897 32.5156H24.6973C24.6227 32.5156 24.5511 32.5453 24.4984 32.598C24.4456 32.6507 24.416 32.7223 24.416 32.7969C24.416 32.8715 24.4456 32.943 24.4984 32.9957C24.5511 33.0485 24.6227 33.0781 24.6973 33.0781Z"
                                fill="white" />
                            <path
                                d="M22.4099 20.9844H19.913C19.8341 20.9879 19.7594 21.0206 19.7033 21.0761C19.6471 21.1317 19.6137 21.2061 19.6094 21.2849V24.31C19.6094 24.4653 19.7577 24.5938 19.913 24.5938H22.938C23.0128 24.5931 23.0843 24.563 23.1369 24.5098C23.1895 24.4566 23.219 24.3848 23.2188 24.31V23.812C23.2188 23.7374 23.1891 23.6658 23.1364 23.6131C23.0836 23.5604 23.0121 23.5307 22.9375 23.5307C22.8629 23.5307 22.7914 23.5604 22.7386 23.6131C22.6859 23.6658 22.6562 23.7374 22.6562 23.812V24.0312H20.1719V21.5469H22.4099C22.4845 21.5469 22.556 21.5172 22.6087 21.4645C22.6615 21.4118 22.6911 21.3402 22.6911 21.2656C22.6911 21.191 22.6615 21.1195 22.6087 21.0668C22.556 21.014 22.4845 20.9844 22.4099 20.9844Z"
                                fill="white" />
                            <path
                                d="M23.416 21.8742C23.3681 21.8171 23.2994 21.7813 23.2251 21.7748C23.1508 21.7682 23.077 21.7915 23.0198 21.8394L21.8972 22.7808L21.5135 22.3971C21.4605 22.3456 21.3894 22.3169 21.3155 22.3174C21.2415 22.3179 21.1708 22.3475 21.1185 22.3998C21.0662 22.4521 21.0366 22.5229 21.0361 22.5968C21.0356 22.6707 21.0643 22.7419 21.1158 22.7948L21.6816 23.3609C21.7314 23.4107 21.7979 23.44 21.8682 23.4431C21.9385 23.4462 22.0074 23.4228 22.0613 23.3776L23.3816 22.2707C23.4099 22.2469 23.4332 22.2178 23.4503 22.185C23.4673 22.1522 23.4778 22.1164 23.481 22.0796C23.4842 22.0428 23.4801 22.0057 23.4689 21.9704C23.4578 21.9352 23.4398 21.9025 23.416 21.8742Z"
                                fill="white" />
                            <path
                                d="M24.6973 22.3906H28.8897C28.9643 22.3906 29.0358 22.361 29.0886 22.3082C29.1413 22.2555 29.171 22.184 29.171 22.1094C29.171 22.0348 29.1413 21.9632 29.0886 21.9105C29.0358 21.8578 28.9643 21.8281 28.8897 21.8281H24.6973C24.6227 21.8281 24.5511 21.8578 24.4984 21.9105C24.4456 21.9632 24.416 22.0348 24.416 22.1094C24.416 22.184 24.4456 22.2555 24.4984 22.3082C24.5511 22.361 24.6227 22.3906 24.6973 22.3906Z"
                                fill="white" />
                            <path
                                d="M24.6973 23.75H31.0545C31.1291 23.75 31.2007 23.7204 31.2534 23.6676C31.3062 23.6149 31.3358 23.5433 31.3358 23.4688C31.3358 23.3942 31.3062 23.3226 31.2534 23.2699C31.2007 23.2171 31.1291 23.1875 31.0545 23.1875H24.6973C24.6227 23.1875 24.5511 23.2171 24.4984 23.2699C24.4456 23.3226 24.416 23.3942 24.416 23.4688C24.416 23.5433 24.4456 23.6149 24.4984 23.6676C24.5511 23.7204 24.6227 23.75 24.6973 23.75Z"
                                fill="white" />
                            <path
                                d="M36.2011 25.775L34.1406 27.8328V18.3922C34.1399 18.1713 34.0956 17.9527 34.0103 17.7489C33.9249 17.5452 33.8002 17.3603 33.6433 17.2048C33.4863 17.0494 33.3002 16.9264 33.0957 16.843C32.8911 16.7596 32.6721 16.7173 32.4513 16.7187H31.9844V15.984C31.9844 15.524 31.8016 15.0829 31.4764 14.7576C31.1511 14.4324 30.71 14.2496 30.25 14.2496C29.79 14.2496 29.3489 14.4324 29.0236 14.7576C28.6984 15.0829 28.5156 15.524 28.5156 15.984V16.7187H22.4219V15.9578C22.4219 15.4978 22.2391 15.0566 21.9139 14.7314C21.5886 14.4061 21.1475 14.2234 20.6875 14.2234C20.2275 14.2234 19.7864 14.4061 19.4611 14.7314C19.1359 15.0566 18.9531 15.4978 18.9531 15.9578V16.7187H18.5163C18.0727 16.7187 17.6473 16.8949 17.3336 17.2086C17.02 17.5223 16.8438 17.9477 16.8438 18.3912V20C16.8438 20.0746 16.8734 20.1461 16.9261 20.1989C16.9789 20.2516 17.0504 20.2812 17.125 20.2812C17.1996 20.2812 17.2711 20.2516 17.3239 20.1989C17.3766 20.1461 17.4062 20.0746 17.4062 20V18.3922C17.4062 18.0975 17.5233 17.815 17.7316 17.6066C17.94 17.3983 18.2225 17.2812 18.5172 17.2812H18.9531V18.1979C18.9539 18.2754 18.984 18.3497 19.0375 18.4058C19.0909 18.4618 19.1637 18.4955 19.2411 18.5H22.1254C22.2037 18.4959 22.2775 18.4626 22.3324 18.4066C22.3873 18.3507 22.4192 18.2762 22.4219 18.1979V17.2812H28.5156V18.1979C28.5156 18.3532 28.6343 18.5 28.7897 18.5H31.7266C31.8819 18.5 31.9844 18.3532 31.9844 18.1979V17.2812H32.4513C32.5983 17.2797 32.7442 17.3074 32.8806 17.3625C33.0169 17.4176 33.141 17.4991 33.2457 17.6023C33.3505 17.7056 33.4337 17.8285 33.4908 17.9641C33.5478 18.0996 33.5775 18.2451 33.5781 18.3922V28.3941L29.6031 32.3606C29.5739 32.3897 29.5513 32.4247 29.537 32.4634L29.0227 33.875H24.6972C24.6226 33.875 24.5511 33.9046 24.4984 33.9574C24.4456 34.0101 24.416 34.0816 24.416 34.1562C24.416 34.2308 24.4456 34.3024 24.4984 34.3551C24.5511 34.4079 24.6226 34.4375 24.6972 34.4375H28.8175L28.346 35.7312C28.3277 35.7815 28.3242 35.836 28.3357 35.8883C28.3473 35.9405 28.3736 35.9884 28.4114 36.0263C28.4493 36.0641 28.4971 36.0904 28.5494 36.102C28.6016 36.1136 28.6561 36.11 28.7064 36.0917L31.9741 34.9011C32.0127 34.887 32.0478 34.8646 32.0768 34.8355L33.5781 33.3312V36.0781C33.5781 36.3765 33.4596 36.6626 33.2486 36.8736C33.0376 37.0846 32.7515 37.2031 32.4531 37.2031H18.5163C18.2219 37.2031 17.9395 37.0862 17.7314 36.878C17.5232 36.6698 17.4062 36.3875 17.4062 36.0931V21.9687C17.4062 21.8941 17.3766 21.8226 17.3239 21.7699C17.2711 21.7171 17.1996 21.6875 17.125 21.6875C17.0504 21.6875 16.9789 21.7171 16.9261 21.7699C16.8734 21.8226 16.8438 21.8941 16.8438 21.9687V36.0931C16.8438 36.5367 17.02 36.9621 17.3336 37.2757C17.6473 37.5894 18.0727 37.7656 18.5163 37.7656H32.4513C32.8989 37.7643 33.3278 37.5859 33.6444 37.2694C33.9609 36.9528 34.1393 36.5239 34.1406 36.0762V32.7677L38.6625 28.2374C38.989 27.911 39.1725 27.4683 39.1726 27.0066C39.1727 26.5449 38.9894 26.1021 38.663 25.7755C38.3366 25.449 37.8938 25.2655 37.4321 25.2654C36.9705 25.2654 36.5276 25.4487 36.2011 25.7751V25.775ZM21.8594 17.9375H19.5156V15.9578C19.5156 15.647 19.6391 15.3489 19.8589 15.1291C20.0786 14.9094 20.3767 14.7859 20.6875 14.7859C20.9983 14.7859 21.2964 14.9094 21.5161 15.1291C21.7359 15.3489 21.8594 15.647 21.8594 15.9578V17.9375ZM31.4219 17.9375H29.0781V15.984C29.0781 15.6732 29.2016 15.3751 29.4214 15.1554C29.6411 14.9356 29.9392 14.8121 30.25 14.8121C30.5608 14.8121 30.8589 14.9356 31.0786 15.1554C31.2984 15.3751 31.4219 15.6732 31.4219 15.984V17.9375ZM35.4403 27.3282L36.0832 27.9712L30.8467 33.2077L30.1989 32.5599L35.4403 27.3282ZM29.0811 35.3562L29.3217 34.6961L29.7412 35.1157L29.0811 35.3562ZM30.3243 34.9032L29.5342 34.1132L29.9142 33.0704L31.367 34.5232L30.3243 34.9032ZM31.8777 34.2384L31.2445 33.6052L36.481 28.3689L37.1091 28.9973L31.8777 34.2384ZM38.2644 27.84L37.5067 28.5992L35.8384 26.9309L36.5975 26.1734C36.8189 25.9541 37.1181 25.8314 37.4298 25.8321C37.7414 25.8329 38.0401 25.957 38.2604 26.1774C38.4808 26.3977 38.6049 26.6964 38.6056 27.008C38.6064 27.3196 38.4837 27.6189 38.2644 27.8403L38.2644 27.84Z"
                                fill="white" />
                        </g>
                        <defs>
                            <clipPath id="clip0_0_1">
                                <rect width="24" height="24" fill="white"
                                    transform="translate(16 14)" />
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div class="flex-1 min-w-0">
                    <div class="flex flex-wrap justify-between items-center">
                        <div>
                            <h2 class="font-bold tracking-tight">
                                <span class="text-[#BE0858]">{{ r.title }}</span> 
                            </h2>
                        </div>
                        <div class="inline-flex space-x-4 items-center">
                            <button data-modal-target="authentication-modal" data-modal-toggle="authentication-modal" v-b-modal.update-resource-modal @click="getResource(r.id)">
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M11 4.00023H6.8C5.11984 4.00023 4.27976 4.00023 3.63803 4.32721C3.07354 4.61483 2.6146 5.07377 2.32698 5.63826C2 6.27999 2 7.12007 2 8.80023V17.2002C2 18.8804 2 19.7205 2.32698 20.3622C2.6146 20.9267 3.07354 21.3856 3.63803 21.6732C4.27976 22.0002 5.11984 22.0002 6.8 22.0002H15.2C16.8802 22.0002 17.7202 22.0002 18.362 21.6732C18.9265 21.3856 19.3854 20.9267 19.673 20.3622C20 19.7205 20 18.8804 20 17.2002V13.0002M7.99997 16.0002H9.67452C10.1637 16.0002 10.4083 16.0002 10.6385 15.945C10.8425 15.896 11.0376 15.8152 11.2166 15.7055C11.4184 15.5818 11.5914 15.4089 11.9373 15.063L21.5 5.50023C22.3284 4.6718 22.3284 3.32865 21.5 2.50023C20.6716 1.6718 19.3284 1.6718 18.5 2.50022L8.93723 12.063C8.59133 12.4089 8.41838 12.5818 8.29469 12.7837C8.18504 12.9626 8.10423 13.1577 8.05523 13.3618C7.99997 13.5919 7.99997 13.8365 7.99997 14.3257V16.0002Z"
                                        stroke="#2C3E50" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>
                            </button>
                            <button @click="deleteResource(r.id)">
                                <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M16 6V5.2C16 4.0799 16 3.51984 15.782 3.09202C15.5903 2.71569 15.2843 2.40973 14.908 2.21799C14.4802 2 13.9201 2 12.8 2H11.2C10.0799 2 9.51984 2 9.09202 2.21799C8.71569 2.40973 8.40973 2.71569 8.21799 3.09202C8 3.51984 8 4.0799 8 5.2V6M10 11.5V16.5M14 11.5V16.5M3 6H21M19 6V17.2C19 18.8802 19 19.7202 18.673 20.362C18.3854 20.9265 17.9265 21.3854 17.362 21.673C16.7202 22 15.8802 22 14.2 22H9.8C8.11984 22 7.27976 22 6.63803 21.673C6.07354 21.3854 5.6146 20.9265 5.32698 20.362C5 19.7202 5 18.8802 5 17.2V6"
                                        stroke="#2C3E50" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" />
                                </svg>

                            </button>
                        </div>
                    </div>

                    <p class="text-sm text-justify text-gray-500">{{ r.description }}</p>
                    <p class="inline-flex my-2" v-if="r.link">
                        <span>Resource :</span>
                        <a :href="r.link" target="_blank"><span class="ml-1">{{r.link}}</span></a>
                    </p>

                    <div class="my-4 rounded">
                      <button
                          class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="r.file" @click="downloadFile(r.id, r.file)">
                          Download File
                          <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                              xmlns="http://www.w3.org/2000/svg">
                              <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="white" stroke-width="1.5"
                                  stroke-linecap="round" stroke-linejoin="round" />
                          </svg>
                      </button>
                  </div>
                </div>
            </div>
        </div>
        <!-- card-8 end -->

        <div class="text-end py-6">
            <pagination :data="resourcesList" @pagination-change-page="getResourcesList" />
        </div>
    </div>
    <!-- card-10 end -->

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
                            placeholder="Search" required v-model="getResourceData.keyword" v-on:keyup="getResourcesList">
                    </div>
                </form>


                <div class="flex flex-row space-x-1">
                    <button
                        class="flex items-center font-sixe-[20px] px-8 py-2 rounded-md bg-[#0A0446] text-white text-center text-md shadow" v-b-modal.add-resource-modal>

                        <svg class="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M12 8V16M8 12H16M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z"
                                stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>
                        <span class="flex-1 text-white ml-3 whitespace-nowrap">Add New Resource</span>
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
                                Link
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                File
                            </th>
                            <th scope="col" class="px-6 py-4 border-r border-gray-700">
                                Visibility
                            </th>
                            <th scope="col" class="px-6 py-4 rounded-tr-lg">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody class="text-[#090446]">
                        <tr class="bg-white hover:bg-gray-50"  v-if="resourcesLength" v-for="r in resourcesList.data" v-bind:key="r.id">
                            <td scope="row" lass="px-6 py-4 border-r border-gray-300 font-medium whitespace-nowrap">
                                {{ r.title }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.description }}
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span v-if="r.link">{{ r.link }}</span><span v-if="!r.link">NA</span>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                <span v-if="r.file"><a class="link" href="javascript:void(0)" @click="downloadFile(r.id, r.file)">Download</a></span><span v-if="!r.file">NA</span>
                            </td>
                            <td class="px-6 py-4 border-r border-gray-300">
                                {{ r.visibility }}
                            </td>
                            <td
                                class="px-6 py-4 border-r border-gray-300 flex items-center justify-around space-x-2 px-1 border-r border-gray-300">
                                <button
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md font-medium shadow border-2" v-b-modal.update-resource-modal @click="getResource(r.id)">
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
                                    class="flex items-center px-3 py-1 rounded-md bg-white text-black text-center text-md shadow border-2" @click="deleteResource(r.id)">
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
                        <tr class="bg-white hover:bg-gray-50" v-if="!resourcesLength">
                          <td colspan="7">No Data Found</td>
                        </tr>
                    </tbody>
                </table>
                <pagination :data="resourcesList" @pagination-change-page="getResourcesList" />
            </div>
        </div>
    </div>
    <!-- card-10 end -->

    <!--Add resource modal popup-->
    <Add :getResourcesList="getResourcesList"></Add>
    <!--Update resource modal popup-->
    <Edit :getResourcesList="getResourcesList" :resourceUpdate="resourceUpdate"></Edit>

</div>
</template>
<style src="vue-multiselect/dist/vue-multiselect.min.css">

</style>
<script>
/* eslint-disable */
import AppMixin from '../../../mixins/AppMixin'
import Api from '../../../router/api'
import Add from '../resources/Add.vue'
import Edit from '../resources/Edit.vue'

export default {
  name: 'List',
  mixins: [AppMixin],
  components: { Add, Edit },
  data() {
    return {
      resourcesList: {},
      resourcesLength: 0,
      getResourceData: {
        'sortBy': '',
        'keyword': '',
        'sortOrder': ''
      },
      filePath: '',
      resourceUpdate: {
        'id': '',
        'link': '',
        'company': '',
        'title': '',
        'description': '',
        'file': '',
        'visibility': '',
        'showFile': '',
        'disabled': false,
      },
    }
  },
  methods: {
    getResourcesList: function (page = 1) {
      let that = this
      Api.getResourcesList(page, that.getResourceData).then(response => {
        let that = this
        that.resourcesList = response.data.res
        that.resourcesLength = that.resourcesList.data.length
      }
      ).catch((error) => {
        this.$swal({
          icon: 'error',
          title: 'error',
          text: error.response.data.message,
          showConfirmButton: true
        })
      })
    },
    downloadFile: function (id, name) {
      Api.downloadFile(id)
        .then(response => {
          let blob = new Blob([response.data])
          let link = document.createElement('a')
          link.href = window.URL.createObjectURL(blob)
          link.download = name
          link.click()
        }
        ).catch((error) => {
          this.$swal({
            icon: 'error',
            title: 'error',
            text: error.response.data.message,
            showConfirmButton: true
          })
        })
    },
    deleteResource: function (id) {
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
          Api.deleteResource(id).then(response => {
            this.$swal({
              icon: 'success',
              title: 'success',
              text: 'Deleted Successfully',
              showConfirmButton: true
            }).then(() => {
              that.getResourcesList()
            })
          }
          ).catch((error) => {
            this.$swal({
              icon: 'error',
              title: 'error',
              text: error.response.data.message,
              showConfirmButton: true
            })
          })
        }
      })
    },
    getResource: function (id) {
      let that = this
      Api.getResource(id).then(response => { 
        // that.$bvModal.show('update-resource-modal')
        that.resourceUpdate.id = response.data.res.id
        that.resourceUpdate.title = response.data.res.title
        that.resourceUpdate.description = response.data.res.description
        that.resourceUpdate.link = response.data.res.link == null ? '' : response.data.res.link
        that.resourceUpdate.showFile = response.data.res.file
        that.resourceUpdate.visibility = response.data.res.visibility
        that.resourceUpdate.company = response.data.res.company
        that.filePath = response.data.path
      })
    },
  },
  mounted() {
    this.getResourcesList()
    this.getCompaniesList()
  }
}
</script>
