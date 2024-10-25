import dayjs from 'dayjs'
import { Weather } from '../classes/Weather.js'

export class WeatherService {
  static #BASE_URL = 'https://api.openweathermap.org'
  static #API_KEY = import.meta.env.VITE_WEATHER_API_KEY

  static async forecastByLocation(location) {
    const coords = await this.#fetchCoords(location)

    return this.forecastByCoordinates(coords)
  }

  static async forecastByCoordinates({ lat, lon }) {
    const url = `${
      this.#BASE_URL
    }/data/2.5/forecast?lat=${lat}&lon=${lon}&units=imperial&appid=${
      this.#API_KEY
    }`

    const res = await fetch(url)

    if (!res.ok) throw new Error(res.statusText)

    const { list } = await res.json()

    const [now, ...forecasts] = list?.map(record => new Weather(record)) ?? []

    return [
      now,
      forecasts.filter(forecast => {
        // filters dates that are after today, and only 12pm
        return (
          forecast.date.isAfter(dayjs(), 'day') && forecast.date.hour() === 12
        )
      }),
    ]
  }

  static async #fetchCoords(location) {
    const apiUrl = `${
      this.#BASE_URL
    }/geo/1.0/direct?q=${location}&limit=5&appid=${this.#API_KEY}`

    const res = await fetch(apiUrl)

    if (!res.ok) throw new Error(res.statusText)

    const [locationInfo] = await res.json()

    const { lat, lon } = locationInfo

    if (!lat || !lon) throw new Error('Location Details Not Found')

    return { lat, lon }
  }
}
