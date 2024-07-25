<template lang="">
   
        <div class="m-2 p-4 h-[15rem] sm:w-full lg:w-[30%] bg-[#E9E9EC] rounded-md" style="height: 285px;">
            <div class="flex flex-wrap space-y-2 space-x-1 justify-between items-center text-sm">
                <p class="">Total Training Hours</p>
                <!-- <select v-model="selectedTTMonthOption" @change="handleTTMonthOption" class="appearance-none border border-gray-200 text-gray-700 px-1 py-1 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]" @change="callTotalVisitingHours($event)"> -->
                  <select v-model="selectedTTMonthOption" @change="handleTTMonthOption" class="appearance-none border border-gray-200 text-gray-700 px-1 py-1 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
                    <!-- <option value="yearly">Yearly</option> -->
                    <option value="Jan">Jan</option>
                    <option value="Feb">Feb</option>
                    <option value="Mar">Mar</option>
                    <option value="Apr">Apr</option>
                    <option value="May">May</option>
                    <option value="Jun">Jun</option>
                    <option value="July">July</option>
                    <option value="Aug">Aug</option>
                    <option value="Sep">Sep</option>
                    <option value="Oct">Oct</option>
                    <option value="Nov">Nov</option>
                    <option value="Dec">Dec</option>
                </select>
            </div>
            <p class="text-xl text-gray-400 uppercase font-bold my-4">
                <!-- <span class="text-[#BE0858]">120</span>
                <span class="text-[#313131]">Hours</span> -->
                <span class="text-[#BE0858]">{{this.tthours}}</span>
            </p>
            <p class="text-sm"><span class="text-[#00AC4F]"> </span> increased then last week</p>
        </div>

</template>
<script>
  import Api from '../../../router/api';
export default {
    components: {
    },
    data() {
      return {
        selectedTTMonthOption:'Jan',
        total_visiting_hours:0,
        increase_percentage:0,
        tthours:0
      };
    },
    methods:{
        // getTotalVisitingHours(data)
        // {
        //                 var that = this;
        //         Api.getTotalVisitingHours({time_period:data}).then((e)=>{
        //             console.log({e,total_visiting_hours:e.data.total_visiting_hours});
        //             that.total_visiting_hours = e.data.total_visiting_hours;
        //         }).catch((e)=>{
        //             console.log(e);
        //         })
        // },
        // callTotalVisitingHours(e)
        // {
        //     console.log({e,value:e.target.value})
        //     this.getTotalVisitingHours(e.target.value)
        // },
        handleTTMonthOption()
      {

            Api.getTotalVisitingHours({time_period:this.selectedTTMonthOption}).then((e)=>{
                  console.log(e,"Total Hours");
                  //   console.log({e,total_visiting_hours:e.data.total_visiting_hours});
                  this.tthours = e.data.total_visiting_hours + '-'+ "Hours";
                }).catch((e)=>{
                    console.log(e);
                    this.tthours = 0;
                })
      }
    },
    
    mounted()
    {
        //  this.getTotalVisitingHours("yearly")
        // console.log(this.total_visiting_hours)
        this.handleTTMonthOption();

    }

  };
</script>
<style lang="">
    
</style>