<template>
  <div class="displayCharacter">
    <h2>{{ player.name }}</h2>
    <div class="healthbar">
      <div class="healthbar__value" :style="characterStyle"></div>
    </div>
    <img :src="player.img" />
  </div>
</template>

<script>
export default {
  props: {
    player: {
      type: Object,
      required: true
    },
    characterStyle: {
      type: Object,
      required: true
    }
  }
};
</script>

<style>
.displayCharacter {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}

h2 {
  margin: 0.25rem;
}

.healthbar {
  width: 100%;
  height: 40px;
  border: 1px solid #575757;
  margin: 1rem 0;
  background: #fde5e5;
  border-radius: 12px;
}

.healthbar__value {
  background-color: #00a876;
  width: 100%;
  height: 100%;
  border-radius: 12px;
}
</style>
