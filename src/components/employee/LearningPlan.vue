<template>
<div class="">
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
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

            <!-- card-0 start -->
            <div class="flex flex-col justify-between max-w-full bg-[#E7EAEC] border border-gray-200 rounded-lg shadow text-[#0A0446]" v-for="img in learningPlan.data" v-bind:key="img.id">

                <div class="p-[15px]">
                    <a class="" href="#">
                        <img class="object-cover rounded-[15px]" :src="learningPlanPath + '/' + img.image" alt="product image" />
                    </a>
                    <a href="#">
                        <h5 class="text-2xl font-semibold tracking-tight">{{ img.title | truncate(25) }}</h5>
                    </a>
                    <p v-html="img.description.replace(/<\/?[^>]+(>|$)/g, '').slice(0, 100)"></p>
                </div>
                <div class="my-4 rounded">
                    <router-link class="links" :to="'/'+currentUrl+'/my-learning-plan/'+img.id">
                        <button class="flex items-center font-sixe-[14px] px-8 py-2 mx-8 rounded-md bg-[#C2095A] text-white text-center text-md" >
                            Read More
                            <svg class="ml-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5 12L19 12M19 12L12 5M19 12L12 19" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            </svg>
                        </button>
                    </router-link>
                </div>
            </div>
            <!-- card-0 end -->

        </div>

        <div class="text-end py-6">
            <pagination :data="learningPlan" @pagination-change-page="getEmpLearningPlanList" />
        </div>
    </div>

</div>
</template>

<script>
/* eslint-disable */
import AppMixin from '../../mixins/AppMixin'
import Api from '../../router/api'

export default {
    name: 'WelcomeNote',
    mixins: [AppMixin],
    data() {
        return {
            note: {}
        }
    },
    methods: {
       
    },
    created() {
        var url = document.URL.split('/');
        this.currentUrl = url[3]
        this.getEmpLearningPlanList()
    }
}
</script>
