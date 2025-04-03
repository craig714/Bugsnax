import { Schema } from "mongoose";

export const BugsnaxLocationSchema = new Schema({
  bugsnaxId: { type: Schema.ObjectId, required: true, ref: 'Bugsnax' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },

  }


)

BugsnaxLocationSchema.virtual('bugsnax', {
  localField: 'bugsnaxId',
  foreignField: '_id',
  ref: 'Bugsnax',
  justOne: false
})


BugsnaxLocationSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: false
})

