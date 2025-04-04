import { toolsService } from "../services/ToolsService.js"
import BaseController from "../utils/BaseController.js"

export class ToolsController extends BaseController {
  constructor() {
    super('api/tools')
    this.router
      .get('', this.getAllTools)
      .get('/:toolId', this.getToolById)
      .post('', this.createTool)
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getAllTools(request, response, next) {
    try {
      const tools = await toolsService.getAllTools()
      response.send(tools)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async getToolById(request, response, next) {
    try {
      const toolId = request.params.toolId
      const tool = await toolsService.getToolById(toolId)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }
  /**
   * @param {import("express").Request} request
   * @param {import("express").Response} response
   * @param {import("express").NextFunction} next
   */
  async createTool(request, response, next) {
    try {
      const toolData = request.body
      const tool = await toolsService.createTool(toolData)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }
}