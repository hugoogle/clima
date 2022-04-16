<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <small class="texto">{{ temperatura.the_temp }}ºC</small>
    <p class="texto">{{ temperatura.weather_state_name }}</p>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "../components/HelloWorld.vue"; // @ is an alias to /src
import Tempo from "../store/store";

@Component({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  get temperatura() {
    return Tempo.temperatura[0];
  }
}
</script>

<style>
.texto {
  background-color: #42b983;
  font-size: 32px;
  color: white;
}
</style>
