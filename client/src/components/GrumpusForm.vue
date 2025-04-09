<script setup>
import { grumpusesService } from '@/services/GrumpusesService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableGrumpusData = ref({
  name: '',
  picture: '',
  description: '',
  likes: [{ name: '' }],
  dislikes: [{ name: '' }]
})

function addLike() {
  editableGrumpusData.value.likes.push({ name: '' });
}

function removeLike(index) {
  if (editableGrumpusData.value.likes.length > 1) {
    editableGrumpusData.value.likes.splice(index, 1);
  } else {
    editableGrumpusData.value.likes = [{ name: '' }];
  }
}

function addDislike() {
  editableGrumpusData.value.dislikes.push({ name: '' });
}

function removeDislike(index) {
  if (editableGrumpusData.value.dislikes.length > 1) {
    editableGrumpusData.value.dislikes.splice(index, 1);
  } else {
    editableGrumpusData.value.dislikes = [{ name: '' }];
  }
}

async function createGrumpus() {
  try {
    const grumpData = { ...editableGrumpusData.value };
    await grumpusesService.createGrumpus(grumpData);
    editableGrumpusData.value = {
      name: '',
      picture: '',
      description: '',
      likes: [{ name: '' }],
      dislikes: [{ name: '' }]
    };
    Pop.success('Grumpus created!');
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6 border p-4 rounded">
        <section>
          <h2 class="mb-3">Grumpus Form</h2>
          <form @submit.prevent="createGrumpus()" class="fs-3">
            <div class="mb-3">
              <label for="name" class="form-label">Name</label>
              <input v-model="editableGrumpusData.name" id="name" type="text" class="form-control">
            </div>
            <div class="mb-3">
              <label for="picture" class="form-label">Picture</label>
              <input v-model="editableGrumpusData.picture" id="picture" type="url" class="form-control">
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">Description</label>
              <textarea v-model="editableGrumpusData.description" name="" id="description"
                class="form-control"></textarea>
            </div>

            <div class="mb-3">
              <label class="form-label">Likes</label>
              <div v-for="(like, index) in editableGrumpusData.likes" :key="'like-' + index"
                class="d-flex align-items-center mb-2">
                <label :for="'likes-' + index" class="form-label me-2">Like:</label>
                <input v-model="editableGrumpusData.likes[index].name" :id="'likes-' + index" type="text"
                  class="form-control me-2">
                <button v-if="editableGrumpusData.likes.length > 1" @click="removeLike(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addLike" type="button" class="btn btn-outline-success btn-sm mt-2">Add Like</button>
            </div>

            <div class="mb-3">
              <label class="form-label">Dislikes</label>
              <div v-for="(dislike, index) in editableGrumpusData.dislikes" :key="'dislike-' + index"
                class="d-flex align-items-center mb-2">
                <label :for="'dislikes-' + index" class="form-label me-2">Dislike:</label>
                <input v-model="editableGrumpusData.dislikes[index].name" :id="'dislikes-' + index" type="text"
                  class="form-control me-2">
                <button v-if="editableGrumpusData.dislikes.length > 1" @click="removeDislike(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addDislike" type="button" class="btn btn-outline-success btn-sm mt-2">Add Dislike</button>
            </div>

            <div>
              <button class="btn btn-outline-secondary fs-2" type="submit">Submit Grumpus!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
/* You can add more custom styling here if needed */
</style>