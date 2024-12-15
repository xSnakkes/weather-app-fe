import { create } from "zustand";

interface IWeatherStore {
  weather: Weather | null;
  setWeather: (weather: Weather) => void;
  isImgHidden: boolean;
  setIsImgHidden: (isImgHidden: boolean) => void;
}

export type Weather = {
  city: string;
  date: Date;
  description: WeatherType;
  temperature: number;
  _id: string;
};

export type WeatherType = "clouds" | "thunderstorm" | "clear";

export const useWeatherStore = create<IWeatherStore>((set) => ({
  weather: null,
  setWeather: (weather: Weather) => set({ weather }),
  isImgHidden: false,
  setIsImgHidden: (isImgHidden: boolean) => set({ isImgHidden }),
}));
