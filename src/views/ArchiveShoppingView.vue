<template>
  <div>
    <div
      class="btn-toolbar"
      role="toolbar"
      aria-label="Toolbar sa grupiranim botunima"
    >
      <div class="btn-group" role="group" aria-label="Liste za u spizu">
        <button
          type="button"
          @click="activeList = true"
          class="btn btn-secondary"
        >
          Aktivne Liste
        </button>

        <button
          type="button"
          @click="activeList = false"
          class="btn btn-secondary"
        >
          Arhiva Lista
        </button>
      </div>
    </div>
    <div v-if="!activeList">
      <sh-list-card
        v-for="(shopitem, i) in filteredLists"
        :key="i"
        :lista="shopitem"
      />
    </div>
    <div v-else>
      <sh-list-card
        v-for="(shopitem, i) in actFilteredLists"
        :key="i"
        :lista="shopitem"
      />
    </div>
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
      activeList: true,
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
                id: doc.id,
                name: data.name,
                time: data.posted_at,
                fromNow: moment(data.posted_at).locale("hr").fromNow(),
                items: data.items,
                active: data.active,
              });
            }
          });
        })
        .catch((e) => {
          console.log("Greška", e);
        });
    },
  },
  computed: {
    filteredLists() {
      return this.shlists.filter((lista) => !lista.active);
    },
    actFilteredLists() {
      return this.shlists.filter((lista) => lista.active);
    },
  },
  components: {
    ShListCard,
  },
};
</script>

<style></style>
