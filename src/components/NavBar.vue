<template>
  <nav class="blue darken-1">
    <div class="nav-wrapper">
      <a href="#!" class="brand-logo center">
        <i class="large material-icons">access_alarms</i>
      </a>
      <ul class="left hide-on-med-and-down">
        <router-link tag="li" to="/Create" active-class="active" exact>
          <a href="#">Create</a>
        </router-link>
        <router-link tag="li" to="/" active-class="active" exact>
          <a href="#">Tasks</a>
        </router-link>
        <!-- <router-link tag="li" to="/Task/:id" active-class="active" exact>
          <a href="#">Task</a>
        </router-link> -->
      </ul>
    </div>
  </nav>
</template>

<script>
export default {
  name: "NavBar"
};
</script>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
nav {
  padding: 0 2em;
}
</style>