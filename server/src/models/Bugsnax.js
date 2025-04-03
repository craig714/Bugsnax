import { Schema } from "mongoose";

export const BugsnaxSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  likes: [{ type: String, required: true }],
  disLikes: [{ type: String, required: true }],
  fears: [{ type: String, required: true }],

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    collection: 'Bugsnax'

  })