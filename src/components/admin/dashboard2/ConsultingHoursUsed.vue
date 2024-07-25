<template lang="">

        <div class="mb-4 w-full lg:w-[48%] bg-[#E9E9EC] rounded-md">
            <div class="shadow-lg rounded-lg overflow-hidden">
                <div class="flex flex-wrap space-y-2 justify-between items-center py-3 px-5">
                    <p class="">
                        Consulting Hours Used
                    </p>
                    <select
                        class="appearance-none border border-gray-200 text-lg px-6 py-0 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
                        <option>Jan-May</option>
                        <option>Option 1</option>
                        <option>Option 2</option>
                        <option>Option 1</option>
                    </select>
                </div>
                <p class="px-5 text-xl text-gray-400 uppercase font-bold my-4">
                    <span class="text-[#BE0858]">120</span>
                    <span class="text-[#313131]">Hours</span>
                </p>
                <canvas class="p-4" id="chartLine-new"></canvas>
            </div>
        </div>
</template>
<script>

export default {
  name: 'ConsultingHoursUsed',
  data() {
    return {
      currentUrl:'',
    }
  },
  components:{
   
  },
  methods: {

  },
  mounted() {
        setTimeout(() => {
            // Chart line - new
            const labels = ["Jan", "Feb", "Mar", "Apr", "May"];
            const data = {
                labels: labels,
                datasets: [
                    {
                        label: " Hours ",
                        backgroundColor: "hsl(252, 82.9%, 67.8%)",
                        borderColor: "hsl(252, 82.9%, 67.8%)",
                        data: [0, 10, 5, 30, 45],
                    },
                ],
            };

            const configLineChart = {
                type: "line",
                data,
                options: {
                    responsive: true,
                },
            };

            var chartLine = new Chart(
                document.getElementById("chartLine-new"),
                configLineChart
            );
        }, 1000);
    
  }
}
</script>
<style lang="">
    
</style>