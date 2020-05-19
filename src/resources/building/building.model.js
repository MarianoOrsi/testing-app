import mongoose from 'mongoose'

const buildingSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    location: {
      street: {
        type: String,
        required: true
      },
      number: {
        type: String,
        required: true
      },
      apartment: {
        type: String
      },
      zipCode: {
        type: String,
        required: true
      },
      city: {
        type: String,
        required: true
      },
      country: {
        type: String,
        required: true
      }
    },
    administration: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'administration'
    }
  },
  { timestamps: true }
)
buildingSchema.index({ administration: 1, name: 1 }, { unique: true })

export const Building = mongoose.model('building', buildingSchema)
