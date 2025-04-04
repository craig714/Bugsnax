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
    //NOTE - remember to implement auth0 check
    const tool = await dbContext.Tools.create(toolData)
    return tool
  }
  async updateTool(toolId, toolData) {
    //NOTE - remember to implement auth0 check
    const toolToUpdate = await dbContext.Tools.findById(toolId)

    toolToUpdate.name = toolData.name ?? toolToUpdate.name
    toolToUpdate.picture = toolData.picture ?? toolToUpdate.picture
    toolToUpdate.description = toolData.description ?? toolToUpdate.description
    toolToUpdate.locationId = toolData.locationId ?? toolToUpdate.locationId

    toolToUpdate.save()
    return toolToUpdate
  }
  async deleteTool(toolId) {
    const tool = await dbContext.Tools.findById(toolId)
    const toolName = tool.name
    await tool.deleteOne()
    return `${toolName} has been deleted. Have a nice day, murderer.`
  }
}

export const toolsService = new ToolsService