export class Quest {
  constructor(data) {
    this.id = data.id || data._id
    this.name = data.name
    this.picture = data.picture
    this.description = data.description
    this.grumpusId = data.grumpusId
    this.steps = data.steps
    this.questType = data.questType
  }
}