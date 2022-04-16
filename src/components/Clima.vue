<template>
  <div>
    <p>Previsão para o dia:</p>
    <p>{{ dataFormatada }}</p>

    <div>
      <img
        :src="imagemSvg(temperatura.weather_state_abbr)"
        alt="imagem da temperatura do dia"
        class="clima"
      />
    </div>
    <p class="temperatura">
      Min {{ temperatura.min_temp }}ºC | Max {{ temperatura.max_temp }}ºC
    </p>
    <p class="temperatura">Atual {{ temperatura.the_temp }}ºC</p>
  </div>
</template>

<script lang="ts">
import { Vue } from "vue-property-decorator";
import Tempo from "../store/store";
import moment from "moment";

export default class Clima extends Vue {
  get dataFormatada() {
    return moment(Tempo.temperatura[0].applicable_date).format("DD/MM/YYYY");
  }

  get temperatura() {
    return Tempo.temperatura[0];
  }

  imagemSvg(imagem: string): string {
    return "https://www.metaweather.com/static/img/weather/" + imagem + ".svg";
  }
}
</script>

<style>
.clima {
  width: 15%;
}

.temperatura {
  background-color: rgb(207, 207, 207);
  width: 14em;
  font-size: 20px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 15px;
}
</style>
