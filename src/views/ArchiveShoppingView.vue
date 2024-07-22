<template>
  <div>
    <h3 v-for="(shopItem, i) in shlists" :key="i">
      {{ shopItem.name }} - {{ shopItem.time }}
    </h3>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";

export default {
  name: "archiveList",
  data: function () {
    return {
      store,
      shlists: [],
    };
  },
  mounted() {
    this.getLists();
  },

  methods: {
    getLists() {
      db.collection("allShoppingLists")
        .orderBy("posted_at")
        .get()
        .then((query) => {
          this.shlists = [];
          query.forEach((doc) => {
            const data = doc.data();
            if (doc.id.includes(this.store.currentUser)) {
              this.shlists.push({
                name: data.name,
                time: data.posted_at,
                items: data.items,
              });
            }
          });
        })
        .catch((e) => {
          console.log("Greška", e);
        });
    },
  },
};
</script>

<style></style>
