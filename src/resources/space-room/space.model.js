import mongoose from 'mongoose'

const spaceSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    building: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'building'
    },
    type: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
)
spaceSchema.index({ building: 1, name: 1 }, { unique: true })

export const Space = mongoose.model('space', spaceSchema)
