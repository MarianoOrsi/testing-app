import mongoose from 'mongoose'
import crypto from 'crypto'

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    firstName: {
      type: String,
      required: true
    },
    lastName: {
      type: String,
      required: true
    },
    genre: {
      type: String,
      required: true
    },
    dateOfBirth: {
      type: Date,
      required: true
    },
    building: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'building',
      required: false
    },
    profileImage: {
      type: String,
      required: false
    }
  },
  { timestamps: true }
)

userSchema.pre('save', function(next) {
  if (!this.isModified('password')) {
    return next()
  }

  this.password = encryptPassword(this.password)
  next()
})

userSchema.methods.checkPassword = function(password) {
  const passwordHash = this.password
  return new Promise((resolve, reject) => {
    const encryptedPassword = encryptPassword(password)

    if (passwordHash !== encryptedPassword) {
      return reject(new Error('Invalid Password'))
    }
    resolve(true)
  })
}

function encryptPassword(password) {
  const cryptoPassword = 'cryptoPass'

  const algorithm = 'aes-192-cbc'
  const key = crypto.scryptSync(cryptoPassword, 'salt', 24)
  const iv = Buffer.alloc(16, 0)
  const cipher = crypto.createCipheriv(algorithm, key, iv)

  let encrypted = cipher.update(password, 'utf8', 'hex')
  encrypted += cipher.final('hex')

  return encrypted
}

export const User = mongoose.model('user', userSchema)
