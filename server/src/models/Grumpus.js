import { Schema } from "mongoose";

export const GrumpusSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  likes: [{ type: Object, required: true }],
  dislikes: [{ type: Object, required: true }],

},
  {
    timestamps: true,
    toJSON: { versionKey: false }
  }
)