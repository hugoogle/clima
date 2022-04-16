<template>
  <div>
    <b-container class="bv-example-row mb-3">
      <b-row cols="1" cols-sm="2" cols-md="4" cols-lg="6">
        <b-col v-for="(tempos, index) in clima" :key="index" class="card">
          <div class="card-body">
            <img
              :src="imagemSvg(tempos.weather_state_abbr)"
              class="card-img-top"
              alt="Imagem ilustrativa do produto"
            />
          </div>
          <b-card-text>
            <p class="estado_tempo">
              {{ tradutor(tempos.weather_state_name) }}
            </p>
            <p class="semana">
              {{ converterData(tempos.applicable_date) }}
            </p>
            <p>{{ tempos.the_temp }}ºC</p>
          </b-card-text>
          <div class="footer">
            <b> Min </b>{{ tempos.min_temp }}ºC / <b> Max </b
            >{{ tempos.max_temp }}ºC
          </div>
        </b-col>
      </b-row>
    </b-container>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

import Tempo from "../store/store";
import { Weather } from "../model/clima";
import { Traduzir } from "../util";

import moment from "moment";

@Component
export default class Header extends Vue {
  get clima(): Weather[] {
    console.log(Tempo.getClima, "asd");
    return Tempo.getClima;
  }

  imagemSvg(imagem: string): string {
    return "https://www.metaweather.com/static/img/weather/" + imagem + ".svg";
  }

  converterData(date: string): string {
    moment.locale("pt-br");
    const hoje = moment().calendar().substring(0, 4);
    const amanha = moment().add(1, "days").calendar().substring(0, 6);
    const data = moment(date).calendar();

    if (hoje == data.substring(0, 4)) {
      return "Hoje";
    } else if (amanha == data.substring(0, 6)) {
      return "Amanha";
    } else {
      return moment(date).format("dddd");
    }
  }

  tradutor(palavra: string): string {
    return new Traduzir().tradutor(palavra);
  }

  async mounted(): Promise<void> {
    await Tempo.dadosDeMetereologia();
  }
}
</script>

<style scoped>
header {
  background: #ffffff;
  padding: 20px;
  box-shadow: 0 5px 10px 0px #6b6b6b;
}

.semana {
  font-size: 1.5rem !important;
  font-weight: 400;
  letter-spacing: normal !important;
}

.clima {
  width: 28%;
}
.estado_tempo {
  font-size: 1.3rem;
  font-weight: 400;
  color: rgb(138, 138, 138);
  line-height: 1.375rem;
  letter-spacing: 0.0071428571em;
}
.footer {
  background-color: rgb(223, 222, 222);
}
</style>
