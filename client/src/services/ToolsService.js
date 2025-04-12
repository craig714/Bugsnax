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
    // logger.log('Got all tools!', response.data)
    const tools = response.data.map(toolData => new Tool(toolData))
    AppState.tools = tools


  }

  async getToolById(toolId) {
    const response = await api.get(`api/tools/${toolId}`)
    // logger.log('Got Tool by Id', response.data)
    const tool = new Tool(response.data)
    AppState.activeTool = tool
  }

  async getToolByIdLike(toolId) {
    const response = await api.get(`api/tools/${toolId}`)
    // logger.log('Got Tool by Id', response.data)
    const tool = new Tool(response.data)
    AppState.like = tool
    logger.log('like is now ', AppState.like)
  }

  async getToolsByLocationId(locationId) {
    const response = await api.get(`api/tools/locations/${locationId}`)
    // logger.log('getToolsByLocationId returned ', response.data)
    const tools = response.data.map(pojo => new Tool(pojo))
    AppState.tools = tools
    // logger.log('AppState.tools is now', AppState.tools)
  }
}


export const toolsService = new ToolsService()