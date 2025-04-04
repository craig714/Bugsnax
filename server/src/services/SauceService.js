import { dbContext } from "../db/DbContext.js"

class SauceService {
  async getAllSauces() {
    const sauce = await dbContext.Sauces.find()
    return sauce
  }

}

export const sauceService = new SauceService