import { Weather } from "./clima";

export interface IWeatherData {
  consolidated_weather: Weather[];
  latt_long: string;
  location_type: string;
  sun_rise: string | Date;
  sun_set: string | Date;
  time: string | Date;
  timezone: string;
  timezone_name: string;
  title: string;
  woeid: number;
}

export class WeatherData implements IWeatherData {
  constructor(
    public consolidated_weather: Weather[],
    public latt_long: string,
    public location_type: string,
    public sun_rise: string | Date,
    public sun_set: string | Date,
    public time: string | Date,
    public timezone: string,
    public timezone_name: string,
    public title: string,
    public woeid: number
  ) {
    this.woeid = this.woeid || 0;
  }
}