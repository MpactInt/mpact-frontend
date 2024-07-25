<template lang="">

        <div class="mb-4 w-full lg:w-[48%] bg-[#E9E9EC] rounded-md">
            <div class="shadow-lg rounded-lg overflow-hidden">
                <div class="flex flex-wrap space-y-2 justify-between items-center py-2 px-5">
                    <p class="">
                        Tanning Hours Complete
                    </p>
                    <select
                        class="appearance-none border border-gray-200 text-lg px-6 py-0 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
                        <option>Yearly</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 1</option>
                    </select>
                </div>
                <p class="px-5 text-xl text-gray-400 uppercase font-bold my-2">
                    <span class="text-[#BE0858]">120</span>
                    <span class="text-[#313131]">Hours</span>
                </p>
                <p class="text-sm px-5"><span class="text-[#00AC4F]"> 16% </span> increased then last week
                </p>

                <div class="flex flex-wrap space-y-2 justify-around items-center">
                    <div class="h-[50%] w-[50%]">
                        <canvas class="p-4" id="chartPie-new"></canvas>
                    </div>
                    <div class="flex flex-col pb-4">
                        <div class="inline-flex items-center">
                            <div class="w-5 h-5 bg-[#C2095A] rounded-full mr-2"></div> Complete - 30%
                        </div>
                        <div class="inline-flex items-center">
                            <div class="w-5 h-5 bg-[#090446] rounded-full mr-2"></div> Incomplete - 70%
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
</template>

<script>
export default {
  name: 'TanningHoursComplete',
  data() {
    return {
      currentUrl:'',
    }
  },
 
  methods: {

  },
  mounted() {
       setTimeout(() => {
         
            // Chart pie - new
            const dataPie = {
                // labels: ["Complete ", "Incomplete"],
                datasets: [
                    {
                        label: " Value ",
                        data: [30, 70],
                        backgroundColor: [
                            "rgb(9, 4, 70)",
                            "rgb(194, 9, 90)",
                        ],
                        hoverOffset: 4,
                    },
                ],
            };

            const configPie = {
                type: "pie",
                data: dataPie,
                options: {
                    responsive: true,
                },
            };

            var chartBar = new Chart(document.getElementById("chartPie-new"), configPie);

       }, 2000);
       var url = document.URL.split('/');
        this.currentUrl = url[3]
  }
}
</script>
<style lang="">
    
</style>