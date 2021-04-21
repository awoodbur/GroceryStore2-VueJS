<template>
<div>
  <div class="wrapper">
    <div class="menu">
      <p><a @click="toggleUpload"><i class="fas fa-image fa-3x">Add Image</i></a></p>
      <h2>Logged in as: {{user.firstName}} {{user.lastName}} <a @click="logout"><i class="fas fa-sign-out-alt fa-3x"></i></a></h2>
      <uploader :show="show" @close="close" @uploadFinished="uploadFinished" />
    </div>
    <div class="edit" v-if="backgrounds.length > 0">
      <h2>Edit tags</h2>
      <div class="search">
        <form class="pure-form">
          <input v-model="replaceText" placeholder="Enter new tags here"/>
        </form>
      </div>
    <EditList :backgrounds="backgrounds" :newtag="replaceText" @replaceFinished="replaceFinished" />
    </div>
    <div v-else>
      <p>You have no submissions to edit.</p>
    </div>
  </div>
</div>
</template>

<script>
import axios from 'axios';
import Uploader from '@/components/Uploader.vue';
import EditList from '@/components/EditList.vue';
export default {
  name: 'Admin',
  components: {
    Uploader,
    EditList
  },
  data() {
    return {
      show: false,
      replaceText: "",
      backgrounds: [],
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    },
  },
  created() {
    this.getPhotos();
  },
  methods: {
    async replaceFinished() {
      console.log('does this get called')
      this.getPhotos();
    },
    async logout() {
      try {
        await axios.delete("/api/users");
        this.$root.$data.user = null;
      } catch (error) {
        this.$root.$data.user = null;
      }
    },
    async getPhotos() {
      try {
        let response = await axios.get("/api/photos");
        this.backgrounds = response.data;
      } catch (error) {
        this.error = error.response.data.message;
      }
    },
    close() {
      this.show = false;
    },
    toggleUpload() {
      this.show = true;
    },
    async uploadFinished() {
      this.show = false;
      this.getPhotos();
    },

  }
}
</script>

<style scoped>
.menu {
  width: 100%;
  display: flex;
  justify-content: space-around;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
}

.search {
  border: 2px solid #ccc;
  border-radius: 6px;
  width: 300px;
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
