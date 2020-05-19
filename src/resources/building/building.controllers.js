import { crudControllers } from '../../utils/crud'
import { Building } from './building.model'

export default crudControllers(Building, 'administration')

export const getBuilding = () => async (req, res) => {
  try {
    const doc = await Building.findOne({
      administration: req.params.id,
      _id: req.params.buildingId
    })
      // .populate('administration')
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
    const docs = await Building.find({ administration: req.params.id })
      // .populate('administration')
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
    const doc = await Building.create({
      ...req.body,
      administration: req.params.id
    })
    res.status(201).json({ data: doc })
  } catch (e) {
    console.error(e)
    res.status(400).end()
  }
}

export const updateOne = () => async (req, res) => {
  try {
    const updatedDoc = await Building.findOneAndUpdate(
      {
        _id: req.params.buildingId,
        administration: req.params.id
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
    const removed = await Building.findOneAndRemove({
      _id: req.params.buildingId,
      administration: req.params.id
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

// export const buildingController = () => ({
//   getMany: getMany(),
//   removeOne: removeOne(),
//   updateOne: updateOne(),
//   getBuilding: getBuilding(),
//   createOne: createOne()
// })
