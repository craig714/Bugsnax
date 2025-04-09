import { logger } from "@/utils/Logger.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"

class LocationsService {
  async getAllLocations() {
    const response = await api.get('api/locations')
    logger.log('getAllLocations returned ', response.data)
    AppState.locations = response.data
  }
  // NOTE Getting location by name for now until we can figure out a good way to send the location.id
  async getLocationByName(locationName) {
    const response = api.get
  }
  async setActiveLocation(locationName) {
    const location = AppState.locations.find(theLocation => theLocation.name == locationName)
    // logger.log('findLocationByName returned ', location)
    AppState.activeLocation = location
    logger.log('AppState.activeLocation is now ', AppState.activeLocation)
  }

}



export const locationsService = new LocationsService()