<template>
  <div class="input-list">
    <form>
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
          v-model="newShopListItem"
          type="text"
          class="form-control"
          placeholder="Dodaj namirnicu"
          aria-label="namirnica"
          aria-described="basic-addon2"
        />
        <div class="input-group-append">
          <button
            class="btn btn-outline-secondary"
            type="button"
            @click="addShopItem"
          >
            Dodaj
          </button>
        </div>
      </div>
      <h3 v-for="(shopItem, i) in newShopListItems" :key="i">
        {{ shopItem }}
      </h3>
      <button type="button" @click="postNewShopList()" class="btn btn-primary">
        Spremi Listu
      </button>
    </form>
  </div>
</template>
<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "newList",
  data: function () {
    return {
      store,
      newShopListName: "",
      newShopListItem: "",
      newShopListItems: [],
    };
  },
  methods: {
    addShopItem() {
      this.newShopListItems.push(this.newShopListItem);
      this.newShopListItem = "";
    },
    postNewShopList() {
      const shListName = this.newShopListName;
      const shListItems = this.newShopListItems;
      db.collection("allShoppingLists")
        .doc(store.currentUser + Date.now())
        .set({
          name: shListName,
          items: shListItems,
          email: store.currentUser,
          posted_at: Date.now(),
        })
        .then((doc) => {
          console.log("Spremljeno", doc);
          this.newShopListName = "";
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
