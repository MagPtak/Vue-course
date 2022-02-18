<template>
  <!-- Wykonanie pętlo for na tablicy tasks, utworzenie dla kadego task elementu h3 i wyswietlenie zawartości text -->
  <div :key="task.id" v-for="task in tasks">
    <Task :task="task" />
  </div>
</template>
<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Array,
  },
  components: {
    Task,
  },
};
</script>