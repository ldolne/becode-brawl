<template>
  <div class="home">
    <img
      class="animate__animated animate__tada animate__delay-1s"
      alt="Becode logo"
      src="../assets/becode.svg"
    />
    <Player />
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from "@/components/HelloWorld.vue";
import Player from "@/components/Player.vue";

export default {
  name: "Home",
  components: {
    // HelloWorld
    Player
  }
};
</script>
