import { Schema } from "mongoose";

export const GrumpusLocationSchema = new Schema({
  grumpusId: { type: Schema.ObjectId, required: true, ref: 'Grumpus' },
  locationId: { type: Schema.ObjectId, required: true, ref: 'Location' },
  questId: { type: Schema.ObjectId, required: true, ref: 'Quest' }
},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
  }
)

GrumpusLocationSchema.virtual('grumpus', {
  localField: 'grumpusId',
  foreignField: '_id',
  ref: 'Grumpus',
  justOne: true
})
//NOTE - justone true maybe?
GrumpusLocationSchema.virtual('location', {
  localField: 'locationId',
  foreignField: '_id',
  ref: 'Location',
  justOne: true
})

GrumpusLocationSchema.virtual('quest', {
  localField: 'questId',
  foreignField: '_id',
  ref: 'Quest',
  justOne: true
})