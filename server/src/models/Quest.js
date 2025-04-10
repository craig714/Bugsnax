import { Schema } from "mongoose";

export const QuestSchema = new Schema({
  name: { type: String, required: true },
  picture: { type: String, required: true },
  description: { type: String, required: true },
  grumpusId: { type: Schema.ObjectId, required: true },
  steps: [{ type: Object, required: true }],
  questType: { type: String, required: true }
},
  {
    timestamps: true,
    toJSON: { versionKey: false }
  }

)