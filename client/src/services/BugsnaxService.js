import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { Bugsnax } from "@/models/Bugsnax.js"
import { AppState } from "@/AppState.js"

class BugsnaxService {



  async getAllBugsnax() {
    const response = await api.get('api/bugsnax')
    logger.log('Got all Bugsnax!', response.data)
    const bugsnax = response.data.map(pojo => new Bugsnax(pojo))
    AppState.bugsnax = bugsnax
  }


  async getBugsnaxById(bugsnaxId) {
    const response = await api.get(`api/bugsnax/${bugsnaxId}`)
    logger.log('Got bugsnax by ID!', response.data)
    const bugsnax = new Bugsnax(response.data)
    AppState.activeBugsnax = bugsnax
  }

  async createBug(bugData) {
    const response = await api.post('api/bugsnax', bugData)
    const bugsnax = new Bugsnax(response.data)
    AppState.bugsnax.push(bugsnax)
  }


}



export const bugsnaxService = new BugsnaxService()