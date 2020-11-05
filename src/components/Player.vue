<template>
  <div class="player">
    <h2>{{ character[0].name }}</h2>
    <h3>POWER</h3>
    <div class="carousel">
      <button>left</button>
      <div class="img-box">
        <!-- NIQUE SA MERE VUE -->
        <img src="../../public/leny.png" />
        <img :src="character[0].url" alt="leny" />
      </div>
      <button>right</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let character = ref([{ name: 'leny', url: '../../public/leny.png' }]);
    let img = [{ img: '../../public/leny.png' }];
    console.log(img);
    return {
      character,
      img,
    };
  },
};
</script>

<style lang="scss">
.player {
  max-width: 400px;
  color: white;
  .img-box {
    height: 400px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    margin-bottom: 20px;
    overflow: hidden;

    img {
      width: 1000px;
    }
  }
}
</style>