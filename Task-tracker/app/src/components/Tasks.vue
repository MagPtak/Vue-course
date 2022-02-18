<template>
  <!-- Wykonanie pętlo for na tablicy tasks, utworzenie dla kadego task elementu h3 i wyswietlenie zawartości text -->
  <div :key="task.id" v-for="task in tasks">
    <h3>{{ task.text }}</h3>
  </div>
</template>
<script>
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
};
</script>