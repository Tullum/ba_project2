<template>
  <div class="home">
    <h1>Homepage</h1>
    <v-container class="my-10">
      <v-layout row class="mb-3">
        <v-btn small color="#f76500" class="ma-1" @click="sortBy('title')">
          <span left small class="mdi mdi-folder-outline"></span>
          <span class="caption text-lowercase">By Project name</span>
        </v-btn>
        <v-btn small color="#f76500" class="ma-1" @click="sortBy('status')">
          <span
            small
            flat
            class="mdi mdi-checkbox-marked-circle-outline"
          ></span>
          <span class="caption text-lowercase">By Status</span>
        </v-btn>
      </v-layout>
      <v-card v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project title</div>
            <div>{{ project.title }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.people.name }}</div>
          </v-flex>
          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due by</div>
            <div>{{ project.dueBy }}</div>
          </v-flex>
          <v-flex xs2 sm4 md2>
            <div>
              <v-chip
                small
                :class="`${project.status} white--text caption my-2`"
                >{{ project.status }}
              </v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>
    </v-container>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "home",
  data() {
    return {
      clients: [],
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
  },
  methods: {
    sortBy(prop) {
      this.projects.sort((a, b) => (a[prop] < b[prop] ? -1 : 1)); //it's 1 if needed to change order -1 if not
    }
  }
};
</script>

<style>
.project.Complete {
  border-left: 4px solid green;
}
.project.Ongoing {
  border-left: 4px solid orange;
}
.project.Begin {
  border-left: 4px solid tomato;
}

.v-chip.Complete {
  background: rgb(0, 117, 0) !important;
}
.v-chip.Ongoing {
  background: orange !important;
}
.v-chip.Begin {
  background: #ff6347 !important;
}
</style>
