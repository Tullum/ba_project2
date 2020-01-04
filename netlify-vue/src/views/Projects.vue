<template>
  <div class="projects">
    <h1 class="subheading greay--text">Project overview</h1>
    <v-container class="my-10">
      <v-expansion-panels>
        <v-expansion-panel v-for="project in projects" :key="project.title">
          <v-expansion-panel-header>{{
            project.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Time to spent {{ project.time }}</div>
            <div>Contact Person: {{ project.person }}</div>
            <div>Project status: {{ project.status }}</div>
            <div><Popup /></div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-container>
  </div>
</template>

<script>
import Popup from "@/components/Popup.vue";
export default {
  name: "projects",
  components: { Popup },
  data() {
    return {
      projects: [
        {
          title: "Jem&Fix",
          person: "Bob Bobsen",
          time: "65 hours",
          status: "Ongoing"
        },
        {
          title: "Føtex",
          person: "Gurli Gris",
          time: "4 hours",
          status: "Complete"
        },
        {
          title: "Imerco",
          person: "Anders And",
          time: "10 hours",
          status: "Begin"
        },
        {
          title: "Central Perk",
          person: "Chandler Bing",
          time: "3 hours",
          status: "Complete"
        }
      ]
    };
  }
};
</script>
