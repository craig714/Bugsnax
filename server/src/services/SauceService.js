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
  async updateSauce(sauceId, sauceData) {
    const sauceToEdit = await dbContext.Sauces.findById(sauceId)

    sauceToEdit.name = sauceData.name ?? sauceToEdit.name
    sauceToEdit.picture = sauceData.picture ?? sauceToEdit.picture
    sauceToEdit.description = sauceData.description ?? sauceToEdit.description

    await sauceToEdit.save()
    return sauceToEdit
  }
}

export const sauceService = new SauceService