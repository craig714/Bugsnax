import { Schema } from "mongoose";


export const PreferenceSchema = new Schema({
  preferenceIds: { type: Schema.ObjectId },
  type: { type: String }
},
  {
    timestamps: true,
    toJSON: { versionKey: false }
  })