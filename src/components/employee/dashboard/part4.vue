<template>
  
    <div class="rounded-lg bg-gray-50" >
      
        <div class="my-4 flex flex-wrap justify-between">
            <div
                class="mb-4 lg:w-[64%] w-full  flex flex-col space-y-4 bg-white rounded-[20px] shadow-lg px-5">
                <div class="pt-5  font-bold">Progress Part 4</div>
                <div>
                    <div class="w-full bg-gray-200 rounded-full">
                        <div class="bg-[#0A0446] text-sm   text-blue-100 text-center p-0.5 leading-none rounded-full" :style="`width: ${part_percentage}%`"> {{part_percentage}}%</div>
                    </div>
                </div>
            </div>
            <div class="mb-4 lg:w-[33%] w-full bg-white rounded-[20px] shadow-lg overflow-hidden">
                <div class="pt-5 px-5 font-bold">Overall Performance</div>
                <canvas class="mx-4 max-h-36 mb-4.5" id="chartDoughnut1"></canvas>
                <p class="text-3xl text-center font-bold mb-14 -mt-[4.5rem]">{{this.overallPercentUser}}%</p>
            </div>
        </div>

        <div class="my-4 space-y-2 shadow-lg px-5 bg-white rounded-[20px]">
            <div class="space-y-2 py-6">
                <h2 class="font-bold text-2xl">{{ section3.title }}</h2>
                <p class="leading-6" v-html="section3.description"></p>
            </div>
            <div class="flex flex-col space-y-2">
                <h3 class="font-bold text-xl">My Learning</h3>
                <div class="space-y-2 divide-y">
                    <div class="flex flex-row space-x-2 justify-between py-4  rounded items-center" v-for="img in learningPlan" v-bind:key="img.id">
                        <div class="flex flex-row justify-start space-x-3">
                            <img :src="learningPlanPath + '/' + img.image" alt="" class="rounded-lg" style="height: 4rem; width: 5rem">
                            <div class="flex flex-col">
                                <h4 class="font-medium">{{ img.title | truncate(30) }}</h4>
                                <p v-html="img.description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100)"></p>
                            </div>
                        </div>
                        <router-link :to="'/'+currentUrl+'/my-learning-plan/' + img.id">
                            <button class="px-4 py-1 bg-[#0A0446] text-white rounded"  @click="beforeNavigate(img)">More</button>
                        </router-link>
                    </div>
                </div>
                <div class="pb-4">
                    <router-link :to="'/'+currentUrl+'/my-learning-plan'">
                        <button
                            class="flex items-center font-sixe-[20px] px-8 py-1 mx-auto rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black">
                            See All
                        </button>
                    </router-link>
                </div>
            </div>
        </div>

        <div class="my-4 flex flex-wrap justify-between">
            <div
                class="mb-4 w-full  flex flex-col py-4 bg-white rounded-[20px] shadow-lg">
                <div class="font-bold px-5">Personalized Tips</div>
                <div class="max-h-32 overflow-y-scroll no-scrollbar"  v-if="personalizedTipsList.length">
                    <div
                        class="flex flex-row justify-between items-center py-4 rounded-lg items-center px-5 hover:bg-blue-50" v-for="pt in personalizedTipsList" v-bind:key="pt.id">
                        <div class="flex flex-row justify-start items-center space-x-2 w-[90%]">
                            <img src="https://picsum.photos/400/300" alt="" class="rounded-full"
                                style="height: 3rem; width: 3rem">
                            <div>
                                <h6 class="text-base font-medium">{{pt.title}}</h6>
                                <p class="text-xs">{{pt.description}}</p>
                                <p class="text-xs">{{pt.created_at | fromNow}}</p>
                            </div>
                        </div>
                        <!--<p class="text-sm text-[#0A0446]">9 Mar</p>-->
                    </div>

                    
                </div>
            </div>
        </div>

        <div class="my-4 space-y-2 shadow-lg px-5 bg-white rounded-[20px]">
            <div class="space-y-2 pt-4">
                <h2 class="font-bold text-2xl">To Do</h2>
                <p class="leading-6">Step-by-step guidance to support your journey on the platform.
                </p>
            </div>

            <div class="swiper mySwiper py-8">
                <div class="swiper-wrapper">
                    <div class="swiper-slide mb-10" v-if="todoList.length" v-for="(todo, index) in todoList" v-bind:key="todo.id">
                        <!-- card-5 stat -->
                        <div
                            class="border border-gray-200 bg-white shadow rounded-[20px] hover:bg-slate-100 w-[100%]">
                            <div
                                class="bg-[#F2F2F2] flex items-center space-x-4 px-8 py-6 rounded-t-[10px]">
                                <div class="flex-shrink-0">
                                    <svg class="h-10 w-10" viewBox="0 0 66 63" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <ellipse cx="33" cy="31.5" rx="33" ry="31.5" fill="#0A0446">
                                        </ellipse>
                                        <mask id="mask0_22_7635" style="mask-type:luminance"
                                            maskUnits="userSpaceOnUse" x="18" y="16" width="31"
                                            height="30">
                                            <path d="M18 16.8077H48.4615V46H18V16.8077Z"
                                                fill="white">
                                            </path>
                                        </mask>
                                        <g mask="url(#mask0_22_7635)">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M28.9646 39.7678C29.211 39.7678 29.4107 39.5764 29.4107 39.3403V37.1778C29.4107 36.9782 29.5382 36.7299 29.8736 36.4592C30.2023 36.194 30.676 35.9548 31.2187 35.7771C31.4518 35.7008 31.5762 35.4578 31.4966 35.2344C31.417 35.011 31.1634 34.8917 30.9303 34.9681C30.3178 35.1686 29.7365 35.4522 29.299 35.8052C28.8684 36.1527 28.5186 36.6179 28.5186 37.1778V39.3403C28.5186 39.5764 28.7183 39.7678 28.9646 39.7678ZM37.4966 39.7678C37.7429 39.7678 37.9427 39.5764 37.9427 39.3403V37.1778C37.9427 36.5966 37.5664 36.1182 37.1113 35.7656C36.6476 35.4063 36.0335 35.1208 35.3925 34.9249C35.1578 34.8532 34.9068 34.9774 34.832 35.2023C34.7571 35.4272 34.8867 35.6677 35.1214 35.7394C35.6912 35.9136 36.1969 36.1565 36.5504 36.4304C36.9124 36.711 37.0505 36.9704 37.0505 37.1778V39.3403C37.0505 39.5764 37.2502 39.7678 37.4966 39.7678Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M24.0479 45.1069C24.0479 45.343 24.2476 45.5344 24.4939 45.5344H41.9659C42.2122 45.5344 42.4119 45.343 42.4119 45.1069V41.771C42.4119 41.535 42.2122 41.3436 41.9659 41.3436H24.4939C24.2476 41.3436 24.0479 41.535 24.0479 41.771V45.1069ZM24.94 44.6795V42.1985H41.5198V44.6795H24.94Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M18 45.1067C18 45.3428 18.1997 45.5342 18.4461 45.5342H24.4938C24.7401 45.5342 24.9398 45.3428 24.9398 45.1067V40.8092C24.9398 40.5731 24.7401 40.3817 24.4938 40.3817C24.2474 40.3817 24.0477 40.5731 24.0477 40.8092V44.6792H18.8921V42.2234C18.8921 41.9873 18.6924 41.7959 18.4461 41.7959C18.1997 41.7959 18 41.9873 18 42.2234V45.1067ZM18.4461 40.7147C18.6924 40.7147 18.8921 40.5233 18.8921 40.2872V37.4039C18.8921 36.8258 19.3437 36.3384 19.9263 36.2558C20.17 36.2212 20.3384 36.0039 20.3023 35.7703C20.2662 35.5368 20.0394 35.3755 19.7957 35.41C18.783 35.5536 18 36.3948 18 37.4039V40.2872C18 40.5233 18.1997 40.7147 18.4461 40.7147Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M41.5195 45.1069C41.5195 45.343 41.7192 45.5344 41.9656 45.5344H48.0151C48.2614 45.5344 48.4611 45.343 48.4611 45.1069V42.2236C48.4611 41.9875 48.2614 41.7962 48.0151 41.7962C47.7687 41.7962 47.569 41.9875 47.569 42.2236V44.6795H42.4117V40.8095C42.4117 40.5734 42.212 40.382 41.9656 40.382C41.7192 40.382 41.5195 40.5734 41.5195 40.8095V45.1069ZM48.0151 40.7149C48.2614 40.7149 48.4611 40.5235 48.4611 40.2874V37.4041C48.4611 36.4068 47.6968 35.5764 46.7044 35.4165C46.4614 35.3773 46.2314 35.5344 46.1905 35.7672C46.1497 36 46.3135 36.2205 46.5565 36.2596C47.129 36.3519 47.569 36.8337 47.569 37.4041V40.2874C47.569 40.5235 47.7687 40.7149 48.0151 40.7149Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M24.5156 41.5456C24.8509 41.9714 25.3641 42.1986 25.8819 42.1986H29.5836C30.5295 42.1986 31.298 41.4646 31.298 40.5557C31.298 39.6489 30.5299 38.9129 29.5836 38.9129H26.733L24.4701 36.0407C24.137 35.6187 23.6303 35.394 23.1184 35.3896C22.872 35.3875 22.6705 35.5771 22.6683 35.8132C22.6661 36.0493 22.864 36.2424 23.1104 36.2445C23.3572 36.2466 23.5993 36.3548 23.7586 36.5564C23.7586 36.5565 23.7587 36.5565 23.7587 36.5566L26.1549 39.5979C26.2391 39.7049 26.3709 39.7678 26.5108 39.7678H29.5836C30.0372 39.7678 30.4058 40.1211 30.4058 40.5557C30.4058 40.9916 30.0376 41.3437 29.5836 41.3437H25.8819C25.6339 41.3437 25.3884 41.2348 25.2277 41.0305L23.2493 38.5203C23.1008 38.3319 22.8211 38.2945 22.6245 38.4368C22.4279 38.5791 22.3889 38.8471 22.5374 39.0355L24.5154 41.5453C24.5155 41.5454 24.5156 41.5455 24.5156 41.5456C24.5156 41.5456 24.5156 41.5455 24.5156 41.5456Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M36.879 41.3437C36.4231 41.3437 36.0552 40.9913 36.0552 40.5557C36.0552 40.1215 36.4235 39.7678 36.879 39.7678H39.9501C40.09 39.7678 40.2218 39.7049 40.3061 39.5979L42.7024 36.5565C42.7025 36.5564 42.7025 36.5563 42.7026 36.5563M39.728 38.9129H36.879C35.9315 38.9129 35.1631 39.6486 35.1631 40.5557C35.1631 41.4649 35.9319 42.1986 36.879 42.1986H40.5792C41.0993 42.1986 41.6101 41.971 41.9464 41.5464L41.9472 41.5454L43.9236 39.0354C44.072 38.8469 44.0329 38.5789 43.8363 38.4367C43.6396 38.2945 43.3599 38.3319 43.2115 38.5204L41.2358 41.0295C41.2357 41.0296 41.2356 41.0297 41.2355 41.0299C41.0726 41.2353 40.828 41.3437 40.5792 41.3437H36.879M39.728 38.9129L41.9908 36.0408C42.3447 35.5923 42.8923 35.3682 43.4344 35.3899C43.6806 35.3998 43.8718 35.599 43.8615 35.8349C43.8512 36.0708 43.6433 36.254 43.3972 36.2442C43.1332 36.2336 42.8714 36.3424 42.7026 36.5563"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M20.7794 29.2784C20.9461 29.3445 21.1379 29.308 21.2655 29.1857L23.2868 27.2486H30.7452C32.2344 27.2486 33.4511 26.0827 33.4511 24.6554V19.8651C33.4511 18.4392 32.2342 17.2734 30.7452 17.2734H20.9501C19.4609 17.2734 18.2441 18.4393 18.2441 19.8651V24.6554C18.2441 25.9372 19.2252 27.0082 20.504 27.2132V28.8834C20.504 29.0563 20.6127 29.2122 20.7794 29.2784ZM21.3961 27.8514V26.8211C21.3961 26.5851 21.1964 26.3937 20.9501 26.3937C19.9534 26.3937 19.1363 25.6105 19.1363 24.6554V19.8651C19.1363 18.9118 19.9532 18.1284 20.9501 18.1284H30.7452C31.7419 18.1284 32.559 18.9118 32.559 19.8651V24.6554C32.559 25.6105 31.7417 26.3937 30.7452 26.3937H23.102C22.9837 26.3937 22.8703 26.4387 22.7866 26.5189L21.3961 27.8514Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M41.2003 30.9237C41.3669 30.8576 41.4756 30.7017 41.4756 30.5288V28.8491C42.4457 28.6509 43.1773 27.8203 43.1773 26.8341V22.716C43.1773 21.5829 42.2119 20.6578 41.0296 20.6578H33.0054C32.759 20.6578 32.5593 20.8492 32.5593 21.0853C32.5593 21.3214 32.759 21.5128 33.0054 21.5128H41.0296C41.7192 21.5128 42.2852 22.0551 42.2852 22.716V26.8341C42.2852 27.4956 41.7186 28.0391 41.0296 28.0391C40.7832 28.0391 40.5835 28.2304 40.5835 28.4665V29.4968L39.193 28.1643C39.1094 28.0841 38.9959 28.0391 38.8776 28.0391H36.2552C36.0088 28.0391 35.8091 28.2304 35.8091 28.4665C35.8091 28.7026 36.0088 28.894 36.2552 28.894H38.6929L40.7141 30.8311C40.8417 30.9533 41.0336 30.9899 41.2003 30.9237ZM31.6122 28.0391C30.916 28.0391 30.355 27.4952 30.355 26.8212C30.355 26.5851 30.1553 26.3937 29.909 26.3937C29.6626 26.3937 29.4629 26.5851 29.4629 26.8212C29.4629 27.9575 30.413 28.894 31.6122 28.894H34.2348C34.4811 28.894 34.6809 28.7026 34.6809 28.4665C34.6809 28.2304 34.4811 28.0391 34.2348 28.0391H31.6122Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.2734 24.51C21.2734 24.7461 21.4731 24.9375 21.7195 24.9375H25.8498C26.0961 24.9375 26.2958 24.7461 26.2958 24.51C26.2958 24.2739 26.0961 24.0825 25.8498 24.0825H21.7195C21.4731 24.0825 21.2734 24.2739 21.2734 24.51ZM21.2734 22.2603C21.2734 22.4964 21.4731 22.6878 21.7195 22.6878H29.9799C30.2263 22.6878 30.426 22.4964 30.426 22.2603C30.426 22.0242 30.2263 21.8329 29.9799 21.8329H21.7195C21.4731 21.8329 21.2734 22.0242 21.2734 22.2603ZM21.2734 20.0105C21.2734 20.2466 21.4731 20.438 21.7195 20.438H29.9799C30.2263 20.438 30.426 20.2466 30.426 20.0105C30.426 19.7744 30.2263 19.5831 29.9799 19.5831H21.7195C21.4731 19.5831 21.2734 19.7744 21.2734 20.0105Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M30.2949 34.0699C30.2949 35.5747 31.579 36.8053 33.1492 36.8053C34.7195 36.8053 36.0036 35.5747 36.0036 34.0699V30.3057C36.0036 30.0696 35.8039 29.8782 35.5575 29.8782H32.0902C31.1025 29.8782 30.2949 30.6492 30.2949 31.597V34.0699ZM33.1492 35.9503C32.0718 35.9503 31.1871 35.1025 31.1871 34.0699V31.597C31.1871 31.1227 31.5938 30.7331 32.0902 30.7331H35.1115V34.0699C35.1115 35.1025 34.2268 35.9503 33.1492 35.9503Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.4716 35.9503C20.394 35.9503 19.5093 35.1025 19.5093 34.0699V31.597C19.5093 31.1224 19.9164 30.7331 20.4107 30.7331H22.5324C23.0266 30.7331 23.4337 31.1224 23.4337 31.597V34.0699C23.4337 35.1025 22.549 35.9503 21.4716 35.9503ZM18.6172 34.0699C18.6172 35.5747 19.9013 36.8053 21.4716 36.8053C23.0417 36.8053 24.3259 35.5747 24.3259 34.0699V31.597C24.3259 30.6496 23.5187 29.8782 22.5324 29.8782H20.4107C19.4244 29.8782 18.6172 30.6496 18.6172 31.597V34.0699Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M42.1367 34.0699C42.1367 35.5745 43.419 36.8053 44.9911 36.8053C46.5617 36.8053 47.8438 35.5743 47.8438 34.0699V31.597C47.8438 30.6499 47.0386 29.8782 46.0503 29.8782H43.9303C42.9418 29.8782 42.1367 30.6499 42.1367 31.597V34.0699ZM44.9911 35.9503C43.9121 35.9503 43.0288 35.1027 43.0288 34.0699V31.597C43.0288 31.122 43.4346 30.7331 43.9303 30.7331H46.0503C46.5458 30.7331 46.9517 31.122 46.9517 31.597V34.0699C46.9517 35.1029 46.0682 35.9503 44.9911 35.9503Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.0642 33.5865C20.7828 33.8571 20.2586 34.0555 19.1944 33.7421C18.9589 33.6728 18.7094 33.7995 18.637 34.0252C18.5646 34.2508 18.6969 34.49 18.9323 34.5594C20.1786 34.9264 21.0963 34.7668 21.6961 34.19C22.0738 33.8268 22.2734 33.3434 22.3742 32.8625C22.3753 32.8629 22.3764 32.8634 22.3775 32.8638C22.7854 33.0251 23.3706 33.1323 24.0348 32.8966C24.2658 32.8147 24.3838 32.5687 24.2982 32.3473C24.2127 32.1259 23.9561 32.0129 23.7251 32.0948C23.3234 32.2373 22.976 32.1756 22.7177 32.0735C22.5872 32.0219 22.4824 31.9607 22.4113 31.9133C22.3761 31.8897 22.35 31.8701 22.3341 31.8576C22.3262 31.8514 22.3209 31.847 22.3183 31.8448C22.3176 31.8442 22.3172 31.8438 22.3169 31.8436C22.1901 31.7317 22.0073 31.6997 21.8474 31.7617C21.6864 31.8241 21.5779 31.9702 21.5691 32.1364C21.537 32.7455 21.3848 33.2783 21.0642 33.5865ZM22.3186 31.8451L22.3185 31.8451Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M44.7652 34.19C45.3648 34.7668 46.2827 34.9264 47.5289 34.5594C47.7644 34.49 47.8966 34.2508 47.8242 34.0252C47.7519 33.7995 47.5023 33.6728 47.2668 33.7421C46.2025 34.0556 45.6784 33.8571 45.3972 33.5866C45.077 33.2785 44.9251 32.7458 44.8937 32.1369C44.8852 31.9707 44.7768 31.8244 44.6159 31.7619C44.456 31.6997 44.2731 31.7315 44.1462 31.8433C44.146 31.8436 44.1455 31.844 44.1448 31.8446C44.1422 31.8467 44.1369 31.8511 44.129 31.8574C44.113 31.8699 44.0869 31.8895 44.0515 31.9131C43.9803 31.9606 43.8752 32.0218 43.7446 32.0734C43.4859 32.1757 43.1386 32.2373 42.738 32.0949C42.507 32.0128 42.2503 32.1258 42.1647 32.3471C42.079 32.5685 42.1968 32.8145 42.4278 32.8965C43.0914 33.1323 43.6767 33.025 44.0847 32.8638C44.0858 32.8634 44.0869 32.863 44.088 32.8625C44.1884 33.3435 44.3877 33.8268 44.7652 34.19Z"
                                                fill="white"></path>
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M30.2949 32.3421C30.2949 32.5781 30.4946 32.7695 30.741 32.7695H35.5575C35.8039 32.7695 36.0036 32.5781 36.0036 32.3421C36.0036 32.106 35.8039 31.9146 35.5575 31.9146H30.741C30.4946 31.9146 30.2949 32.106 30.2949 32.3421Z"
                                                fill="white"></path>
                                        </g>
                                    </svg>
                                </div>
                                <div class="flex-1 min-w-0">
                                    <p class="text-sm font-medium text-gray-900 truncate">{{ todo.title | truncate(15) }}</p>
                                </div>
                            </div>
                            <div class="px-8 pt-6 text-left">
                               
                                <p class="leading-6" v-html="truncateParagraph(todo.description, 80)"></p>
                                <p>
                                    <router-link :to="'/employee/todo/' + todo.id"  class="font-medium text-[#BE0858]">Read More...</router-link>
                                </p>
                                <p class="inline-flex my-4">
                                    <span class="mr-1">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M21 10H3M16 2V6M8 2V6M10.5 14L12 13V18M10.75 18H13.25M7.8 22H16.2C17.8802 22 18.7202 22 19.362 21.673C19.9265 21.3854 20.3854 20.9265 20.673 20.362C21 19.7202 21 18.8802 21 17.2V8.8C21 7.11984 21 6.27976 20.673 5.63803C20.3854 5.07354 19.9265 4.6146 19.362 4.32698C18.7202 4 17.8802 4 16.2 4H7.8C6.11984 4 5.27976 4 4.63803 4.32698C4.07354 4.6146 3.6146 5.07354 3.32698 5.63803C3 6.27976 3 7.11984 3 8.8V17.2C3 18.8802 3 19.7202 3.32698 20.362C3.6146 20.9265 4.07354 21.3854 4.63803 21.673C5.27976 22 6.11984 22 7.8 22Z"
                                                stroke="black" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round" />
                                        </svg>
                                    </span>
                                    
                                    <span class="font-bold">Checklist</span>
                                </p>
                            </div>
                            <div class="pb-4">
                                <button
                                    class="flex items-center font-sixe-[20px] px-12 py-1 mx-8 rounded-md bg-[#BE0858] text-white text-center text-md">
                                    {{ todo.status }}
                                </button>
                            </div>
                        </div>
                        <!-- card-5 end -->
                    </div>
                </div>
                <div class="swiper-pagination"></div>
            </div>
        </div>
    </div>
</template>
<script type="text/javascript">

import Api from '../../../router/api';
export default {
  props: {
    todoList: {},
    personalizedTipsList: {},
    learningPlan: {},
    section3: {},
    currentUrl: {},
    learningPlanPath: {},
    truncateParagraph: Function,
    part_percentage:0,
    overallPercentUser:0
  },
  data() {
    return {
    
    };
  },
  methods:{
        beforeNavigate(w,type) {
        Api.updateLearningPlanView({  
                plan_id:w.id,
                part:w.part,
                type:w.link  ? "2" : "1",
            });
        console.log(w);
    },
    },
  mounted() {
        setTimeout(() => {
            // Function to initialize doughnut charts
            const initializeDoughnutChart = (chartId) => {
                if (document.getElementById(chartId)) {
                    if(chartId == "chartDoughnut1"){
                        console.log({configDoughnut})
                        configDoughnut.data = {
                                        datasets: [{
                                            data: [this.overallPercentUser, 100 - this.overallPercentUser],
                                            backgroundColor: ["rgb(9, 4, 70)", "#ddd"],
                                            borderRadius: 20,
                                            borderWidth: 1,
                                            hoverOffset: 2,
                                            borderSkipped: false,
                                        }],
                                    };
                        new Chart(document.getElementById(chartId), configDoughnut);
                    }else{
                        new Chart(document.getElementById(chartId), configDoughnut);
                    }

                }
            };

            const value = 70;
            const dataDoughnut = {
                datasets: [{
                    data: [value, 100 - value],
                    backgroundColor: ["rgb(9, 4, 70)", "#ddd"],
                    borderRadius: 20,
                    borderWidth: 1,
                    hoverOffset: 2,
                    borderSkipped: false,
                }, ],
            };

            const configDoughnut = {
                type: "doughnut",
                data: dataDoughnut,
                options: {
                    cutout: "80%",
                    reduceXLabels: true,
                    responsive: true,
                    rotation: -125,
                    circumference: 250,
                },
            };

            // Array of chart IDs
            const doughnutChartIds = ["chartDoughnut1", "chartDoughnut2", "chartDoughnut3", "chartDoughnut4"];

            doughnutChartIds.forEach((chartId) => {
                initializeDoughnutChart(chartId);
            });

            const labels = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
            const data = {
                labels: labels,
                datasets: [{
                    label: "Hours",
                    display: false,
                    backgroundColor: "#0A0446",
                    borderColor: "#0A0446",
                    data: [2, 4, 2, 6, 5, 5, 3],
                }, ],
            };

            const configLineChart = {
                type: "line",
                data,
                options: {
                    plugins: {
                        legend: {
                            display: false,
                        },
                    },
                    responsive: true,
                },
            };

            if (document.getElementById("chartLine-new")) {
                new Chart(document.getElementById("chartLine-new"), configLineChart);
            }
            
            var swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                spaceBetween: 30,
                freeMode: true,
                pagination: {
                    el: ".swiper-pagination",
                    clickable: true,
                },
            });
        }, 2000);

    }
  // Your methods to fetch and set file content should be here
};
</script>