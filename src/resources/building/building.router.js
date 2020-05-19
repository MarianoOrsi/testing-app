import { Router } from 'express'
import buildingController from './building.controllers'
import * as spaceController from '../space-room/space.controllers'

const router = Router()

router
  .route('/')
  .get(buildingController.getMany)
  .post(buildingController.createOne)

router
  .route('/:id')
  .get(buildingController.getOne)
  .put(buildingController.updateOne)
  .delete(buildingController.removeOne)

router
  .route('/:id/spaces')
  .get(spaceController.getMany())
  .post(spaceController.createOne())

router
  .route('/:id/spaces/:spaceId')
  .get(spaceController.getSpace())
  .put(spaceController.updateOne())
  .delete(spaceController.removeOne())

export default router
