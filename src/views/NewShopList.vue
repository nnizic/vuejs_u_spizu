<template>
  <div class="input-list">
    <div class="input-group mb-3">
      <div class="input-group-prepend">
        <span class="input-group-text" id="inputGroup-sizing-default"
          >Naziv nove liste</span
        >
      </div>
      <input
        v-model="newShopListName"
        type="text"
        class="form-control"
        arai-label="Naziv nove liste"
        aria-described="inputGroup-sizing-default"
      />
    </div>
    <div class="input-group mb-3">
      <input
        v-model="newShopListItems"
        type="text"
        class="form-control"
        placeholder="Dodaj namirnicu"
        aria-label="namirnica"
        aria-described="basic-addon2"
      />
      <div class="input-group-append">
        <button class="btn btn-outline-secondary" type="button">Dodaj</button>
      </div>
    </div>
  </div>
</template>
<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "newShopList",
  data: function () {
    return {
      store,
      newShopListName: "",
      newShopListItems: [],
    };
  },
  methods: {
    postNewShopList() {
      const shListName = this.newShopListName;
      const shListItems = this.newShopListItems;

      db.collection("shoppingLists")
        .add({
          name: shListName,
          items: shListItems,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.shListName = "";
          this.newShopListItems = [];
        })
        .catch((e) => {
          alert.error("Greška: ", e);
        });
    },
  },
};
</script>
<style>
.input-list {
  padding: 20px;
}
</style>
