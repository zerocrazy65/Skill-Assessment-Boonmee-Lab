<script setup>
import { ref, onMounted, watch } from "vue";
import bkkData from "./assets/bkk_population_growth.json";
import { selectData } from "./store";

const chartCanvas = ref(null);
const selectIndex = ref(0)

onMounted(() => {
   findDataByDistrict()
   drawChart();
});

watch(selectData, () => {
   findDataByDistrict()
   drawChart();
})

const findDataByDistrict = () => {
   selectIndex.value = bkkData.findIndex((data) => data.name === selectData.district)
}

function drawChart() {
   const canvas = chartCanvas.value;
   const ctx = canvas.getContext("2d");
   const data = [
      { value: bkkData[selectIndex.value]["2550"] },
      { value: bkkData[selectIndex.value]["2551"] },
      { value: bkkData[selectIndex.value]["2552"] },
      { value: bkkData[selectIndex.value]["2553"] },
      { value: bkkData[selectIndex.value]["2554"] },
      { value: bkkData[selectIndex.value]["2555"] },
      { value: bkkData[selectIndex.value]["2556"] },
      { value: bkkData[selectIndex.value]["2557"] },
      { value: bkkData[selectIndex.value]["2558"] },
      { value: bkkData[selectIndex.value]["2559"] },
   ];

   const barHeight = 10;
   const chartWidth = canvas.width;
   const yLabelMargin = 5;
   const x = 50;

   // Clear the canvas
   ctx.clearRect(0, 0, canvas.width, canvas.height);
   // Draw the bars
   for (let i = 0; i < data.length; i++) {
      const bar = data[i];
      const value = parseFloat(bar.value.slice(0, -1));
      const barWidth =
         chartWidth *
         (value /
            Math.max(...data.map((d) => parseFloat(d.value.slice(0, -1)))));
      const y = i * (barHeight + yLabelMargin);

      // Draw the bar
      ctx.fillStyle = "#ED2E7C";
      ctx.fillRect(x, y, barWidth * 1, barHeight);
   }
}
</script>

<template>
   <div class="flex flex-row outside w-full gap-5">
      <flex class="flex flex-col layout">
         <p>2550</p>
         <p>2551</p>
         <p>2552</p>
         <p>2553</p>
         <p>2554</p>
         <p>2555</p>
         <p>2556</p>
         <p>2557</p>
         <p>2558</p>
         <p>2559</p>
      </flex>
      <canvas ref="chartCanvas" height="150"></canvas>
   </div>
</template>

<style scoped>
.layout {
   gap: 15px;
}

.outside {
   justify-content: center;
}

canvas {
   width: 700px;
}

@media screen and (max-width: 800px) {
   .outside {
      justify-content: left;
   }

   p {
      font-size: 10px;
   }

   .layout {
      gap: 10px;
   }

   canvas {
      width: 500px;
   }
}

@media screen and (max-width: 580px) {
   .layout {
      gap: 3px;
   }

   canvas {
      width: 350px;
   }
}

@media screen and (max-width: 440px) {
   .layout {
      gap: 0px;
   }

   canvas {
      width: 300px;
   }
}</style>
