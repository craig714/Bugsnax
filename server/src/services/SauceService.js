import { dbContext } from "../db/DbContext.js"

class SauceService {
  async getAllSauces() {
    const sauce = await dbContext.Sauces.find()
    return sauce
  }
  async createSauce(sauceData) {
    const sauce = await dbContext.Sauces.create(sauceData)
    return sauce
  }
}

export const sauceService = new SauceService