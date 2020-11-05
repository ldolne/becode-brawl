import { createApp } from "vue";
import App from "./App.vue";
import Test from "./components/Test.vue";
import Player from "./components/Player.vue";

const app = createApp(App);

app.component('test', Test);
app.component('player', Player);

app.mount("#app");
