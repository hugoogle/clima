<template>
  <div>
    <b-button-toolbar key-nav aria-label="Toolbar with button groups">
      <b-button-group class="mx-1">
        <b-button>&laquo;</b-button>
        <b-button @click="dataAnterior">&lsaquo;</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button @click="hoje">Hoje</b-button>
        <b-button @click="amanha">Amanha</b-button>
      </b-button-group>
      <b-button-group class="mx-1">
        <b-button @click="proximaData">&rsaquo;</b-button>
        <b-button>&raquo;</b-button>
      </b-button-group>
    </b-button-toolbar>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import moment from "moment";
import Tempo from "../store/store";

@Component
export default class Toolbar extends Vue {
  hoje() {
    const hoje = moment().format("YYYY/MM/DD");
    this.consultarPorData(hoje);
  }

  amanha() {
    const amanha = moment().add(1, "days").format("YYYY/MM/DD");
    this.consultarPorData(amanha);
  }

  async proximaData() {
    await Tempo.proximaData();
    this.consultarPorDia();
  }

  async dataAnterior() {
    await Tempo.dataAnterior();
    this.consultarPorDia();
  }

  consultarPorDia() {
    const newDate = Tempo.date;
    Tempo.porData(newDate);
  }

  consultarPorData(date: string) {
    Tempo.setDate(date);
    Tempo.porData(date);
  }
}
</script>

<style>
.btn-toolbar {
  justify-content: center;
}
</style>
