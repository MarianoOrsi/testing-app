import { Router } from 'express'
import controller from './space.controllers'

const router = Router()

router
  .route('/')
  .get(controller.getMany)
  .post(controller.createOne)

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.updateOne)
  .delete(controller.removeOne)

export default router
