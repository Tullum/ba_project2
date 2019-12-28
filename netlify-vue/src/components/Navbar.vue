<template>
  <nav>
    <v-toolbar flat app>
      <v-app-bar-nav-icon
        class="grey--text"
        @click="drawer = !drawer"
      ></v-app-bar-nav-icon>
      <v-toolbar-title class="text-uppercase grey--text">
        <span class="font-weight-light">BIGSHEEP</span>
        <span>Studio</span>
      </v-toolbar-title>
      <v-spacer></v-spacer>

      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn color="grey" v-on="{ ...menu }"
                ><span class="mdi mdi-account-outline"></span>
                <span>Profile</span>
                <span class="mdi mdi-arrow-down-drop-circle-outline"></span>
              </v-btn>
            </template>
            <span>Im A ToolTip</span>
          </v-tooltip>
        </template>
        <v-list>
          <v-list-item
            v-for="link in links"
            :key="link.text"
            :to="link.route"
            @click="links"
          >
            <v-list-item-action>
              <v-icon>{{ link.icon }}</v-icon>
            </v-list-item-action>
            <v-list-item-component>
              <v-list-item-title>{{ link.text }}</v-list-item-title>
            </v-list-item-component>
          </v-list-item>
        </v-list>
      </v-menu>

      <!--Dropdown menu-->

      <v-btn flat color="grey">
        <span>Sign Out</span>
        <span class="mdi mdi-logout"></span>
      </v-btn>
    </v-toolbar>
    <v-navigation-drawer v-model="drawer" app class="primary">
      <!-- the drawer don't work without the "app" -->
      <v-layout column align-center justify-center>
        <v-flex class="mt-5">
          <v-avatar size="100">
            <img src="img/icons/profile1.png" alt="" />
          </v-avatar>
          <p class="white--text subheading mt-2">Baldur A. Sveinsson</p>
        </v-flex>
        <v-flex class="mt-5 mb-6">
          <Popup />
        </v-flex>
      </v-layout>
      <v-list>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon class="white--text">{{ link.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-component>
            <v-list-item-title class="white--text">{{
              link.text
            }}</v-list-item-title>
          </v-list-item-component>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </nav>
</template>

<script>
import Popup from "./Popup.vue";
export default {
  name: "Navbar",
  components: { Popup },
  data() {
    return {
      drawer: false,
      items: [
        { title: "Click Me1" },
        { title: "Click Me2" },
        { title: "Click Me3" },
        { title: "Click Me4" }
      ],
      links: [
        {
          icon: "mdi mdi-home-circle-outline",
          text: "Home",
          route: "/"
        },
        {
          icon: "mdi mdi-account-group-outline",
          text: "Clients",
          route: "/clients"
        },
        {
          icon: "mdi mdi-clipboard-text-multiple-outline",
          text: "Projects",
          route: "/projects"
        },
        {
          icon: "mdi mdi-account-outline",
          text: "Accounts",
          route: "/accounts"
        },
        { icon: "mdi mdi-printer-settings", text: "Prints", route: "/prints" }
      ]
    };
  }
};
</script>
