import express from "express"
const router = express.Router()

import {createUser, editUser, deleteUser, getUserDetails} from "../controller/user.js"
import createUserValidation from "../validation/user/create.js"
import updateUserValidation from "../validation/user/update.js"
import deleteUserValidation from "../validation/user/delete.js"

import { verifyUser } from "../middleware/token.js"

router.post("/createUser",createUserValidation, createUser)
router.put("/editUser", verifyUser,updateUserValidation,editUser)
router.delete("/deleteUser", verifyUser,deleteUserValidation,deleteUser)
router.get("/getUserDetails",getUserDetails)
export default router