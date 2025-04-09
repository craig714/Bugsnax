import { AppState } from "@/AppState.js"
import { api } from "./AxiosService.js"
import { Location } from "@/models/Location.js"

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


}



export const locationsService = new LocationsService()