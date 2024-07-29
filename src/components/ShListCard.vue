<template>
  <div class="card">
    <div>
      <div class="card-header">
        <h3>
          {{ lista.name }} - <small>{{ lista.fromNow }}</small>
        </h3>
      </div>
      <ul class="list-group list-group-flush">
        <li
          class="list-group-item"
          v-for="(shopitem, i) in lista.items"
          :key="i"
        >
          <div v-if="!lista.active">{{ shopitem }}</div>
          <div v-else><input type="checkbox" /> {{ shopitem }}</div>
        </li>

        <div class="botun">
          <button type="button" @click="toggleActive(lista.id)">
            Arhiviraj Listu
          </button>
        </div>
      </ul>
    </div>
  </div>
</template>
<script>
import { db } from "@/firebase";
export default {
  props: ["lista"],
  name: "ShListCard",
  methods: {
    toggleActive(docId) {
      let docIdS = docId.toString();
      db.collection("allShoppingLists")
        .doc(docIdS)
        .update({ active: false })
        .then(() => {
          location.reload();
          alert("Lista arhivirana");
        })
        .catch((e) => {
          alert("Neuspjeh", e);
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
.botun {
  justify-content: center;
  align-items: center;
}
</style>
