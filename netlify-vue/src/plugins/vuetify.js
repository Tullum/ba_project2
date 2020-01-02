import Vue from "vue";
import Vuetify from "vuetify/lib";

Vue.use(Vuetify);

export default new Vuetify({
  /*theme: {
    //figure out how to change colors
    primary: "#9652ff", //purple
    success: "#3cd1c2", //light green
    info: "#ffaa2c", //orange
    error: "#f83e70" //pink/red
  },*/
  icons: {
    iconfont: "mdi"
  }
});
