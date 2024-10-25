import { History } from './History.js'

export class SearchHistory extends History {
  _KEY

  constructor(saveKey = 'weather') {
    super()
    this._KEY = saveKey
  }

  save() {
    window.localStorage.setItem(this._KEY, JSON.stringify(this.items))
  }

  load() {
    const rawItems = window.localStorage.getItem(this._KEY)

    const items = rawItems ? JSON.parse(rawItems) : []

    this.add(...items)
  }
}
