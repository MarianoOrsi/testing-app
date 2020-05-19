import { crudControllers } from '../../utils/crud'
import { Space } from './space.model'

export default crudControllers(Space, 'building')

export const getSpace = () => async (req, res) => {
  try {
    const doc = await Space.findOne({
      building: req.params.id,
      _id: req.params.spaceId
    })
      .lean()
      .exec()

    if (!doc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const getMany = () => async (req, res) => {
  try {
    const docs = await Space.find({ building: req.params.id })
      .lean()
      .exec()

    res.status(200).json({ data: docs })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const createOne = () => async (req, res) => {
  try {
    const doc = await Space.create({
      ...req.body,
      building: req.params.id
    })
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateOne = () => async (req, res) => {
  try {
    const updatedDoc = await Space.findOneAndUpdate(
      {
        _id: req.params.spaceId,
        building: req.params.id
      },
      req.body,
      { new: true }
    )
      .lean()
      .exec()

    if (!updatedDoc) {
      return res.status(400).end()
    }

    res.status(200).json({ data: updatedDoc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const removeOne = () => async (req, res) => {
  try {
    const removed = await Space.findOneAndRemove({
      _id: req.params.spaceId,
      building: req.params.id
    })

    if (!removed) {
      return res.status(400).end()
    }

    return res.status(200).json({ data: removed })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}
