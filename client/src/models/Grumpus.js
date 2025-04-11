export class Grumpus {
  constructor(data) {
    this.id = data._id
    this.name = data.name
    this.picture = data.picture
    this.description = data.description
    this.likes = data.likes
    this.dislikes = data.dislikes
  }
}