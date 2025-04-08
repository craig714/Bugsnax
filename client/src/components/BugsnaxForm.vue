<script setup>
import { adminService } from '@/services/AdminService.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';

const editableBugData = ref({
  name: '',
  picture: '',
  description: '',
  strategy: '',
  likes: '',
  dislikes: '',
  fears: '',
})

async function postBug() {
  try {
    await adminService.postBug(editableBugData.value)
  }
  catch (error) {
    Pop.error(error);
  }
}
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6  border">
        <section>
          <h2>Bugsnax form</h2>
          <form @submit.prevent="postBug()">
            <div>
              <label for="bugName">Name</label>
              <input v-model="editableBugData.name" id="bugName" type="text">
            </div>
            <div>
              <label for="bugPicture">Picture</label>
              <input v-model="editableBugData.picture" id="bugPicture" type="text">
            </div>
            <div>
              <label for="bugDescription">Description</label>
              <input v-model="editableBugData.description" id="bugDescription" type="text">
            </div>
            <div>
              <label for="bugStrategy">Strategy </label>
              <input v-model="editableBugData.strategy" id="bugStrategy" type="text">
            </div>
            <div>
              <label for="bugLikes">Likes</label>
              <input v-model="editableBugData.likes" id="bugLikes" type="text">
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


<style lang="scss" scoped></style>