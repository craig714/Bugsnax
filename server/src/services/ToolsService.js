import { dbContext } from "../db/DbContext.js"


class ToolsService {
  async getAllTools() {
    const tools = await dbContext.Tools.find()
    return tools
  }
  async getToolById(toolId) {
    const tool = await dbContext.Tools.findById(toolId)
    return tool
  }
  async createTool(toolData) {
    const tool = await dbContext.Tools.create(toolData)
    return tool
  }

}
export const toolsService = new ToolsService