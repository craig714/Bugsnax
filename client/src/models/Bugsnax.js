export class Bugsnax {
  constructor(data) {

    this.id = data._id
    this.name = data.name
    this.picture = data.picture
    this.description = data.description
    this.strategy = data.strategy
    this.likes = data.likes
    this.dislikes = data.dislikes
    this.fears = data.fears
  }
}