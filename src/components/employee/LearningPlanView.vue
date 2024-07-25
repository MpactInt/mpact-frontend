<template>
    <section class="employee-learning-plan-view-section half-cut-bg">

        <div class="py-6 px-8">
            <div class="flex flex-wrap space-y-2 justify-between">
                <p class="uppercase text-4xl text-gray-400 dark:text-gray-500 uppercase font-bold">
                    <span class="text-[#090446]">My Learning PLAN</span>
                </p>
                <form class="flex items-center">
                    <label for="simple-search" class="sr-only">Search</label>
                    <div class="relative w-full">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg aria-hidden="true" class="w-5 h-5 text-gray-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path>
                            </svg>
                        </div>
                        <input type="text" id="simple-search" class="px-14 bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="Search" required>
                    </div>
                </form>
            </div>
        </div>

        <div class="space-y-2 px-8">
            <div class="flex flex-wrap items-center space-x-2 rounded-[18px] mb-16">
                <div class="w-[50%]">
                    <a href="#">
                        <img class="object-cover rounded-[15px] w-[100%] h-[25%]" :src="planSingle.image" alt="product image" />
                    </a>
                </div>
                <div class="w-[45%] rounded-lg text-[#0A0446]">
                    <div class="px-2 pb-4">
                        <a href="#">
                            <p class="font-bold text-[24px] tracking-tight">
                                <span class="text-[#BE0858]">{{ planSingle.title }}</span>
                            </p>
                        </a>
                        <p v-html="planSingle.description"></p>
                        <!--<p class="text-lg text-justify text-gray-500 leading-6 py-2">{{ planSingle.description }}</p>-->
                    </div>
                </div>
            </div>

            <div class="pb-10">
                <div class="mt-6 mb-2">
                    <p class="font-bold text-[24px] tracking-tight">
                        <span class="text-[#BE0858]">{{ planSingle.title }}</span>
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

                    <!-- card-0 stat -->
                    <div class="flex flex-col justify-between max-w-full bg-white border border-gray-200 rounded-lg shadow text-[#0A0446]" v-if="planFiles.length && w.image!==''" v-for="w in planFiles" v-bind:key="w.id">
                        <div class="px-5 py-6 space-y-4">
                            <a href="#">
                                <h5 class="text-2xl font-semibold tracking-tight">
                                    <span class="text-[#313131]">{{ w.title }}</span>
                                </h5>
                            </a>
                            <p class="text-sm text-gray-500">{{ w.description }}</p>
                        </div>
                        <div class="mt-2 mb-4 rounded">
                            <button v-if="w.image" class="flex items-center font-sixe-[14px] px-8 py-2 mx-8 rounded-md bg-[#0A0446] text-white text-center text-md" @click="beforeNavigate(w,'file',planSingle)">
                                Download File {{ w.part }}
                                <svg class="ml-2" width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M21 21H3M18 11L12 17M12 17L6 11M12 17V3" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
                                </svg>
                            </button>
                        </div>
                    </div>
                    <!-- card-0 end -->

                </div>
            </div>

            <div class="pb-6">
                <div class="mt-6 mb-2">
                    <p class="font-bold text-[24px] tracking-tight">
                        <!-- <span class="text-[#313131]">Self</span> -->
                        <span class="text-[#BE0858]">Videos</span>
                    </p>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-4">

                    <!-- card--2 start -->
                    <div class="max-w-full bg-white border border-gray-200 rounded-[15px] shadow text-[#0A0446]" v-if="planFiles.length && w.video_path !== ''" v-for="w in planFiles" v-bind:key="w.id">
                        <div class="" :id="getYoutubId(w)">

                            <!-- <div v-html="w.link"></div> -->
                            <video  class="py-6" controls style="width: 100%;">
                                <source :src="getFullVideoPath(planSingle.vdo_path+'/'+w.video_path)" type="video/mp4" />Your browser does not support the video tag.
                            </video>

                            <div class="px-8 my-4 space-y-4">
                                <a href="#">
                                    <h5 class="text-2xl font-semibold tracking-tight">
                                        <a class="cursor-pointer links"  @click="showLearningVdo(planSingle.vdo_path+'/'+w.video_path)" >{{ w.title }} {{ w.part }}</a>
                                        <!-- <span class="text-[#090446]">{{ w.title }} {{ w.part }}</span>
                                        <span class="text-[#BE0858]">Awareness</span> -->
                                    </h5>
                                </a>
                                <p class="text-md text-gray-500 pb-2">{{ w.description }}</p>
                            </div>
                        </div>
                    </div>
                    <!-- card--2 end -->

                </div>
            </div>
        </div>

        <!--Video modal popup-->
        <b-modal id="show-learning-vdo" title="Video" :hide-footer=hideFooter>
          <!-- <div id="vdo_pop_up" v-html="vdo_pop_up.embed_code" ></div> -->
          <video id="vdo_pop_up" class="py-6" controls style="width: 100%;">
            <source :src="vdo_pop_up.embed_code" type="video/mp4" />Your browser does not support the video tag.
          </video>
        </b-modal>
        <!--End video modal popup-->

    </section>
    </template>

    <style>
    .card-text {
        min-height: 125px !important
    }
    </style>

    <script>
    /* eslint-disable */
    import AppMixin from '../../mixins/AppMixin'
    import Api from '../../router/api'

    export default {
        name: 'WelcomeNote',
        mixins: [AppMixin],
        data() {
            return {
                vdo_pop_up: {
                    'embed_code': ''
                },
                note: {},
            }
        },
        methods: {
            showLearningVdo: function (embed_code)
            {
                let that = this
                that.$bvModal.show('show-learning-vdo')
                that.vdo_pop_up.embed_code = embed_code
            },
            beforeNavigate(w, type,p)
            {
                console.log({p,w,data:{
                    plan_id: w.id,
                    part: p.part,
                    type: type ==  "video" ? "2" : "1",
                }});
                // var userData = window.localStorage.getItem('userData');
                // var companyData = window.localStorage.getItem('companyData');
                // companyData = JSON.parse(companyData);
                // userData = JSON.parse(userData);
                Api.updateLearningPlanView({
                    plan_id: w.id,
                    part: p.part,
                    type: type ==  "video" ? "2" : "1",
                });
                console.log(w);
                this.downloadLearningPlanFile(w.id, w.image)
            },
            getYoutubId(w)
            {
                return `getYoutubId${w.id}`
            },
            getFullVideoPath(w)
            {
                console.log(w,'video path get')
                return w;
            }
        },
        created()
        {
            this.getLearningPlanFiles();

        },
        mounted() {
            setTimeout(() => {
                console.log({
                    planSingle: this.planSingle,
                    planFiles: this.planFiles,
                    filePath: this.filePath
                })
            }, 2000);
        },
    }
    </script>

    <!-- Add "scoped" attribute to limit CSS to this component only -->
