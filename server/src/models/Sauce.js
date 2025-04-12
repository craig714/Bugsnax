import { Schema } from "mongoose";

export const SauceSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true }

},
  {
    timestamps: true,
    toJSON: { versionKey: false }
  }

)


