<template>
<div>
  <div class="wrapper">
    <h1>Backgrounds</h1>
  </div>
  <BackgroundList :backgrounds="backgrounds" />
</div>
</template>

<script>
import axios from 'axios';
import BackgroundList from "../components/BackgroundList.vue"
export default {
  name: 'Home',
  components: {
    BackgroundList
  },
  data() {
    return {
      searchText: '',
      backgrounds: []
    }
  },
  created() {
      this.getPhotos();
  },
  methods: {
    async getPhotos() {
      try {
        let response = await axios.get("/api/photos/all");
        this.backgrounds = response.data;
      } catch (error) {
        this.error = error.response.data.message;
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

.search {
  border: 2px solid #ccc;
  border-radius: 6px;
  width: 50%;
}

form {
  display: table;
  width: 100%;
}

i {
  display: table-cell;
  padding-left: 10px;
  width: 1px;
}

input {
  display: table-cell;
  font-size: 20px;
  border: none !important;
  box-shadow: none !important;
  width: 100%;
  height: 40px;
}
</style>
