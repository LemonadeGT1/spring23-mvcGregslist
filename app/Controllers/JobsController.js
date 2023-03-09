import { appState } from "../AppState.js";
import { setHTML } from "../Utils/Writer.js";
import { Job } from "../Models/Job.js";
import { jobsService } from "../Services/JobsService.js";
import { getFormData } from "../Utils/FormHandler.js";
import { Pop } from "../Utils/Pop.js";

// SECTION - Private
function _drawJobs() {
  const jobs = appState.jobs
  console.log('Inside JobsController - _drawJobs', jobs)
  let template = ''
  jobs.forEach(j => template += j.JobCard)
  setHTML('listings', template)

}

function _drawJobForm() {
  setHTML('form', Job.JobForm())
}




// SECTION - Public
export class JobsController {
  constructor() {
    console.log('Inside JobsController constructor')
    _drawJobs
    appState.on('jobs', _drawJobs)
  }

  showJobs() {
    _drawJobs()
    _drawJobForm()
  }


  createJob() {
    event.preventDefault()
    console.log('creating a job')
    const form = event.target
    console.log(form);

    let formData = getFormData(form) // when passing in a form element, will extract the inputs and assemble into a POJO 
    console.log(formData);
    jobsService.createJob(formData)
    form.reset()
  }

  async deleteJob(id) {
    if (await Pop.confirm('are you sure you want to delete this job?')) {
      console.log('delete job', id);
      jobsService.deleteJob(id)
      Pop.toast('job deleted!', 'success')
    }
  }


}