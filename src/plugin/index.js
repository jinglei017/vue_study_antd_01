import mixin from './mixin'
import ConterContainer from './components/ConterContainer.vue'
import './css/simba.css'
import filter from './filter'

export default {
    install: (Vue, options = {}) => {
        Vue.mixin(mixin(options))
        Vue.component('ConterContainer', ConterContainer)

        Object.keys(filter).forEach(filterName => {
            Vue.filter(filterName, filter[filterName])
        })
    }
}