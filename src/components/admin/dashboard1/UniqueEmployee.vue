<template>
    <div class="m-2 w-full lg:w-[48%] bg-[#E9E9EC] rounded-md">
        <div class="shadow-lg rounded-lg overflow-hidden">
            <div class="flex flex-wrap space-y-2 justify-between items-center py-3 px-5">
          <p class="">
            Employee completion
          </p>
          <select v-model="selectedPartOption" @change="handleSelectPartOption" class="appearance-none border border-gray-200 text-lg px-6 py-0 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
            <option value="part1">Part 1</option>
            <option value="part2">Part 2</option>
            <option value="part3">Part 3</option>
            <option value="part4">Part 4</option>
            <option value="general">General</option>
          </select>
        </div>
        <div class="flex flex-wrap space-y-2 justify-around items-center">
            <div class="h-[100%] w-[100%]" style="padding-left: 70px;">
            <highcharts :options="doughnutChartOptions"></highcharts>
          </div>
          <div class="flex flex-col pb-4">
            <!-- <div class="inline-flex items-center">
              <div class="w-5 h-5 bg-[#C2095A] rounded-full mr-2"></div> Employee - 30%
            </div> -->
            <div class="inline-flex items-center">
              <div class="w-5 h-5 bg-[#090446] rounded-full mr-2"></div> Employee completion - {{ this.admin_part_percentage }}%
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Highcharts from 'highcharts';
  import HighchartsVue from 'highcharts-vue';
  import Api from '../../../router/api';
  import Vue from "vue";
  // Ensure Highcharts modules are imported if needed
  // For example: import 'highcharts/modules/exporting';
  // Make sure to add necessary modules based on your chart requirements
  
  export default { 
    components: {
      HighchartsVue
    },
    data() {
      return {
        selectedPartOption: 'part1',
        admin_part_percentage:0,
        doughnutChartOptions: {
          chart: {
            type: 'pie',
            width: 300,
            height: 380,
            backgroundColor:"transparent" 
          },
          title: {
            text: ''
          },
          series: [{
            name: 'Value',
            colorByPoint: true,
            data: [],
            plotBackgroundColor: 'red',
            size: '200',
            innerSize: '40%',
            showInLegend: false,
            dataLabels: {
                enabled: false
              }
          }],
          colors: ['hsl(245, 89%, 15%)'],
          // Add more Highcharts options if needed
        }
      };
    },
    methods: {
    handleSelectPartOption()   
    {
            console.log('Selected option changed:', this.selectedPartOption);
   
            Api.getAdminPartPercentage(this.selectedPartOption).then(response => {
              const chartData =[ {name:'Employee completion',y:response.data.admin_part_percentage,color:'rgb(9, 4, 70)'},{name:'Employee completion',y:(100-response.data.admin_part_percentage),color:'#ccc'}];
              let that = this
                that.admin_part_percentage = response.data.admin_part_percentage;
                // that.$set(this.doughnutChartOptions.series[0].data, 0, chartData);
                Vue.set(this.doughnutChartOptions.series[0], 'data', chartData);
                
            }).catch((error) => {
                this.$swal({
                    icon: "error",
                    title: "error",
                    text: error.response.data.message,
                    showConfirmButton: true
                });
            });
            
      // Perform any additional actions you need on select change
    },
  },
  mounted()
    {
      this. handleSelectPartOption();
    
    }
  };
  </script>
  
  <style>
  /* Your styles here if needed */
  </style>
  