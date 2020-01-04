<template>
  <div class="clients">
    <h1 class="subheading greay--text">Clients</h1>
    <v-container class="my-10">
      <v-expansion-panels>
        <v-expansion-panel v-for="client in clients" :key="client.title">
          <v-expansion-panel-header>{{
            client.title
          }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">Address: {{ client.address }}</div>
            <div>Contact person: {{ client.person }}</div>
            <div>Contact email: {{ client.email }}</div>
            <div>Project status: {{ client.status }}</div>
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
  name: "clients",
  components: { Popup },
  data() {
    return {
      clients: [
        {
          title: "Jem&Fix",
          person: "Bob Bobsen",
          email: "bob@jf.dk",
          address: "Testvej 1, 5000 Odense",
          status: "Ongoing"
        },
        {
          title: "Føtex",
          person: "Gurli Gris",
          email: "girli@føtex.dk",
          address: "Testvej 1, 5000 Odense",
          status: "Complete"
        },
        {
          title: "Imerco",
          person: "Anders And",
          email: "aa@imerco.dk",
          address: "Testvej 1, 5000 Odense",
          status: "Begin"
        },
        {
          title: "Central Perk",
          person: "Chandler Bing",
          email: "bing@cp.dk",
          address: "Testvej 1, 5000 Odense",
          status: "Complete"
        }
      ]
    };
  }
};
</script>
