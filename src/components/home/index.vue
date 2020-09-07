/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <loading v-if="loading" />
    <div v-if="isAuthenticated">
      <div v-for="group in groups" :key="group.key">
        <br />
        <input
          type="radio"
          :id="group.ref"
          :value="group.ref"
          v-model="picked"
        />
        <label :for="group.ref">{{ group.type }}</label>
      </div>
      <!-- <input v-model="message" /><button @click="sendMessage">Send</button> -->
      <button @click.prevent="slidePrev(picked)">prev</button>
      <button @click.prevent="slideNext(picked)">next</button>

      <div v-for="(group, key) in groups" :key="key">
        <hooper
          :group="groupKey(key)"
          class="slider"
          :ref="group.ref"
          :touchDrag="false"
        >
          <slide v-for="(item, item_key) in group.items" :key="item_key">
            <img :src="item.img" alt="" />
          </slide>
        </hooper>
      </div>
    </div>
    <div v-if="!isAuthenticated && authStatus !== 'loading'">
      <h1>Welcome to DogeBook !</h1>
      <p>
        When meeting new doge friends is harder than ever, Dogebook closes the
        gap between all paws in the world
      </p>
      <login />
    </div>
  </div>
</template>

<style>
.slider {
  position: fixed;
  width: 400px;
  height: 400px;
}
.active {
  z-index: 999;
}
</style>

<script>
import io from "socket.io-client";
const socket = io("");
import { Hooper, Slide } from "hooper";
import "hooper/dist/hooper.css";
import { mapGetters } from "vuex";
import Login from "../login";

export default {
  components: {
    Hooper,
    Slide,
    Login,
  },
  methods: {
    slidePrev(ref) {
      this.$refs[ref][0].slidePrev();
    },
    slideNext(ref) {
      console.log(this.$refs);
      this.$refs[ref][0].slideNext();
    },
    sendMessage: function() {
      socket.emit("chat message", this.message);
    },
    groupKey: function(key) {
      return "group" + key;
    },
  },

  name: "home",
  computed: {
    ...mapGetters(["isAuthenticated", "authStatus"]),
    loading: function() {
      return this.authStatus === "loading" && !this.isAuthenticated;
    },
  },
  data() {
    return {
      messages: [],
      message: "",
      carouselData: 0,
      picked: "head",
      groups: [
        {
          type: "ноги",
          ref: "legs",
          items: [
            { img: "https://i.ibb.co/cvF4gJ4/image.png" },
            { img: "https://i.ibb.co/w41QGW7/image.png" },
          ],
        },
        {
          type: "тело",
          ref: "body",
          items: [
            { img: "https://i.ibb.co/c36K8r8/image.png" },
            { img: "https://i.ibb.co/F7bThWd/image.png" },
          ],
        },
        {
          type: "голова",
          ref: "head",
          items: [
            { img: "https://i.ibb.co/qJfXXz2/image.png" },
            { img: "https://i.ibb.co/qFCBBdK/image.png" },
          ],
        },
      ],
    };
  },
};
</script>
