import { dbContext } from "../db/DbContext.js"


class LocationsService {
  async getAllLocations() {
    const locations = await dbContext.Locations.find()
    return locations
  }
  async getLocationById(locationId) {
    const location = await dbContext.Locations.findById(locationId)
    return location
  }
  async createLocation(locationData) {
    // NOTE - Write userinfo checks after auth0 is implemented
    const location = await dbContext.Locations.create(locationData)
    console.log(location);

    return location
  }
  async updateLocation(locationId, locationData) {
    // NOTE - Write userinfo checks after auth0 is implemented
    const locationToUpdate = await dbContext.Locations.findById(locationId)
    const LocationName = locationToUpdate.name

    locationToUpdate.name = locationData.name ?? locationToUpdate.name
    locationToUpdate.picture = locationData.picture ?? locationToUpdate.picture
    locationToUpdate.description = locationData.description ?? locationToUpdate.description

    await locationToUpdate.save()
    return locationToUpdate
  }
  async deleteLocation(locationId) {
    const location = await this.getLocationById(locationId)
    const locationName = location.name

    await location.deleteOne()
    return `${locationName} was deleted, you murderer.`
  }
}

export const locationsService = new LocationsService()