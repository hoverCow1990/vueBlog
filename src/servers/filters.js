import filtersUnit from '@/lib/filtersUnit'

const filters = {
  install (Vue, options) {
    console.log('------------------filters------------------')
    for (let key in filtersUnit) {
      console.log(`cow-${key}`)
      Vue.filter(`cow-${key}`, filtersUnit[key])
    }
  }
}

export default filters
