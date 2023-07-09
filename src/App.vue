<script setup>
import { ref } from "vue";
import Graph from "./Graph.vue";
import bkkData from "./assets/bkk_population_growth.json";
import { selectData } from "./store";

const yearData = Object.assign({}, bkkData[0]);

delete yearData.name;
delete yearData.dcode;
</script>

<template>
   <div class="flex items-center justify-center">
      <div class="container mx-auto p-10 max-w-6xl">
         <section class="flex flex-col gap-5">
            <h1 class="text-28 font-bold">
               สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559
            </h1>
            <h2 class="text-18 font-bold">ลักษณะพื้นที่</h2>
            <p>
               กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดใน
               ประเทศไทยหากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
               คาดว่าจะสูงถึงเกือบเท่าตัวของ ประชากรที่ปรากฏในทะเบียน
               เราจึงเรียก กรุงเทพฯ ว่าเป็น
               <a href="https://en.wikipedia.org/wiki/Megacity" class="underline">
                  “อภิมหานคร (megacity)”
               </a>
               คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
            </p>
            <p>
               อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี
               2559 ดังแสดงในแผนภูมิ ต่อไปนี้
            </p>
         </section>
         <br />
         {{ selectData.district }}
         {{ selectData.from }}
         {{ selectData.to }}
         <section>
            <h2 class="text-18 font-bold">การเติบโต</h2>
            <br />
            <div class="flex flex-col sm:flex-row gap-3">
               <div class="flex flex-row gap-3">
                  <p>เขต</p>
                  <select class="bg-slate-500" v-model="selectData.district">
                     <option v-for="district in bkkData">
                        {{ district.name }}
                     </option>
                  </select>
               </div>
               <div class="flex flex-row gap-3">
                  <div class="flex flex-row gap-3">
                     <p>ตั้งแต่</p>
                     <select class="bg-slate-500" v-model="selectData.from">
                        <option v-for="(value, key) in yearData">
                           {{ key }}
                        </option>
                     </select>
                  </div>
                  <div class="flex flex-row gap-3">
                     <p>ถึง</p>
                     <select class="bg-slate-500" v-model="selectData.to">
                        <option v-for="(value, key) in yearData">
                           {{ key }}
                        </option>
                     </select>
                  </div>
               </div>
            </div>
            <br />
            <Graph />
         </section>
         <section class="mt-5">
            <h2 class="text-18 font-bold">แหล่งข้อมูล</h2>
            <ul class="list-disc p-5 underline">
               <li>
                  <a href="https://stat.bora.dopa.go.th/stat/statnew/statMONTH/statmonth/">สำนักบริหารการทะเบียน
                     กรมการปกครอง กระทรวงมหาดไทย,
                     จำนวนประชากร, สำนักบริหารการทะเบียน กรมการปกครอง
                     กระทรวงมหาดไทย, Editor. 2564: กรุงเทพฯ.</a>
               </li>

               <li>
                  <a href="http://www.nso.go.th/">
                     สำนักงานสถิติแห่งชาติ,
                     การสำรวจภาวะเศรษฐกิจและสังคมของครัวเรือน พ.ศ. 2563
                     สำนักงานสถิติแห่งชาติ, Editor. 2563: กรุงเทพฯ
                  </a>
               </li>
               <li>
                  <a href="http://www.price.moc.go.th/">สำนักดัชนีเศรษฐกิจการค้า กระทรวงพาณิชย์,
                     ข้อมูลดัชนีราคาผู้บริโภคทั่วไป, สำนักดัชนีเศรษฐกิจการค้า
                     กระทรวงพาณิชย์, Editor. 2563: กรุงเทพฯ.</a>
               </li>
            </ul>
         </section>
      </div>
   </div>
</template>

<style scoped></style>
