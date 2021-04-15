<template>
<div>
  <div class="wrapper">
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText" placeholder="Search wallpapers by tag"/>
      </form>
    </div>
  </div>
  <BackgroundList :backgrounds="backgrounds" />
</div>
</template>

<script>
import BackgroundList from "../components/BackgroundList.vue"
export default {
  name: 'Home',
  components: {
    BackgroundList
  },
  data() {
    return {
      searchText: '',
    }
  },
  computed: {
    backgrounds() {
      return this.$root.$data.backgrounds.filter(background => background.tags.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
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
