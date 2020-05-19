import mongoose from 'mongoose'

const administrationSchema = new mongoose.Schema(
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
    }
  },
  { timestamps: true }
)

administrationSchema.index({ name: 1 }, { unique: true })

export const Administration = mongoose.model(
  'administration',
  administrationSchema
)
