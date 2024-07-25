<template lang="">
    <div>
        <p class="pt-2 text-center font-bold text-lg">
            <span class="text-[#0A0446]">Upcoming Workshops</span>
        </p>
        <div class="p-[15px]">
            <router-link :to="'/employee/workshop/' + upcomingWorkshop.id">
                <img class="object-cover rounded-[15px]" :src="filePath + '/' + upcomingWorkshop.image" alt="product image" />
            </router-link>
        </div>
        <div class="px-5 pb-3">
            <router-link :to="'/employee/workshop/' + upcomingWorkshop.id">
                <h5 class="text-[16px] font-semibold tracking-tight">
                    {{ upcomingWorkshop.title }}
                </h5>
            </router-link>

            <div class="flex items-center justify-between text-[12px]">
                <span class="font-bold">Time: {{ upcomingWorkshop.total_hours }} Hour(s)</span>
                <span class="font-medium rounded-lg text-center">Leader: {{ upcomingWorkshop.instructor }}</span>
            </div>

            <div class="flex items-center mt-2.5 mb-5 text-[15px]">
                <p>Date: {{ upcomingWorkshop.date | timeStampToDateOnly }} {{upcomingWorkshop.date | timeStampToTimeOnly}}</p>
            </div>
        </div>
        <div class="mb-3 rounded">
            <button
                class="flex items-center font-sixe-[20px] px-8 py-1 mx-auto rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="!upcomingWorkshop.registered" @click="registerForWorkshop(upcomingWorkshop.id)">
                Register Now
            </button>
            <button
                class="flex items-center font-sixe-[20px] px-8 py-1 mx-auto rounded-md bg-[#0A0446] text-white text-center text-md border border-1 border-black" v-if="upcomingWorkshop.registered">
                Registered
            </button>
        </div>
    </div>
</template>
<script>
export default {
    name: "UpcomingWorkshops",
    props: {
       upcomingWorkshop: {},
       currentUrl: String,
       upcomingWorkshopLength:{},
       timeStampToTimeOnly:{},
       timeStampToDateOnly:{},
       filePath:String
    },
    methods: {
        registerForWorkshop(id) {
          this.$emit('registerForWorkshop', id); // Emitting an event to call parent function
        }
    }
}
</script>
<style lang="">
    
</style>