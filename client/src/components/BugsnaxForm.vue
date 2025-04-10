<script setup>
import { bugsnaxService } from '../services/BugsnaxService';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableBugData = ref({
  name: '',
  picture: '',
  description: '',
  strategy: '',
  likes: [{ name: '' }],
  dislikes: [{ name: '' }],
  fears: [{ name: '' }]
})

function addLike() {
  editableBugData.value.likes.push({ name: '' });
}

function removeLike(index) {
  if (editableBugData.value.likes.length > 1) {
    editableBugData.value.likes.splice(index, 1);
  } else {
    editableBugData.value.likes = [{ name: '' }];
  }
}

function addDislike() {
  editableBugData.value.dislikes.push({ name: '' });
}

function removeDislike(index) {
  if (editableBugData.value.dislikes.length > 1) {
    editableBugData.value.dislikes.splice(index, 1);
  } else {
    editableBugData.value.dislikes = [{ name: '' }];
  }
}

function addFear() {
  editableBugData.value.fears.push({ name: '' });
}

function removeFear(index) {
  if (editableBugData.value.fears.length > 1) {
    editableBugData.value.fears.splice(index, 1);
  } else {
    editableBugData.value.fears = [{ name: '' }];
  }
}

async function createBug() {
  try {
    const bugData = { ...editableBugData.value };
    await bugsnaxService.createBug(bugData);
    editableBugData.value = {
      name: '',
      picture: '',
      description: '',
      strategy: '',
      likes: [{ name: '' }],
      dislikes: [{ name: '' }],
      fears: [{ name: '' }]
    };
    Pop.success('Bugsnak created!');
  } catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-12 border p-4 rounded">
        <section>
          <h2 class="mb-3">Bugsnax form</h2>
          <form @submit.prevent="createBug()" class="fs-3">
            <div class="mb-3"> <label for="bugName" class="form-label">Name</label> <input
                v-model="editableBugData.name" id="bugName" type="text" class="form-control"> </div>
            <div class="mb-3">
              <label for="bugPicture" class="form-label">Picture</label>
              <input v-model="editableBugData.picture" id="bugPicture" type="url" class="form-control">
            </div>
            <div class="mb-3">
              <label for="bugDescription" class="form-label">Description</label>
              <textarea v-model="editableBugData.description" id="bugDescription" type="text"
                class="form-control"></textarea>
            </div>
            <div class="mb-3">
              <label for="bugStrategy" class="form-label">Strategy </label>
              <input v-model="editableBugData.strategy" id="bugStrategy" type="text" class="form-control">
            </div>

            <div class="mb-3">
              <label class="form-label">Likes</label>
              <div v-for="(like, index) in editableBugData.likes" :key="'like-' + index"
                class="d-flex align-items-center mb-2">
                <label :for="'bugLikes-' + index" class="form-label me-2">Like:</label>
                <input v-model="editableBugData.likes[index].name" :id="'bugLikes-' + index" type="text"
                  class="form-control me-2">
                <button v-if="editableBugData.likes.length > 1" @click="removeLike(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addLike" type="button" class="btn btn-outline-success btn-sm mt-2">Add Like</button>
            </div>

            <div class="mb-3">
              <label class="form-label">Dislikes</label>
              <div v-for="(dislike, index) in editableBugData.dislikes" :key="'dislike-' + index"
                class="d-flex align-items-center mb-2">
                <label :for="'bugDislikes-' + index" class="form-label me-2">Dislike:</label>
                <input v-model="editableBugData.dislikes[index].name" :id="'bugDislikes-' + index" type="text"
                  class="form-control me-2">
                <button v-if="editableBugData.dislikes.length > 1" @click="removeDislike(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addDislike" type="button" class="btn btn-outline-success btn-sm mt-2">Add Dislike</button>
            </div>

            <div class="mb-3">
              <label class="form-label">Fears</label>
              <div v-for="(fear, index) in editableBugData.fears" :key="'fear-' + index"
                class="d-flex align-items-center mb-2">
                <label :for="'bugFears-' + index" class="form-label me-2">Fear:</label>
                <input v-model="editableBugData.fears[index].name" :id="'bugFears-' + index" type="text"
                  class="form-control me-2">
                <button v-if="editableBugData.fears.length > 1" @click="removeFear(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addFear" type="button" class="btn btn-outline-success btn-sm mt-2">Add Fear</button>
            </div>

            <div>
              <button class="btn btn-outline-secondary fs-2" type="submit">Submit Bug!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>