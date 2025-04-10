import { Tool } from "@/models/Tool.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"

class ToolsService {


  async createTools(toolsData) {
    const response = await api.post('api/tools', toolsData)
    const tool = new Tool(response.data)
    AppState.tools.push(tool)
  }



  async getAllTools() {
    const response = await api.get('api/tools')
    logger.log('Got all tools!', response.data)
    const tools = response.data.map(toolData => new Tool(toolData))
    AppState.tools = tools


  }

  async getToolById(toolId) {
    const response = await api.get(`api/tools/${toolId}`)
    logger.log('Got Tool by Id', response.data)
    const tool = new Tool(response.data)
    AppState.activeTool = tool
  }

}


export const toolsService = new ToolsService()