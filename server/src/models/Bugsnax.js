import { Schema } from "mongoose";
// NOTE THINK ABOUT USING BUGSNAXLOCATIONSCHEMA FOR THE LIKE/DISLIKES/FEARS, AS THEY HAVE VIRTUALS ON THEM FOR WHAT THEY ARE ALREADY (BUGSNAX, ETC.). THIS WOULD NOT WORK EXACTLY FOR TOOLS AS IT DOES NOT HAVE A LOCATIONSCHEMA, BUT YOU MIGHT STILL BE ABLE TO DO THIS.
export const BugsnaxSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  strategy: { type: String, required: true },
  likeIds: [{ type: Object, ref: 'Preference' }],
  dislikeIds: [{ type: Object, ref: 'Preference' }],
  fearIds: [{ type: Object, ref: 'Preference' }],

},
  {
    timestamps: true,
    toJSON: { virtuals: true, versionKey: false },
    collection: 'Bugsnax'
  })

BugsnaxSchema.virtual('likes', {
  localField: 'likeIds',
  foreignField: '_id',
  ref: 'Preference',
  justOne: false
})

BugsnaxSchema.virtual('dislikes', {
  localField: 'dislikeIds',
  foreignField: '_id',
  ref: 'Preference',
  justOne: false
})

BugsnaxSchema.virtual('fears', {
  localField: 'fearIds',
  foreignField: '_id',
  ref: 'Preference',
  justOne: false
})
