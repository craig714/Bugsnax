export class SauceLocation {
  constructor(data) {
    this.id = data.id || data._id
    this.sauceId = data.sauceId
    this.locationId = data.locationId
    this.sauce = data.sauce
    this.location = data.location
  }
}