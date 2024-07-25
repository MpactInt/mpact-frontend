<template>
    <div class="m-2 w-full lg:w-[48%] bg-[#E9E9EC] rounded-md">
      <div class="shadow-lg rounded-lg overflow-hidden">
        <div class="py-3 px-5">Daily Visit</div>
        <highcharts :options="chartOptions"></highcharts>
        <div class="inline-flex items-center" style="padding-left: 180px;padding-bottom: 15px;">
              <div class="w-5 h-5 bg-[#090446] rounded-full mr-2"></div> Visitors - {{ this.countvisitors }}
        </div>
      </div>
    </div>
  </template> 
  
  <script>
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  import Api from '../../../router/api';
  import Vue from "vue";
  export default {
    components: {
      HighchartsVue
    },
    data() {
      return {
        countvisitors:2,
        chartOptions: {
          chart: {
            type: 'column',
            width: 400,
            backgroundColor:"transparent"
            
          },
          title: {
            text: ''
          },
          xAxis: {
            categories: []
          },
          yAxis: {
            title: {
              text: 'Visitors'
            },
            
          },
          series: [{
            name: 'Visitors',
            data: [],
            showInLegend: false
          }],
          colors: ['hsl(245, 89%, 15%)'],
          // Add more Highcharts options if needed 
        }
      };
    },
    methods:{
        
    },
    mounted() 
    {
      var that = this;
      Api.dailyVisit().then((e)=>{ 
          //console.log({data:e.data.data},"Daily visit");
          that.countvisitors = e.data.daily_visitors_user;
          Vue.set(that.chartOptions.xAxis, 'categories', e.data.categories);
          Vue.set(that.chartOptions.yAxis, 'tickPositions', e.data.tick_positions);
          Vue.set(that.chartOptions.series[0], 'data', e.data.data);
      }).catch((e)=>{
        console.log(e);
      })
        console.log(that.chartOptions,'visitors')

    }

  };
  </script>
  
  <style>
  /* Your styles here if needed */
  </style>
  