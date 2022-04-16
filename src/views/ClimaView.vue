<template>
  <div class="about">
    <h1>Previsão do Tempo</h1>
    <Toolbar />
    <div><Clima /></div>
    <div><Temperatura /></div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Clima from "../components/Clima.vue";
import Tempo from "../store/store";
import Toolbar from "../components/Toolbar.vue";
import Temperatura from "../components/Temperatura.vue";

@Component({
  components: {
    Clima,
    Toolbar,
    Temperatura,
  },
})
export default class ClimaView extends Vue {
  private hoje = Tempo.date;

  mounted() {
    Tempo.porData(this.hoje);
  }
}
</script>
