<script setup>
import { AppState } from '@/AppState.js';
import QuestCard from '@/components/QuestCard.vue';
import { questsService } from '@/services/QuestsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';



const quests = computed(() => AppState.quests)


onMounted(() => {
  getAllQuests()
})


async function getAllQuests() {
  try {
    await questsService.getAllQuests()
  }
  catch (error) {
    Pop.error(error, 'Could not get all quests');
    logger.log('Could not get all quests'.toUpperCase())
  }
}

</script>


<template>
  <div class="container">
    <div class="row">
      <div v-for="quest in quests" :key="quest.id" class="col-md-3">
        <QuestCard :questProp="quest" />
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>