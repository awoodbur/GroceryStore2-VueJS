<template>
<div class="adminview">
  <Admin v-if="user" />
  <Login v-else />
</div>
</template>

<script>
import Admin from '@/components/Admin.vue';
import Login from '@/components/Login.vue';
import axios from 'axios';
export default {
  name: 'adminview',
  components: {
    Admin,
    Login,
  },
  async created() {
    try {
      let response = await axios.get('/api/users');
      this.$root.$data.user = response.data.user;
    } catch (error) {
      this.$root.$data.user = null;
    }
  },
  computed: {
    user() {
      return this.$root.$data.user;
    }
  }
}
</script>

<style scoped>
.adminview {
  padding-top: 10px;
}
</style>
