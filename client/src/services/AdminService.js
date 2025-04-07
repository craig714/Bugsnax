import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Bugsnax } from "@/models/Bugsnax.js";

class AdminService {
  async postBug(value) {
    const response = await api.post('/bugsnax', value)
    console.log(response);
    AppState.bugsnax = new Bugsnax(response.data)
  }

}

export const adminService = new AdminService