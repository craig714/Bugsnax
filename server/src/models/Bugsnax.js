import { Schema } from "mongoose";

export const BugsnaxSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  strategy: { type: String, required: true },
  likes: [{ type: Object, required: true }],
  dislikes: [{ type: Object, required: true }],
  fears: [{ type: Object, required: true }]

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    collection: 'Bugsnax'

  })


