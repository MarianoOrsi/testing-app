import { Router } from 'express'
import administrationController from './administration.controllers'
import * as buildingController from '../building/building.controllers'

const router = Router()

router
  .route('/')
  .get(administrationController.getMany)
  .post(administrationController.createOne)

router
  .route('/:id')
  .get(administrationController.getOne)
  .put(administrationController.updateOne)
  .delete(administrationController.removeOne)

router
  .route('/:id/buildings')
  .get(buildingController.getMany())
  .post(buildingController.createOne())

router
  .route('/:id/buildings/:buildingId')
  .get(buildingController.getBuilding())
  .put(buildingController.updateOne())
  .delete(buildingController.removeOne())

export default router
