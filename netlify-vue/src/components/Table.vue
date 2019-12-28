<template>
  <div class="table">
    <h1 class="subheading greay--text">Overview</h1>

    <v-container class="my-10">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Time spent {{ project.time }}</div>
            <div>{{ project.person }}</div>
            <div>{{ project.status }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "table",
  data() {
    return {
      projects: [
        {
          title: "Jem&Fix",
          person: "Bob Bobsen",
          time: "65 hours",
          status: "ongoing"
        },
        {
          title: "Føtex",
          person: "Gurli Gris",
          time: "4 hours",
          status: "complete"
        },
        {
          title: "Imerco",
          person: "Anders And",
          time: "10 hours",
          status: "begin"
        },
        {
          title: "Central Perk",
          person: "Chandler Bing",
          time: "3 hours",
          status: "complete"
        }
      ]
    };
  }
};
</script>
