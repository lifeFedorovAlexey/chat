<template>
  <div id="app">
    <navigation />
    <div class="main-container">
      <center-container>
        <router-view />
      </center-container>
    </div>
    <!-- <sqreen-footer /> -->
  </div>
</template>

<script>
import Navigation from "./components/navigation";
import { USER_REQUEST } from "./store/actions/user";
// import SqreenFooter from "./components/footer/index.vue";

export default {
  name: "App",

  data: function() {
    return {};
  },

  components: {
    // SqreenFooter,
    Navigation,
  },

  created: function() {
    if (this.$store.getters.isAuthenticated) {
      this.$store.dispatch(USER_REQUEST);
    }
  },
  methods: {},
};
</script>

<style></style>
