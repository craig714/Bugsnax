<script setup>
import { grumpusesService } from '@/services/GrumpusesService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableGrumpusData = ref({
  name: '',
  picture: '',
  description: '',
  likes: '',
  dislikes: ''
})

async function createGrumpus() {
  try {
    const grumpData = editableGrumpusData.value
    await grumpusesService.createGrumpus(grumpData)
    editableGrumpusData.value = {
      name: '',
      picture: '',
      description: '',
      likes: '',
      dislikes: ''
    }
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <section>
          <h2>Grumpus Form</h2>
          <form @submit.prevent="createGrumpus()">
            <div>
              <label for="name">Name</label>
              <input v-model="editableGrumpusData.name" id="name" type="text">
            </div>
            <div>
              <label for="picture">Picture</label>
              <input v-model="editableGrumpusData.picture" id="picture" type="url">
            </div>
            <div>
              <label for="description">Description</label>
              <textarea v-model="editableGrumpusData.description" name="" id="description"></textarea>
            </div>
            <div>
              <label for="likes">Likes</label>
              <input v-model="editableGrumpusData.likes" id="likes" type="text">
            </div>
            <div>
              <label for="dislikes">Dislikes</label>
              <input v-model="editableGrumpusData.dislikes" id="dislikes" type="text">
            </div>
            <div>
              <button class="btn btn-outline-secondary" type="submit">Submit Grumpus!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>