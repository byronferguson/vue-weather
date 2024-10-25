export class History {
  _items
  _maxItems

  constructor(items = [], max = 5) {
    this._items = new Set(items)
    this._maxItems = max
  }

  add(...items) {
    const newItems = [...items.map(i => i.toLowerCase()), ...this._items]

    if (newItems.length > this._maxItems) {
      newItems.length = this._maxItems
    }

    this._items = new Set(newItems)
  }

  get items() {
    return Array.from(this._items)
  }
}
