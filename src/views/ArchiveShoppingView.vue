<template>
  <div>
    <sh-list-card v-for="(shopitem, i) in shlists" :key="i" :lista="shopitem" />
  </div>
</template>

<script>
import store from "@/store";
import ShListCard from "@/components/ShListCard.vue";
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
  components: {
    ShListCard,
  },
};
</script>

<style></style>
