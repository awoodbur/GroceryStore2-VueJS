<template>
<div class="wrapper">
  <div class="backgrounds">
    <div v-if="backgrounds.length > 0">
      <div class="background" v-for="background in backgrounds" :key="background.id">
        <div class="info">
          <h1>{{background.title}}</h1>
        </div>
        <div class="image">
          <img :src="background.path">
        </div>
        <div class="options">
          <button v-on:click="removeItem(background)">Delete Submission</button>
        </div>
      </div>
    </div>
    <div v-else>
      <p>You have no submissions.</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'FavoritesList',
  props: {
    backgrounds: Array
  },
  methods: {
    async removeItem(background) {
      try {
        await axios.delete(`/api/photos/${background._id}`);
        this.$emit('deleteFinished');
      } catch (error) {
        console.log(error);
      }
    },
  }
}

</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
}

.backgrounds {
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.background {
  margin: 10px;
  margin-top: 50px;
  width: 200px;
}

.background img {
  padding: 1px;
  border: 1px solid #021a40;
  background-color:#c2c2d6;
  height: 250px;
  width: 200px;
  object-fit: cover;
}

.background .image {
  display: flex;
  justify-content: center;
  margin-bottom: 5px;
}

.info {
  background: #b3ecff;
  color: #000;
  padding: 10px 30px;
  height: 80px;
}

.info h1 {
  font-size: 20px;
}

.info h2 {
  font-size: 14px;
}

.info p {
  margin: 0px;
  font-size: 10px;
}


.options {
  display: flex;
}

button {
  height: 50px;
  background: #007399;
  color: white;
  border: none;
}

.auto {
  margin-left: auto;
}
</style>
