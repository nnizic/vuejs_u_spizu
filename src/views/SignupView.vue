<template>
  <div class="login">
    <h1>Registracija</h1>

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
          <div class="form-group">
            <label for="exampleInputPassword2">Ponovi Zaporku</label>
            <input
              type="password"
              v-model="passwordRepeat"
              class="form-control"
              id="exampleInputPassword2"
              placeholder="Ponovi zaporku"
            />
          </div>
          <button type="button" @click="signup" class="btn btn-primary">
            Unesi
          </button>
        </form>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>
<script>
import { firebase } from "@/firebase.js";
export default {
  name: "SignUp",
  data() {
    return {
      username: "",
      password: "",
      passwordRepeat: "",
    };
  },
  methods: {
    signup() {
      if (this.password == this.passwordRepeat) {
        firebase
          .auth()
          .createUserWithEmailAndPassword(this.username, this.password)
          .then(function () {
            alert("Uspješna registracija");
          })
          .catch(function (error) {
            alert("Došlo je do greške ", error);
          });
      } else {
        this.password = "";
        this.passwordRepeat = "";
        alert("Zaporke se ne podudaraju!");
      }
    },
  },
};
</script>
