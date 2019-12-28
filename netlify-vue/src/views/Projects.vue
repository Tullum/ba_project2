<template>
  <div class="projects">
    <h1 class="subheading greay--text">Project overview</h1>
    <v-container class="my-10">
      <Table />
    </v-container>
  </div>
</template>

<script>
import Table from "@/components/Table";

export default {
  name: "projects",
  components: { Table }
};
</script>
