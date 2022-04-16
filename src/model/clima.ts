export interface IWeather {
    weather_state_name: string,
    weather_state_abbr: string,
    created: string,
    applicable_date: string,
    min_temp: number,
    max_temp: number,
    the_temp: number,
}

export class Weather implements IWeather {
    constructor(
        public weather_state_name: string,
        public weather_state_abbr: string,
        public created: string,
        public applicable_date: string,
        public min_temp: number,
        public max_temp: number,
        public the_temp: number

    ) {
        this.max_temp = this.max_temp || 0;
        this.min_temp = this.min_temp || 0;
        this.the_temp = this.the_temp || 0;
    }
}