<template>
  <div>
    <div v-for="(shopItem, i) in shlists" :key="i">
      <h3>
        {{ shopItem.name }} <small>{{ shopItem.fromNow }}</small>
      </h3>
    </div>
  </div>
</template>

<script>
import store from "@/store";
import { db } from "@/firebase";
import moment from "moment";

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
                fromNow: moment(data.posted_at).locale("hr").fromNow(),
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

<style>
h3 small {
  color: blue;
  font-size: 0.5em;
}
</style>
