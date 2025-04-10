<script setup>
import { AppState } from '@/AppState.js';
import { grumpusesLocationService } from '@/services/GrumpusLocationsService.js';
import { questsService } from '@/services/QuestsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';



const grumpusLocations = computed(() => AppState.grumpusLocations)
const quest = computed(() => AppState.activeQuest)

const route = useRoute()

onMounted(()=>{
  getQuestById()
})




async function getQuestById(){
  try {
    const questId = route.params.questId
    await questsService.getQuestById(questId)
    getGrumpusLocationsByGrumpusId()
  }
  catch (error){
    Pop.error(error, 'Could not get quest by id');
    logger.log('Could not get quest by id'.toUpperCase(), error)
  }
}

async function getGrumpusLocationsByGrumpusId() {
  try {
    // debugger
    const grumpusId = quest.value?.grumpusId
    await grumpusesLocationService.getGrumpusLocationsByGrumpusId(grumpusId)

  }
  catch (error) {
    Pop.error(error, 'Could not get GrumpusLocation');
    logger.log('Could not get GrumpusLocation'.toUpperCase(), error)
  }
}


// function setActiveQuest() {
//   try {
    
//   }
//   catch (error) {
//     Pop.error(error, 'Could not set activeQuest');
//     logger.log('Could not set activeQuest'.toUpperCase(), error)
//   }
// }


</script>


<template>
  QUEST DETAILS!!!
</template>


<style lang="scss" scoped></style>