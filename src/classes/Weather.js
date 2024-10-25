import dayjs from 'dayjs'
import { titleCase } from '../utils/string.utils.js'

export class Weather {
  date
  tempF
  windMph
  humidity
  iconUrl
  iconDescription

  constructor(weather) {
    this.date = dayjs(weather.dt_txt, 'YYYY-MM-DD hh:mm:ss')
    this.tempF = weather.main.temp + 'ºF'
    this.windMph = weather.wind.speed + ' MPH'
    this.humidity = weather.main.humidity + '%'
    this.iconUrl = `https://openweathermap.org/img/wn/${weather.weather[0].icon}@4x.png`
    this.iconDescription = titleCase(
      weather.weather[0].description ?? weather[0].main,
    )
  }
}
