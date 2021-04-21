<template>
<div>
  <div class="favorites" v-if="user">
    <h1 style="text-align:center">Your Backgrounds</h1>
    <hr>
    <FavoritesList :backgrounds="backgrounds" @deleteFinished="deleteFinished"/>
  </div>
  <div v-else>
    <p>Login to see your backgrounds</p>
  </div>

</div>
</template>

<script>
import FavoritesList from "../components/FavoritesList.vue"
import axios from 'axios';
export default {
  name: 'Favorites',
  components: {
    FavoritesList
  },
  data() {
    return {
      backgrounds: [],
    }
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
      this.getPhotos();
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  },
  methods: {
    async getPhotos() {
      try {
        this.response = await axios.get("/api/photos");
        this.backgrounds = this.response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    async deleteFinished() {
      console.log('ya this is called')
      this.getPhotos();
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
  border: 1px solid #ccc;
  border-radius: 4px;
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
