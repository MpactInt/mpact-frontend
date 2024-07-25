<template>
<div class="m-2 bg-[#E9E9EC] sm:w-full lg:w-[23%] rounded-md" style="height: 285px;">
    <div class="p-4 h-[15rem]">
        <div class="flex flex-wrap space-y-2 space-x-1 justify-between items-center text-sm">
            <p class="">
                Consulting Hours Used
            </p>
            <select v-model="selectedMonthOption" @change="handleSelectMonthOption" class="appearance-none border border-gray-200 px-1 py-1 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
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
        <!-- <highcharts :options="barChartOptions" ref="chart"></highcharts> -->
        <!-- <div class="inline-flex items-center" style="padding-left: 40px;padding-bottom: 15px;">
            <div class="w-5 h-5 bg-[#090446] rounded-full mr-2"></div> Hours - {{ this.counthours }}
        </div> -->
        <p class="text-xl text-gray-400 uppercase font-bold my-4">
                <!-- <span class="text-[#BE0858]">120</span>
                <span class="text-[#313131]">Hours</span> -->
                <span class="text-[#BE0858]">{{this.counthours}}</span>
            </p>
    </div>
</div>
</template>

<script>
import Highcharts from 'highcharts';
import HighchartsVue from 'highcharts-vue';
import Vue from "vue";
import Api from '../../../router/api';

export default {
    components: {
        // HighchartsVue,
    },
    data() {
        return {
            counthours:0,
            selectedMonthOption: 'Jan',
            // barChartOptions: {
            //     chart: {
            //         type: 'column',
            //         width: 250,
            //         height: 180,
            //         backgroundColor: "transparent",
            //         padding: 0,
            //     },
            //     title: {
            //         text: null,
            //     },
            //     xAxis: {
            //         categories: [
            //             "Jan-Mar",
            //             "Apr-Jun",
            //             "Jul-Sep",
            //             "Oct-Dec",
            //         ],
            //         labels: {
            //             rotation: 0, // Set rotation to 0 to display labels horizontally
            //             style: {
            //                 fontSize: '9px', // Decrease font size
            //             }
            //         },
            //     },
            //     yAxis: {
            //         title: {
            //             text: 'Hours',
            //         },
            //         labels: {
            //             rotation: 0, // Set rotation to 0 to display labels horizontally
            //             style: {
            //                 fontSize: '9px', // Decrease font size
            //                 margin: 0,
            //             },
            //         },
            //     },
            //     series: [{
            //         name: 'Hours',
            //         data: [],
            //         color: 'hsl(245, 89%, 15%)',
            //         stacking: 'normal',
            //         showInLegend: false, 
            //     }],
            //     // Add more Highcharts options if needed
            // },
        };
    },
   
    methods: {
        handleSelectMonthOption()     
    {
        Api.getAdminConsultingHours(this.selectedMonthOption).then((e)=>{
                  console.log(e,"Consulting Hours");
                  this.counthours = e.data.admin_consulting_hours + '-'+ "Hours";
                //   Vue.set(this.barChartOptions.series[0], 'data', e.data.admin_consulting_data);
                }).catch((e)=>{
                    console.log(e);
                })
    },
},
mounted()
    {
      this.handleSelectMonthOption();
    
    }
};
</script>

<style>
/* Your styles here if needed */
</style>
