export class GrumpusLocation {
  constructor(data) {
    this.id = data.id || data._id
    this.grumpusId = data.grumpusId
    this.locationId = data.locationId
    this.questId = data.questId
    this.grumpus = data.grumpus
    this.location = data.location
    this.quest = data.quest
  }
}