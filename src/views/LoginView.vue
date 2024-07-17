<template>
  <div class="login">
    <h1>Prijava</h1>

    <div class="row">
      <div class="col"></div>
      <div class="col">
        <form>
          <div class="form-group">
            <label for="exampleInputEmail1">Email adresa</label>
            <input
              type="email"
              v-model="username"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Upiši email"
            />
            <small id="emailHelp" class="form-text text-muted">
              Email adresa je sigurna sa nama.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1">Zaporka</label>
            <input
              type="password"
              v-model="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Upiši zaporku"
            />
          </div>
          <button type="button" @click="login()" class="btn btn-primary">
            Unesi
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase";
export default {
  name: "LoginForm",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.username, this.password)
        .then((result) => {
          console.log("Prijava uspješna ", result);
          this.$router.replace({ name: "dashboard" });
        })
        .catch(function (e) {
          alert("Greška:", e);
        });
    },
  },
};
</script>
