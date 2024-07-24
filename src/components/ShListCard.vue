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
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: ["lista"],
  name: "ShListCard",
};
</script>
<style>
h3 small {
  color: blue;
  font-size: 0.5em;
}
</style>
