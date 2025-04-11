export class BugsnaxLocation {
  constructor(data) {
    this.bugsnaxId = data.bugsnaxId || data.bugsnax._id
    this.locationId = data.locationId || data.location._id
    this.bugsnax = data.bugsnax
    this.location = data.location
  }
}