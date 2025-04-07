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



}



export const bugsnaxService = new BugsnaxService()