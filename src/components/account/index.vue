/** * Created by vouill on 11/13/17. */

<template>
  <div>
    <div class="headline">
      <h1>Твой профиль</h1>
    </div>
    <p v-if="profile.name">
      <strong>Имя:</strong> {{ profile.title }} {{ profile.name }}
    </p>
  </div>
</template>

<style lang="scss" scoped>
.headline {
  margin-top: 1em;
  display: flex;
}
</style>

<script>
import { mapState } from "vuex";

export default {
  name: "account",
  computed: mapState({ profile: (state) => state.user.profile }),
};
</script>
