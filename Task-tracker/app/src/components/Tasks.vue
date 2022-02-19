<template>
  <!-- Wykonanie pętlo for na tablicy tasks, utworzenie dla kadego task elementu h3 i wyswietlenie zawartości text -->
  <div :key="task.id" v-for="task in tasks">
    <Task
      @toggle-reminder="$emit('toggle-reminder', task.id)"
      @delete-task="$emit('delete-task', task.id)"
      :task="task"
    />
  </div>
</template>
<script>
import Task from "./Task";
export default {
  name: "Tasks",
  props: {
    tasks: Object,
  },
  components: {
    Task,
  },
  emits: ["delete-task", "toggle-reminder"],
};
</script>