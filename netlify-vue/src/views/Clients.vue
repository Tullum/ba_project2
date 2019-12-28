<template>
  <div class="clients">
    <h1 class="subheading greay--text">Clients</h1>
    <v-container class="my-10">
      <Table />
    </v-container>
  </div>
</template>

<script>
import Table from "@/components/Table";

export default {
  name: "clients",
  components: { Table }
};
</script>
