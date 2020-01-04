<template>
  <v-dialog max-width="600px">
    <template v-slot:activator="{ on: dialog }">
      <v-tooltip bottom>
        <template v-slot:activator="{ on: tooltip }">
          <v-btn color="#f76500" v-on="{ ...dialog }">
            <span small class="mdi mdi-plus-circle-outline"></span>
            <!--<span>Add project</span>-->
          </v-btn>
        </template>
      </v-tooltip>
    </template>
    <v-card>
      <v-card-title>
        <h2>Add new</h2>
      </v-card-title>
      <v-card-text>
        <v-form class="px-5" ref="form">
          <v-text-field
            label="Name"
            v-model="name"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field
            label="Contact person"
            v-model="person"
            :rules="nameRules"
          ></v-text-field>
          <v-text-field label="Time spent" v-model="time" :rules="inputRules">
          </v-text-field>
          <v-text-field
            label="Project status"
            v-model="status"
            :rules="nameRules"
          ></v-text-field>
          <v-btn color="#f76500" class="mx-0 mt-3" @click="submit">
            Add project
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: "Popup",
  data() {
    return {
      name: "",
      person: "",
      time: "",
      status: "",
      nameRules: [
        v => !!v || "Name is required",
        v => (v && v.length <= 10) || "Maximum lenght is 10 characters"
      ]
      /*emailRules: [
        v => !!v || "E-mail is required",
        v => /.+@.+\..+/.test(v) || "E-mail must be valid"
      ]*/
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        // next comment is needed to make console.log working
        // eslint-disable-next-line no-console
        console.log(this.name, this.person, this.time, this.status);
      }
    }
  }
};
</script>
