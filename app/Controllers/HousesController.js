import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { House } from "../Models/House.js";
import { housesService } from "../Services/HousesService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";

// SECTION - Private
function _drawHouses() {
  const houses = appState.houses
  let template = ''
  houses.forEach(h => template += h.HouseCard)
  setHTML('listings', template)
}

function _drawHouseForm() {
  setHTML('form', House.HouseForm())
}


// SECTION - Public
export class HousesController {
  constructor() {
    console.log('houses controller loaded', appState.houses);
    _drawHouses()
    appState.on('houses', _drawHouses)
  }

  showHouses() {
    _drawHouses()
    _drawHouseForm()
  }


  createHouse() {
    event.preventDefault()
    console.log('creating a house')
    const form = event.target // the target is the element that triggered this function
    console.log(form);
    //console.log(form.make.value, form.model.value, form.color.value); // how to grab data from a form
    // NOTE your form inputs must contain names, that match these 'make model color' and value is what gets the users inputed data
    let formData = getFormData(form) // when passing in a form element, will extract the inputs and assemble into a POJO 
    console.log(formData);
    housesService.createHouse(formData)
    form.reset() // this show an error cause js doesn't know that event.target is coming from a form (it could come from any element in theory)
  }

  async deleteHouse(id) { // async await lets us create
    // if (window.confirm('are you sure you want to delete this?')) {
    //   console.log('delete house', id);
    //   housesService.deleteHouse(id)
    // }
    if (await Pop.confirm('are you sure you want to delete this?')) {
      console.log('delete house', id);
      housesService.deleteHouse(id)
      Pop.toast('house deleted!', 'success')
    }
  }



}


