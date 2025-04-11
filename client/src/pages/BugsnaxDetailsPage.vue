<script setup>
import { AppState } from '@/AppState.js';
import { bugsnaxLocationService } from '@/services/BugsnaxLocationsService.js';
import { bugsnaxService } from '@/services/BugsnaxService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
// @ts-ignore
import bugsnaxBG from '@/assets/img/Bugsnax_loading.webp';

const bugsnaxLocations = computed(() => AppState.bugsnaxLocations)
const bugsnax = computed(() => AppState.activeBugsnax)
const route = useRoute()






onMounted(() => {
  getLocationsByBugsnaxId()
  getBugsnaxById()
  AppState.activeBugsnax = null
})


async function getLocationsByBugsnaxId() {
  try {
    const bugsnaxId = route.params.bugsnaxId
    await bugsnaxLocationService.getLocationsByBugsnaxId(bugsnaxId)
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnax by location');
    logger.error('Could not get bugsnax by location', error)
  }
}

async function getBugsnaxById() {
  try {
    const bugsnaxId = route.params.bugsnaxId
    await bugsnaxService.getBugsnaxById(bugsnaxId)
  }
  catch (error) {
    Pop.error(error, 'Could not get bugsnax by Id');
    logger.error('Could not get bugsnax by Id', error)
  }
}

</script>


<template>

  <body class="arco-font arco-font-shadow" :style="{ backgroundImage: `url(${bugsnaxBG})` }">


    <div v-if="bugsnax" class="container">
      <div class="row">
        <div class="col-12">
          <div class="fw-bold fs-1 d-flex justify-content-center">
            {{ bugsnax.name }}
          </div>
          <div>
            <img class="cover-img mt-4" :src="bugsnax.picture" :alt="bugsnax.name">
          </div>
          <div class="mt-3 fs-4">
            <p class="fw-bold">Location/Locations:</p>
            <div v-if="bugsnaxLocations && bugsnaxLocations.length > 0">
              <div v-for="location in bugsnaxLocations" :key="location.locationId">
                {{ location.location[0].name }}
              </div>
            </div>
            <p v-else>No known locations</p>
          </div>
          <div class="mt-5 fs-4">
            <p class="fw-bold">Description:</p> <span>{{ bugsnax.description }}</span>
          </div>
          <div class="mt-5 fs-4">
            <p class="fw-bold">Strategy:</p> <span>{{ bugsnax.strategy }}</span>
          </div>
          <div class="d-flex justify-content-between mt-5">
            <div>
              <span class="fw-bold fs-5">Likes:</span>
              <div v-if="bugsnax.likes && bugsnax.likes.length > 0">
                <div v-for="like in bugsnax.likes" :key="like.name">
                  {{ like.name }}
                </div>
              </div>
              <p v-else>None</p>
            </div>
            <div>
              <span class="fw-bold fs-5">Dislikes:</span>
              <div v-if="bugsnax.dislikes && bugsnax.dislikes.length > 0">
                <div v-for="dislike in bugsnax.dislikes" :key="dislike.name">
                  {{ dislike.name }}
                </div>
              </div>
              <p v-else>None</p>
            </div>
            <div>
              <span class="fw-bold fs-5">Fears:</span>
              <div v-if="bugsnax.fears && bugsnax.fears.length > 0">
                <div v-for="fear in bugsnax.fears" :key="fear.name">
                  {{ fear.name }}
                </div>
              </div>
              <p v-else>None</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</template>


<style lang="scss" scoped>
.cover-img {
  width: 100%;
  max-height: 80dvh;
  object-fit: cover;
  border-radius: 10px;
  border: 3px solid #ffffff
}

body {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  min-height: 100dvh;
  padding: 2rem;
}
</style>