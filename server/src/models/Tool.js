import { Schema } from "mongoose"

export const ToolSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  locationId: { type: Schema.ObjectId, required: true }

},
  {
    timestamps: true,
    toJSON: { versionKey: false }
  }



)