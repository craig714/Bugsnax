<script setup>
import { ref } from 'vue';


const editableGrumpusData = ref({

})
</script>


<template>
  <section class="container">
    <div class="row justify-content-center">
      <div class="col-md-6">
        <section>
          <h2>Grumpus Form</h2>
          <form @submit.prevent="">
            <div>
              <label for="name">Name</label>
              <input id="name" type="text">
            </div>
            <div>
              <label for="picture">Picture</label>
              <input id="picture" type="text">
            </div>
            <div>
              <label for="description">Description</label>
              <textarea name="" id="description"></textarea>
            </div>
            <div>
              <label for="likes">Likes</label>
              <input id="likes" type="text">
            </div>
            <div>
              <label for="dislikes">Dislikes</label>
              <input id="dislikes" type="text">
            </div>
          </form>
        </section>
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>