import { Api } from "../Api.class";

export class WeatherService extends Api {
  static async getWeather(city: string) {
    return this.get("/weather", { city });
  }
}
