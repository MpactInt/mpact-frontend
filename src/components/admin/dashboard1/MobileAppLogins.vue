<template>
<div class="m-2 bg-[#E9E9EC] sm:w-full lg:w-[22%] rounded-md" style="height: 285px;">
    <div class="p-4 h-[15rem]">
        <div class="flex flex-wrap space-y-2 space-x-1 justify-between items-center text-sm">
            <p class="">
                Mobile App Logins
            </p>
        </div>
        <highcharts :options="pieChartOptions" ref="chart"></highcharts>
        <div class="inline-flex items-center" style="padding-left: 40px; margin-top: 55px;">
              <div class="w-5 h-5 bg-[#090446] rounded-full mr-2"></div> Active - {{ this.employeesLength }}
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
        HighchartsVue,
    },
    data() {
        return {
            employeesLength : 0,
            getEmpData: {
                'sortBy': '',
                'name': '',
                'email': '',
                'sortOrder': ''
            },
            pieChartOptions: {
                chart: {
                    type: 'pie',
                    width: 200,
                    height: 155,
                    backgroundColor: "transparent"
                },
                title: {
                    text: '',
                },
                tooltip: {
                    positioner: function (labelWidth, labelHeight, point) {
                        return {
                            x: ((point.plotX + this.chart.plotLeft) - labelWidth / 2),
                            y: (this.chart.plotTop - labelHeight), // Position tooltip at top
                        };
                    },
                },
                series: [{
                    name: 'User',
                    colorByPoint: true,
                    data: [],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: false, 
                       
                    },
                    showInLegend: false,
                }],
                // Add more Highcharts options if needed
            },
        };
    },
    mounted() {
        this.getMobileUsersList()
    },
    methods: {
        // renderChart() {
        //     setTimeout(() => {
        //         const chartOptions = this.$refs.chart.getChart().options;
        //         this.$refs.chart.update(chartOptions);
        //     }, 1000);
        // },

    getMobileUsersList: function (page = 1) 
    {
      let that = this
      Api.getMobileUsersList(page, that.getEmpData).then(response => {
        console.log(response);
        let that = this
        that.employeesList = response.data.res
        that.employeesLength = that.employeesList.data.length 
        const chartData =[ {name:'Active User',y:that.employeesLength,color:'rgb(9, 4, 70)'}];
        
        Vue.set(this.pieChartOptions.series[0], 'data', chartData);
      }
      ).catch((error) => {
        this.$swal({
          icon: "error",
          title: "error",
          text: error.response.data.message,
          showConfirmButton: true
        });
      });
    }

    },
};
</script>

<style>
/* Your styles here if needed */
</style>
