<template>
<div id="app">
  <div id="menu">
    <div id="left_side">
      <router-link to="/favorites">
        <div class="menu-item">
          <img src="/images/heart.png">
          <p>{{numberOfItems}} favorites</p>
        </div>
      </router-link>
    </div>
    <div id="brand">
      <router-link to="/">
        <img src="/images/home.jpg">
      </router-link>
    </div>
    <div id="right_side">
      <router-link to="/admin">
        <div class="menu-item">
          <img src="/images/gear.png">
          <p>Admin</p>
        </div>
      </router-link>
    </div>
  </div>
  <router-view />
  <div class="footer">
    <a href="https://github.com/awoodbur/creative3.git">Github Repository</a>
  </div>
</div>
</template>

<script>
export default {
  computed: {
    numberOfItems() {
      return this.$root.$data.favorites.length;
    }
  }
}
</script>

<style>
* {
  box-sizing: border-box;
}

body {
  margin: 25px 50px;
  background-image: linear-gradient(135deg, #e6f2ff 0%, #cce6ff 100%);
}

#menu {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-column-gap: 5px;
  grid-template-areas: "left_side brand right_side";
  margin-bottom: 50px;
}

#menu a {
  color: #B84901;
}

#brand {
  grid-area: brand;
  display: flex;
  justify-content: center;
}

#brand img {
  height: 200px;
}

#left_side {
  grid-area: left_side;
  display: flex;
  justify-content: flex-start;
}

#left_side img {
  width: 75px;
}

#right_side {
  grid-area: right_side;
  display: flex;
  justify-content: flex-end;
}

#right_side img {
  width: 75px;
}

.menu-item {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.menu-item p {
  margin: 0px;
}

.browse {
  margin-right: 50px;
}

.footer {
  margin: 0px -50px -25px -50px;
  flex-shrink: 0;
  padding: 20px 20px;
  justify-content: center;
  background-color: #23395B;
  display: flex
}

</style>
