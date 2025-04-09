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
  dislikes: '',
  fears: ''
})

function addLike() {
  editableBugData.value.likes.push({ name: '' });
}

function removeLike(index) {
  if (editableBugData.value.likes.length > 1) {
    editableBugData.value.likes.splice(index, 1);
  } else {
    editableBugData.value.likes = [{ name: '' }]; // Ensure at least one input remains
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
      dislikes: '',
      fears: ''
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
      <div class="col-md-6 border">
        <section>
          <h2>Bugsnax form</h2>
          <form @submit.prevent="createBug()">
            <div>
              <label for="bugName">Name</label>
              <input v-model="editableBugData.name" id="bugName" type="text">
            </div>
            <div>
              <label for="bugPicture">Picture</label>
              <input v-model="editableBugData.picture" id="bugPicture" type="url">
            </div>
            <div>
              <label for="bugDescription">Description</label>
              <textarea v-model="editableBugData.description" id="bugDescription" type="text"></textarea>
            </div>
            <div>
              <label for="bugStrategy">Strategy </label>
              <input v-model="editableBugData.strategy" id="bugStrategy" type="text">
            </div>
            <div>
              <label>Likes</label>
              <div v-for="(like, index) in editableBugData.likes" :key="index" class="d-flex align-items-center mb-2">
                <label :for="'bugLikes-' + index">Like Name:</label>
                <input v-model="editableBugData.likes[index].name" :id="'bugLikes-' + index" type="text"
                  class="form-control ms-2 me-2">
                <button v-if="editableBugData.likes.length > 1" @click="removeLike(index)" type="button"
                  class="btn btn-outline-danger btn-sm">Remove</button>
              </div>
              <button @click="addLike" type="button" class="btn btn-outline-success btn-sm">Add Like</button>
            </div>
            <div>
              <label for="bugDislikes">Dislikes</label>
              <input v-model="editableBugData.dislikes" id="bugDislikes" type="text">
            </div>
            <div>
              <label for="bugFears">Fears</label>
              <input v-model="editableBugData.fears" id="bugFears" type="text">
            </div>
            <div>
              <button class="btn btn-outline-secondary" type="submit">Submit Bug!</button>
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped>
.mb-2 {
  margin-bottom: 0.5rem;
}

.ms-2 {
  margin-left: 0.5rem;
}

.me-2 {
  margin-right: 0.5rem;
}
</style>