import { createStore } from 'vuex'
import citiesUA from '@/assets/citiesUA.json'

const store = createStore({
  state () {
    return {
        allCities: [],
        searchedCity: '',

    }
  },
  getters: {
    activeCities(state) {
        return state.allCities.filter(city => city.isActive)
    },
    disabledCities(state) {
        return state.allCities.filter(city => !city.isActive)
    },
    filteredCities(state, getters) {
        return getters.disabledCities.filter(city => {
            if(city.city.indexOf(state.searchedCity) >= 0) {
                return city
            }
        })
    },
  },
  mutations: {
    addCities(state) {
        let i = 0
        state.allCities = citiesUA.map((el) => Object.assign(
            {...el}, 
            {
                isActive: false, 
                id: i++, 
                temp: [],
            }
        ))

    }, 
    activateDefaultCities(state) {
        for(let i = 0; i < 5; i++) {
            state.allCities[i].isActive = true
        }
    },
    recordTempData(state, payload) {
        for(let i = 0; i < payload.data.daily.time.length; i++) {
            state.allCities[state.allCities.indexOf(state.allCities.find(item => item.id == payload.id))].temp.push({
                date: payload.data.daily.time[i],
                max: payload.data.daily.temperature_2m_max[i],
                min: payload.data.daily.temperature_2m_min[i],
            })
        }
    }
  },
  actions: {
    preparingData({ commit }) {
        commit('addCities')
        commit('activateDefaultCities')
    },
    async fetchWeather({ commit }) {
        for(let i = 0; i < this.getters.activeCities.length; i++) {
            const lat = this.getters.activeCities[i].lat
            const lng =  this.getters.activeCities[i].lng
            
            const res = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&daily=temperature_2m_max,temperature_2m_min&current_weather=true&timezone=Europe%2FBerlin`)
            const data = await res.json()

            commit('recordTempData', {
                data: data,
                id: this.getters.activeCities[i].id
            })

        }
        console.log('fetchWeather');
    }
  }
})

export default store