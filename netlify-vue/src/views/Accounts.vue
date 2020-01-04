<template>
  <div class="accounts">
    <h1 class="subheading greay--text">Accounts</h1>
    <v-container class="my-10">
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in accounts" :key="person.name">
          <v-card class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100">
                <img :src="person.avatar" alt="profileimage" />
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subheading">{{ person.name }}</div>
              <div class="grey--text">{{ person.job }}</div>
              <div class="grey--text">{{ person.email }}</div>
              <div class="grey--text">{{ person.phone }}</div>
            </v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "accounts",
  data() {
    return {
      accounts: [
        {
          avatar: "img/icons/profile1.png",
          name: "Baldur A. Sveinsson",
          job: "Lead developer",
          email: "baldur@bigsheepstudio.dk",
          phone: "+4560907814"
        },
        {
          avatar: "img/icons/profile2.png",
          name: "Sigurdur Baldursson",
          job: "Lead designer",
          email: "siggi@bigsheepstudio.dk",
          phone: "+4571803350"
        },
        {
          avatar: "img/icons/favicon-32x32.png",
          name: "Exstra account",
          job: "Test person",
          email: "test@bigsheepstudio.dk",
          phone: "+4512345678"
        },
        {
          avatar: "img/icons/favicon-32x32.png",
          name: "Exstra account2",
          job: "Test person2",
          email: "test2@bigsheepstudio.dk",
          phone: "+4587654321"
        }
      ]
    };
  }
};
</script>
