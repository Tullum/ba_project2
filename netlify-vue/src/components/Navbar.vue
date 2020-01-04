<template>
  <nav>
    <v-app-bar clipped-right app color="#2b2b2b">
      <v-toolbar-title>
        <img src="img/icons/logoe_white.png" width="200" alt="" route="/" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!--Dropdown menu-->
      <v-menu offset-y>
        <template v-slot:activator="{ on: menu }">
          <v-tooltip bottom>
            <template v-slot:activator="{ on: tooltip }">
              <v-btn color="#f76500" v-on="{ ...menu }"
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
    </v-app-bar>

    <v-navigation-drawer
      app
      v-model="drawer"
      :mini-variant.sync="mini"
      permanent
      overflow
      clipped-top
      clipped-bottom
    >
      <v-layout column align-center justify-center>
        <v-list-item>
          <v-list-item-avatar size="50">
            <v-img src="img/icons/profile1.png"></v-img>
          </v-list-item-avatar>

          <p class="black--text subheading mt-2">Baldur A. Sveinsson</p>

          <v-btn color="#f76500" icon @click.stop="mini = !mini">
            <span class="mdi mdi-arrow-left-drop-circle-outline"></span>
          </v-btn>
        </v-list-item>

        <v-flex class="mt-5 mb-6">
          <Popup />
        </v-flex>
      </v-layout>
      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="link in links" :key="link.text" :to="link.route">
          <v-list-item-action>
            <v-icon color="#f76500" flat>{{ link.icon }}</v-icon>
          </v-list-item-action>

          <v-list-item-component>
            <v-list-item-title>{{ link.text }}</v-list-item-title>
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
      mini: true,
      drawer: true,
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
        { icon: "mdi mdi-printer-settings", text: "Prints", route: "/prints" },
        { icon: "mdi mdi-logout", text: "Sign Out", route: "/" }
      ]
    };
  }
};
</script>
