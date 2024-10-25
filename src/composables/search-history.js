import { shallowRef, watch } from 'vue'
import { SearchHistory } from '../classes/SearchHistory.js'

export function useSearchHistory() {
  const _history = new SearchHistory()
  _history.load()

  const history = shallowRef(_history.items)

  watch(history, () => {
    _history.save()
  })

  function addItem(item) {
    _history.add(item)
    history.value = _history.items
  }

  return {
    history,
    addItem,
  }
}
