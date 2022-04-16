import { VuexModule, Module, Mutation, Action, getModule } from "vuex-module-decorators";

import { store } from "../store/index";
import { Weather } from "@/model/clima";
import { http } from "@/api/config";
import moment from "moment";
import { AxiosError } from "axios";
import { WeatherData } from '@/model/TempoConsolidado';


@Module({
    dynamic: true,
    stateFactory: true,
    namespaced: true,
    name: "Tempo",
    store,
})

class Tempo extends VuexModule {

    private _date = moment().format("YYYY/MM/DD");

    get date(): string {
        console.log(this._date)
        return this._date
    }

    set date(date: string) {
        this._date = date
    }

    private _clima: Weather[] = [{
        applicable_date: '',
        created: '',
        max_temp: 0,
        min_temp: 0,
        the_temp: 0,
        weather_state_abbr: '',
        weather_state_name: ''
    }]

    private dadosDoClima: WeatherData = {
        consolidated_weather: [],
        latt_long: '',
        sun_rise: '',
        location_type: '',
        sun_set: '',
        time: '',
        timezone: '',
        timezone_name: '',
        title: '',
        woeid: 0,
    };

    get temperatura(): Weather[] {
        return this._clima
    }

    get getClima(): Weather[] {
        return this.dadosDoClima.consolidated_weather.map((p) => {
            return {
                applicable_date: p.applicable_date,
                created: p.created,
                the_temp: Math.floor(p.the_temp),
                max_temp: Math.floor(p.max_temp),
                min_temp: Math.floor(p.min_temp),
                weather_state_abbr: p.weather_state_abbr,
                weather_state_name: p.weather_state_name,
            };
        });
    }

    @Action({ commit: 'setClima' })
    async dadosDeMetereologia(): Promise<WeatherData[]> {
        try {
            const response = await http.get<WeatherData[]>('/455827');
            console.log(response.data);
            return response.data;
        } catch (error) {
            const err = error as AxiosError;
            if (err.response) {
                console.log('Ocorreu um erro ' + err.response.status);
                console.log(err.response.data);
            }
            return [];
        }
    }

    @Action({ commit: 'recebeClima' })
    async porData(data: string): Promise<Weather[]> {
        const response = await http.get<Weather[]>('/455827/' + data);
        console.log(response)
        return response.data;
    }

    @Action({ commit: 'avancarData' })
    async proximaData() {
        return this._date
    }

    @Action({ commit: 'retornarData' })
    async dataAnterior() {
        return this._date
    }

    @Mutation
    avancarData(date: string) {
        this._date = moment(date, "YYYY/MM/DD").add(1, "days").format("YYYY/MM/DD")
    }

    @Mutation
    retornarData(date: string) {
        this._date = moment(date, "YYYY/MM/DD").add(-1, "days").format("YYYY/MM/DD")
    }

    @Mutation
    setDate(date: string) {
        this._date = date
    }

    @Mutation
    recebeClima(clima: Weather[]) {
        this._clima = clima.map(c => {
            return {
                applicable_date: c.applicable_date,
                created: c.created,
                max_temp: Math.floor(c.max_temp),
                min_temp: Math.floor(c.min_temp,),
                the_temp: Math.floor(c.the_temp),
                weather_state_name: c.weather_state_name,
                weather_state_abbr: c.weather_state_abbr
            }

        })
    }


    @Mutation
    setClima(dadosDoclima: WeatherData) {
        this.dadosDoClima = dadosDoclima;
    }
}

const Clima = getModule(Tempo);
export default Clima;