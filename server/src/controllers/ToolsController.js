
import { Auth0Provider } from "@bcwdev/auth0provider"
import { toolsService } from "../services/ToolsService.js"
import BaseController from "../utils/BaseController.js"

export class ToolsController extends BaseController {
  constructor() {
    super('api/tools')
    this.router
      .get('', this.getAllTools)
      .get('/:toolId', this.getToolById)
      .use(Auth0Provider.getAuthorizedUserInfo)
      // .use(Auth0Provider.hasRoles('admin'))
      .post('', this.createTool)
      .put('/:toolId', this.updateTool)
      .delete('/:toolId', this.deleteTool)
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
  //NOTE - remember to implement auth0
  async createTool(request, response, next) {
    try {
      const toolData = request.body
      const tool = await toolsService.createTool(toolData)
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
  //NOTE - remember to implement auth0
  async updateTool(request, response, next) {
    try {
      const toolId = request.params.toolId
      const toolData = request.body
      const tool = await toolsService.updateTool(toolId, toolData)
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
  async deleteTool(request, response, next) {
    try {
      const toolId = request.params.toolId
      const tool = await toolsService.deleteTool(toolId)
      response.send(tool)
    } catch (error) {
      next(error)
    }
  }
}