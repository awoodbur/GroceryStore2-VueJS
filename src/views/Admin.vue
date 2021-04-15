<template>
<div>
  <div class="wrapper">
    <h2>Edit tags</h2>
    <div class="search">
      <form class="pure-form">
        <input v-model="searchText" placeholder="Search wallpapers by title"/>
      </form>
    </div>
    <div class="search">
      <form class="pure-form">
        <input v-model="replaceText" placeholder="Enter new tags here"/>
      </form>
    </div>
  </div>
  <EditList :backgrounds="backgrounds" :newtag="replaceText" />
</div>
</template>

<script>
import EditList from "../components/EditList.vue"
export default {
  name: 'Admin',
  components: {
    EditList
  },
  data() {
    return {
      searchText: '',
      replaceText: "",
    }
  },
  computed: {
    backgrounds() {
      return this.$root.$data.backgrounds.filter(background => background.name.toLowerCase().search(this.searchText.toLowerCase()) >= 0);
    }
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
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
