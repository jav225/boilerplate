import express from 'express'
import { user } from '../controllers/user.controller'

const router = express.Router()

router.route('/')
    .get(user)
    .post()
    .put()
    .delete()

export default router