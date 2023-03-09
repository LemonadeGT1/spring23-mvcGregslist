import { appState } from "../AppState.js";
import { House } from "../Models/House.js";
import { saveState } from "../Utils/Store.js";

function _saveHouses() {
  saveState('houses', appState.houses)
}

class HousesService {
  createHouse(formData) {
    let house = new House(formData)
    console.log('creating house in service', house);
    appState.houses.push(house)
    // appState.houses = appState.houses
    // appState.houses = [...appState.houses, house]
    appState.emit('houses')
    console.log(appState.houses);
    _saveHouses()
  }
  deleteHouse(id) {
    // let house = appState.houses.find(c => c.id == id)
    //console.log(house);

    let filterd = appState.houses.filter(c => c.id != id)
    console.log('filtered', filterd);
    appState.houses = filterd
    _saveHouses()
    // appState.emit('houses')
  }
}

export const housesService = new HousesService()