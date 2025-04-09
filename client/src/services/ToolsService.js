import { Tool } from "@/models/Tool.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class ToolsService {
  async createTools(toolsData) {
    const response = await api.post('api/tools', toolsData)
    const tool = new Tool(response.data)
    AppState.tool.push(tool)
  }



}


export const toolsService = new ToolsService()