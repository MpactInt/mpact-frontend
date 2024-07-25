<template lang="">
    <div class="mb-4 w-full lg:w-[48%] bg-[#E9E9EC] rounded-md">
        <div class="shadow-lg rounded-lg overflow-hidden">
            <div class="flex flex-wrap space-y-2 justify-between items-center py-3 px-5">
                <p class="">
                    Average Completed Courses
                </p>
                <select
                    class="appearance-none border border-gray-200 text-lg px-6 py-0 rounded leading-tight focus:outline-none focus:border-gray-500 bg-[#E9E9EC]">
                    <option>2023</option>
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 1</option>
                </select>
            </div>

            <p class="text-sm px-5"><span class="text-[#00AC4F]"> 16% </span> increased then last week
            </p>

            <canvas class="p-10" id="chartBar-new"></canvas>
        </div>
    </div>
</template>
<script>

export default {
  name: 'AverageCompletedCourses2',
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
           // Chart bar - new
           const labelsBarChart = [
                "Jan",
                "Feb",
                "Mar",
                "Apr",
                "May",
                "Jun",
                "Jul",
                "Aug",
                "Sep",
                "Oct",
                "Nov",
                "Dec",
            ];
            const dataBarChart = {
                labels: labelsBarChart,
                datasets: [
                    {
                        label: " Attend ",
                        backgroundColor: "hsl(245, 89%, 15%)",
                        borderColor: "hsl(245, 89%, 15%)",
                        data: [10, 5, 20, 30, 45, 44, 70, 5, 20, 30, 45, 44],
                    },
                ],
            };

            const configBarChart = {
                type: "bar",
                data: dataBarChart,
                options: {
                    responsive: true,
                },
            };

            var chartBar = new Chart(
                document.getElementById("chartBar-new"),
                configBarChart
            );

       }, 2000);
       var url = document.URL.split('/');
        this.currentUrl = url[3]
  }
}
</script>
<style lang="">
    
</style>