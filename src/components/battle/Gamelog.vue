<template>
  <section id="log" class="container">
    <h2>Battle Log</h2>
    <ul>
      <li v-for="(log, index) in logs" :key="index">
        <span
          :class="{
            'log--player1': log.playerTag === 'player1',
            'log--player2': log.playerTag === 'player2'
          }"
          >{{ log.actionBy }}</span
        >
        <span v-if="log.actionType === 'heal'">
          heals himself for
          <span class="log--heal">{{ log.actionValue }}</span
          >.
        </span>
        <span v-else-if="log.actionType === 'attack'">
          attacks and deals
          <span class="log--damage">{{ log.actionValue }}</span
          >.
        </span>
        <span v-else-if="log.actionType === 'yield'">
          surrenders and looses!
        </span>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    logs: {
      type: Array,
      required: true
    }
  }
};
</script>

<style>
#log {
  width: 100%;
  min-height: 20vh;
}

#log ul {
  list-style: none;
  max-height: 10vh;
  margin: 0;
  padding: 0;
  overflow: auto;
}

#log li {
  margin: 0.5rem 0;
}

.log--player1 {
  color: #7700ff;
}

.log--player2 {
  color: #da8d00;
}

.log--damage {
  color: red;
}

.log--specialDamage {
  color: purple;
}

.log--heal {
  color: green;
}
</style>
