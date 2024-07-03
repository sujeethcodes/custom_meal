import express from "express"
const router = express.Router()

import {createSubscriptionPlan, getSubscriptionUser} from "../controller/subscription.js"

router.post("/createSubscriptionPlan", createSubscriptionPlan)
router.get("/getSubscriptionUser", getSubscriptionUser)
export default router