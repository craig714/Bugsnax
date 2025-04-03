import { Schema } from "mongoose";

export const SauceLocationSchema = new Schema({
  sauceId: { type: Schema.ObjectId, required: true, ref: 'Sauce' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false }

  })
//NOTE - justone true maybe?
SauceLocationSchema.virtual('sauce', {
  localField: 'sauceId',
  foreignField: '_id',
  ref: 'Sauce',
  justOne: true
})
SauceLocationSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: false
})
