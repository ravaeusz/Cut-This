import express from 'express'
const router = express.Router();

import {registerController, loginController, userController} from './controllers/loginController'
import {groupController, deleteGroupController, updateGroupController, showGroupsController, EnterGroup, ShowGroupController} from './controllers/groupController'
import {storeAccountController, deleteAccountController, showeAccountController} from './controllers/accountController'


//LOGIN ROUTER
router.post('/register', registerController)
router.post('/login', loginController)
router.get('/user', userController)

//GROUP ROUTER
router.post('/grupo', groupController)
router.delete('/grupo/:id', deleteGroupController)
router.put('/grupo/:id', updateGroupController)
router.get('/grupo', showGroupsController)
router.post('/grupo/grupo-entrar/:id', EnterGroup)
router.get('/grupo/grupo-entrar/:id',ShowGroupController)


//ACCOUNT ROUTE
router.post('/conta', storeAccountController)
router.delete('/conta/:id', deleteAccountController)
router.get('/conta/:conta_grupo', showeAccountController)

export default router;