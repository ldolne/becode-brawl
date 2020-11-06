<template>
  <div id="battle-screen">
    <gamelog :logs="logs"></gamelog>
    <div class="players">
      <section id="player1">
        <section>
          <display-character
            :player="player1"
            :character-style="player1BarStyles"
          ></display-character>
        </section>
        <section id="Player1Controls" class="container controls" v-if="!winner">
          <action-button
            :buttonName="buttonActions[0]"
            @on-click="attack(player2, player1)"
          ></action-button>
          <action-button
            :buttonName="buttonActions[1]"
            @on-click="heal(player1)"
          ></action-button>
          <action-button
            :buttonName="buttonActions[2]"
            @on-click="surrender(player1, player2)"
          ></action-button>
        </section>
      </section>
      <section id="player2">
        <section>
          <display-character
            :player="player2"
            :character-style="player2BarStyles"
          ></display-character>
        </section>
        <section id="Player2Controls" class="container controls" v-if="!winner">
          <action-button
            :buttonName="buttonActions[0]"
            @on-click="attack(player1, player2)"
          ></action-button>
          <action-button
            :buttonName="buttonActions[1]"
            @on-click="heal(player2)"
          ></action-button>
          <action-button
            :buttonName="buttonActions[2]"
            @on-click="surrender(player2, player1)"
          ></action-button>
        </section>
      </section>
    </div>
    <section id="gameover" class="container" v-if="winner">
      <gameover
        :winner="winner"
        :player1="player1"
        :player2="player2"
        @restart-game="startGame"
      ></gameover>
    </section>
  </div>
</template>

<script>
import DisplayCharacter from "../components/battle/DisplayCharacter";
import Gamelog from "../components/battle/Gamelog";
import ActionButton from "../components/battle/ActionButton";
import Gameover from "../components/battle/Gameover";

// other functions
function getRandomValue(min, max) {
  return Math.round(Math.random() * (max - min)) + min;
}

export default {
  components: {
    DisplayCharacter,
    Gamelog,
    ActionButton,
    Gameover
  },
  data() {
    return {
      buttonActions: ["ATTACK", "HEAL", "YIELD"],
      player1: {
        name: "MM",
        health: 100,
        tag: "player1",
        img: require("@/assets/leny.png")
      },
      player2: {
        name: "Luna",
        health: 100,
        tag: "player2",
        img: require("@/assets/leny.png")
      },
      currentRound: 0,
      winner: "",
      logs: []
    };
  },
  watch: {
    player1Health(value) {
      if (value <= 0 && this.player2Health <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player2";
      }
    },
    player2Health(value) {
      if (value <= 0 && this.player1Health <= 0) {
        this.winner = "draw";
      } else if (value <= 0) {
        this.winner = "player1";
      }
    }
  },
  computed: {
    player1Health() {
      return this.player1.health;
    },
    player2Health() {
      return this.player2.health;
    },
    player1BarStyles() {
      if (this.player1Health < 0) {
        return { width: "0%" };
      }
      return { width: this.player1Health + "%" };
    },
    player2BarStyles() {
      if (this.player2Health < 0) {
        return { width: "0%" };
      }
      return { width: this.player2Health + "%" };
    },
    mayUseSpecialAttack() {
      return this.currentRound % 3 !== 0;
    }
  },
  methods: {
    startGame() {
      this.player1.health = 100;
      this.player2.health = 100;
      this.currentRound = 0;
      this.winner = "";
      this.logs = [];
    },
    attack(target, attacker) {
      this.currentRound++;
      const attackValue = getRandomValue(2, 10);
      target.health -= attackValue;
      this.addToLog(attacker.name, attacker.tag, "attack", attackValue);
    },
    heal(target) {
      this.currentRound++;
      const healValue = getRandomValue(8, 20);
      if (target.health + healValue > 100) {
        target.health = 100;
      } else {
        target.health += healValue;
      }
      this.addToLog(target.name, target.tag, "heal", healValue);
    },
    surrender(target, opponent) {
      this.winner = opponent.tag;
      this.addToLog(target.name, target.tag, "yield", null);
    },
    addToLog(who, tag, what, value) {
      this.logs.unshift({
        actionBy: who,
        playerTag: tag,
        actionType: what,
        actionValue: value
      });
    }
  }
};
</script>

<style>
section {
  width: 90%;
  max-width: 40rem;
  margin: auto;
}

.container {
  text-align: center;
  padding: 0.5rem;
  margin: 1rem auto;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  border-radius: 12px;
  background-color: rgba(255, 255, 255, 0.5);
}

.players {
  display: flex;
  flex-flow: row wrap;
}

.controls {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
}

#gameover {
  position: relative;
  bottom: 500px;
}
</style>
