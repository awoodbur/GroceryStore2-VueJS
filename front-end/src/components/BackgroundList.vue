<template>
<div class="wrapper">
  <div class="backgrounds">
    <div class="background" v-for="background in backgrounds" :key="background.id">
      <div class="info">
        <h1>{{background.title}}</h1>
      </div>
      <div class="image">
        <img :src="background.path">
      </div>
      <p>Tags: {{background.tags}}</p>
      <p class="photoName">By: {{background.user.firstName}} {{background.user.lastName}}</p>
      <p class="photoDate">Submitted: {{formatDate(background.created)}}</p>
    </div>
  </div>
</div>
</template>

<script>
import moment from 'moment';

export default {
  name: 'BackgroundList',
  props: {
    backgrounds: Array
  },
  methods: {
    formatDate(date) {
      if (moment(date).diff(Date.now(), 'days') < 15)
        return moment(date).fromNow();
      else
        return moment(date).format('d MMMM YYYY');
    }
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
