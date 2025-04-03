import { Schema } from "mongoose";

export const SauceLocationSchema = new Schema({
  sauceId: { type: Schema.ObjectId, required: true, ref: 'Sauce' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false }

  })