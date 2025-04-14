<script setup>
import { AppState } from '@/AppState.js';
import { Bugsnax } from '@/models/Bugsnax.js';
import { Grumpus } from '@/models/Grumpus.js';
import { Sauce } from '@/models/Sauce.js';
import { Tool } from '@/models/Tool.js';
import { bugsnaxService } from '@/services/BugsnaxService.js';
import { grumpusesService } from '@/services/GrumpusesService.js';
import { saucesService } from '@/services/SaucesService.js';
import { toolsService } from '@/services/ToolsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

// NOTE using activeGrumpus seems to change the picture of the current bugsnax, look into make other AppState variables to store these so they don't interfere. Might need to copy existing getById functions and call them something else?
defineProps({
  bugsnaxProp: { type: Bugsnax, required: true },
  grumpusProp: { type: Grumpus, required: true },
  sauceProp: { type: Sauce, required: true },
  toolsProp: { type: Tool, required: true }
})


onMounted(() => {
  // choosePropType()
})


// function choosePropType() {
//   try {
//     debugger
//     if (props.bugsnaxProp != null) getBugsnaxById()
//     else if (props.grumpusProp != null) getGrumpusesById()
//     else if (props.sauceProp != null) getSaucesById()
//     else if (props.toolsProp != null) getToolById()
//   }
//   catch (error) {
//     Pop.error(error);
//   }
// }

// async function getBugsnaxById() {
//   try {
//     // logger.log('like is now ', like.value)
//     const bugsnaxId = props.bugsnaxProp.id
//     await bugsnaxService.getBugsnaxByIdLike(bugsnaxId)
//   }
//   catch (error) {
//     Pop.error(error, 'Could not get bugsnax by id');
//     logger.log('Could not get bugsnax by id'.toUpperCase(), error)
//   }
// }
// async function getGrumpusesById() {
//   try {
//     // logger.log('like is now ', like.value)
//     const grumpusId = props.grumpusProp.id
//     await grumpusesService.getGrumpusesByIdLike(grumpusId)
//   }
//   catch (error) {
//     Pop.error(error, 'Could not get grumpus by id');
//     logger.log('Could not get grumpus by id'.toUpperCase(), error)
//   }
// }
// async function getSaucesById() {
//   try {
//     // logger.log('like is now ', like.value)
//     const sauceId = props.sauceProp.id
//     await saucesService.getSaucesByIdLike(sauceId)
//   }
//   catch (error) {
//     Pop.error(error, 'Could not get bugsnax by id');
//     logger.log('Could not get bugsnax by id'.toUpperCase(), error)
//   }
// }
// async function getToolById() {
//   try {
//     // logger.log('like is now ', like.value)
//     const toolId = props.toolsProp.id
//     await toolsService.getToolByIdLike(toolId)
//   }
//   catch (error) {
//     Pop.error(error, 'Could not get bugsnax by id');
//     logger.log('Could not get bugsnax by id'.toUpperCase(), error)
//   }
// }

</script>


<template>
  <div v-if="bugsnaxProp != null && bugsnaxProp != null">
    <RouterLink :to="{ name: 'BugsnaxDetails', params: { bugsnaxId: bugsnaxProp?.id } }">
      <div class="card mt-3 mb-3">
        <img class="ldf-img" :src="bugsnaxProp?.picture" alt="" :title="bugsnaxProp?.name">
        <!-- <div class="card-body">
          <h5 class="card-title arco-font">{{ like?.name }}</h5>
        </div> -->
      </div>
    </RouterLink>
  </div>
  <div v-if="grumpusProp != null && grumpusProp != null">
    <RouterLink :to="{ name: 'GrumpusDetails', params: { grumpusId: grumpusProp?.id } }">
      <div class="card mt-3 mb-3">
        <img class="ldf-img" :src="grumpusProp?.picture" alt="" :title="grumpusProp?.name">
        <!-- <div class="card-body">
          <h5 class="card-title arco-font">{{ like?.name }}</h5>
          <p class="card-text bobble-font"> {{ like?.description }}</p>
        </div> -->
      </div>
    </RouterLink>
  </div>
  <div v-if="sauceProp != null && sauceProp != null">
    <RouterLink :to="{ name: 'SauceDetails', params: { sauceId: sauceProp?.id } }">
      <div class="card mt-3 mb-3">
        <img class="ldf-img" :src="sauceProp?.picture" alt="" :title="sauceProp?.name">
        <!-- <div class="card-body">
          <h5 class="card-title arco-font">{{ like?.name }}</h5>
          <p class="card-text bobble-font"> {{ like?.description }}</p>
        </div> -->
      </div>
    </RouterLink>
  </div>
  <div v-if="toolsProp != null && toolsProp != null">
    <RouterLink :to="{ name: 'ToolDetails', params: { toolId: toolsProp?.id } }">
      <div class="card mt-3 mb-3">
        <img class="ldf-img" :src="toolsProp?.picture" alt="" :title="toolsProp?.name">
        <!-- <div class="card-body">
          <h5 class="card-title arco-font">{{ like?.name }}</h5>
        </div> -->
      </div>
    </RouterLink>
  </div>
</template>


<style lang="scss" scoped>
.ldf-img {
  width: 100%;
  max-height: 5dvh;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid #ffffff
}
</style>