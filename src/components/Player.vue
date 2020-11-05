<template>
  <div class="player">
    <h2>{{ characters[0].name }}</h2>
    <h3>POWER</h3>
    <div class="carousel">
      <button>left</button>
      <div class="img-box">
        <!-- NIQUE SA MERE VUE -->
        <!-- <img src="../../public/leny.png" /> -->
        <img :src="characters[0].img" alt="leny" />
      </div>
      <button>right</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      characters: [
        {
          name: "Leny",
          img: "./src/assets/leny.png"
        }
      ]
    };
  }
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
