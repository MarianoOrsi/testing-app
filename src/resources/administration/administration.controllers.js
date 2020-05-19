import { crudControllers } from '../../utils/crud'
import { Administration } from './administration.model'
import { Building } from '../building/building.model'

// export default crudControllers(Administration)

export const getBuildings = () => async (req, res) => {
  try {
    const doc = await Building.find({ administration: req.params.id })
      .populate('administration')
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

export default crudControllers(Administration, '')
