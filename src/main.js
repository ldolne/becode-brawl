import { createApp } from "vue";
import App from "./App.vue";
import SelectionScreen from "./components/SelectionScreen.vue";
import BattleScreen from "./components/BattleScreen.vue";
import Player from "./components/Player.vue";

const app = createApp(App);

app.component("selection-screen", SelectionScreen);
app.component("battle-screen", BattleScreen);
app.component("player", Player);

app.mount("#app");
