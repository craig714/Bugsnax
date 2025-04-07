import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"

class AdminService {
  async postBug(value) {
    const response = await api.post('/bugsnax', value)
    console.log(response);
    AppState.bugsnax = new Bugsnax(response.data)
  }

}

export const adminService = new AdminService