<template>
  <h2>Game over!</h2>
  <h3 v-if="winner === 'player1'">{{ player1.name }} won!</h3>
  <h3 v-else-if="winner === 'player2'">{{ player2.name }} won!</h3>
  <h3 v-else>It's a draw!</h3>
  <button @click="restartGame">START NEW GAME</button>
</template>

<script>
export default {
  emits: ["restart-game"],
  props: {
    winner: {
      type: String,
      required: true
    },
    player1: {
      type: Object,
      required: true
    },
    player2: {
      type: Object,
      required: true
    }
  },
  methods: {
    restartGame() {
      this.$emit("restart-game");
    }
  }
};
</script>

<style></style>
