import { generateId } from "../Utils/generateId.js";

export class Job {
  constructor(data) {
    this.id = generateId()
    this.title = data.title
    this.description = data.description
    this.salary = data.salary
  }

  get JobCard() {
    console.log('Inside Model - JobCard [this]', this)
    return `
    <div class="col-md-3 col-12 jobCard p-2 m-2 rounded">
      <div class="card elevation-2">${this.description}</div>
      <div class="p-2">
        <h5 class="text-start border-bottom-border-dark">${this.title}</h5>
        <div class="row">
          <div class="col-6">
          <button class="btn btn-outline-danger" title="delete job" onclick="app.jobsController.deleteJob('${this.id}')"><i class="mdi mdi-delete" ></i></button>
          </div>
          <div class="col-6 text-end"><h4><span class="mdi mdi-currency-usd"></span>${this.salary}</h4></div>
        </div>
      </div>
    </div>`
  }


  static JobForm() {
    console.log('Inside Model - JobForm')
    return `
    <form onsubmit="app.jobsController.createJob()" class="row bg-white rounded elevation-2 p-4">
      <h3>List a Job</h3>
      <div class="mb-2 col-12">
        <label for="title">Title</label>
        <input type="text" name="title" id="title" class="form-control" maxlength="50">
      </div>
      <div class="mb-2 col-12">
        <label for="description">Description</label>
        <input type="text" name="description" id="description" class="form-control" maxlength="50">
      </div>
      <div class="mb-2 col-6">
        <label for="salary">Salary</label>
        <input type="number" name="salary" id="salary" class="form-control" required min="1">
      </div>
      <div class="col-6 text-end mt-3">
        <button class="btn" type="button">cancel</button>
        <button class="btn btn-primary" type="submit">submit</button>
      </div>
    </form>
    `
  }


}

