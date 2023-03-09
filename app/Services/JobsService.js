import { appState } from "../AppState.js";
import { Job } from "../Models/Job.js";
import { saveState } from "../Utils/Store.js";

function _saveJobs() {
  saveState('jobs', appState.jobs)
}

class JobsService {
  createJob(formData) {
    let job = new Job(formData)
    console.log('creating job in service', job);
    appState.jobs.push(job)
    // appState.jobs = appState.jobs
    // appState.jobs = [...appState.jobs, job]
    appState.emit('jobs')
    console.log(appState.jobs);
    _saveJobs()
  }
  deleteJob(id) {
    let filterd = appState.jobs.filter(c => c.id != id)
    console.log('filtered', filterd);
    appState.jobs = filterd
    _saveJobs()
    // appState.emit('jobs')
  }

}

console.log('Inside JobsService')


export const jobsService = new JobsService()