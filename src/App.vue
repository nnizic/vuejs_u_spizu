<template>
  <div id="app">
    <nav id="nav" class="navbar navbar-expand-lg navbar-light bg-light">
      <router-link to="/">
        <img
          v-if="router.currentRoute.path != '/'"
          src="@/assets/logo.png"
          height="40"
          class="d-inline-block align-top"
          alt="logo"
          loading="lazy"
      /></router-link>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarToggler"
        aria-controls="navbarToggler"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarToggler">
        <ul class="navbar-nav ml-auto">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Početna</router-link>
          </li>
          <li class="nav-item" v-if="store.currentUser">
            <router-link to="/dashboard" class="nav-link">Kupovina</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/login" v-if="!store.currentUser" class="nav-link"
              >Prijava</router-link
            >
          </li>
          <li class="nav-item">
            <a
              href="#"
              @click.prevent="logout()"
              v-if="store.currentUser"
              class="nav-link"
              >Odjava</a
            >
          </li>
          <li class="nav-item" v-if="!store.currentUser">
            <router-link to="/signup" class="nav-link"
              >Registracija</router-link
            >
          </li>
        </ul>
      </div>
    </nav>

    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { firebase } from "@/firebase";
import router from "@/router";
import store from "@/store";

firebase.auth().onAuthStateChanged((user) => {
  console.log("***", user.email);
  if (user) {
    store.currentUser = user.email;
  }
});
export default {
  name: "app",
  data() {
    return {
      router,
      store,
    };
  },
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push({ name: "home" });
        });
    },
  },
};
</script>
