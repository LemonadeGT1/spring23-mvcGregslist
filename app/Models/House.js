import { generateId } from "../Utils/generateId.js"



export class House {
  constructor(data) {
    this.id = generateId()
    this.year = data.year
    this.name = data.name
    this.bedrooms = data.bedrooms
    this.bathrooms = data.bathrooms
    this.sqft = data.sqft
    this.price = data.price
    this.description = data.description
    this.imgUrl = data.imgUrl
  }


  get HouseCard() {
    return `
  <div class="col-md-4 col-12 houseCard p-2 m-2 rounded">
    <div class="card elevation-2" style="background-image: url('${this.imgUrl}');"></div>
    <div class="p-2">
      <h5 class="text-start border-bottom-border-dark">${this.name}</h5>
      <div class="row">
        <div class="col-6">
        <button class="btn btn-outline-danger" title="delete house" onclick="app.housesController.deleteHouse('${this.id}')"><i class="mdi mdi-delete" ></i></button>
        </div>
        <div class="col-6 text-end"><h4><span class="mdi mdi-currency-usd"></span>${this.price}</h4></div>
      </div>
    </div>
  </div>
  `
  }

  static HouseForm() {
    return `
    <form onsubmit="app.housesController.createHouse()" class="row bg-white rounded elevation-2 p-4">
      <h3>List a House</h3>
      <div class="mb-2 col-3">
        <label for="year">Year Built</label>
        <input type="number" name="year" id="year" class="form-control" required min="1600" max="2050"
          value="2000">
      </div>
      <div class="mb-2 col-3">
        <label for="bedrooms">Bedrooms</label>
        <input type="number" name="bedrooms" id="bedrooms" class="form-control" required min="0">
      </div>
      <div class="mb-2 col-3">
        <label for="bathrooms">Bathrooms</label>
        <input type="number" name="bathrooms" id="bathrooms" class="form-control" required min="0">
      </div>
      <div class="mb-2 col-3">
        <label for="sqft">Square Feet</label>
        <input type="number" name="sqft" id="sqft" class="form-control" placeholder="50" required min="50">
      </div>

      <div class="mb-2 col-12">
        <label for="img">Image URL</label>
        <input type="url" name="imgUrl" id="imgUrl" class="form-control" required
          placeholder="please enter a url for an image...">
      </div>
      <div class="mb-2 col-12">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="50">
      </div>
      <div class="mb-2 col-12">
        <label for="name">Name</label>
        <input type="text" name="name" id="name" class="form-control" maxlength="50">
      </div>

      <div class="mb-2 col-6">
        <label for="price">Price</label>
        <input type="number" name="price" id="price" class="form-control" required min="1">
      </div>
      <div class="col-6 text-end mt-3">
        <button class="btn" type="button">cancel</button>
        <button class="btn btn-primary" type="submit">submit</button>
      </div>

    </form>
    `
  }
}