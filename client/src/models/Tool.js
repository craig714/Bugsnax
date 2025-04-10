export class Tool {
  constructor(data) {
    this.id = data.id || data._id
    this.name = data.name
    this.picture = data.picture
    this.description = data.description
    this.locationId = data.locationId
  }
}