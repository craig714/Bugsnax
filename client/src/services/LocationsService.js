feature/locations
import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { Location } from "@/models/Location.js"
=======

class LocationsService {
  async createLocation(locationData) {
    const response = await api.post('api/location', locationData)
    const location = new Location(response.data)
    AppState.location.push(location)
  }

  //   async function getAllLocations() {
  //   const response = await api.get('api/location')
  //   const location = response.data.map(pojo => new Location(pojo))
  //   AppState.location = location
  // }
main

class LocationsService {
  async getLocationById(locationId) {
    const response = await api.get(`api/locations/${locationId}`)
    logger.log('getLocationById returned ', response.data)
  }
  async getAllLocations() {
    const response = await api.get('api/locations')
    const locations = response.data.map(pojo => new Location(pojo))
    // logger.log('getAllLocations returned ', locations)
    AppState.locations = locations
    logger.log('AppState.locations is (get)', AppState.locations)
    // return locations
  }
  // NOTE Getting location by name for now until we can figure out a good way to send the location.id
  // async getLocationByName(locationName) {
  //   const response = api.get
  // }
  setActiveLocation(locationName) {
    logger.log('AppState.locations is (set)', AppState.locations)
    const activeLocation = AppState.locations.find(theLocation => theLocation.name == locationName)
    // logger.log('findLocationByName returned ', location)
    AppState.activeLocation = activeLocation
    logger.log('AppState.activeLocation is now ', AppState.activeLocation)
  }

}



export const locationsService = new LocationsService()