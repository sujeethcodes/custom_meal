import express from "express"
const router = express.Router()

import {createSubscriptionPlan, getSubscriptionUser,removeSubscriptionFeature} from "../controller/subscription.js"

router.post("/createSubscriptionPlan", createSubscriptionPlan)
router.get("/getSubscriptionUser", getSubscriptionUser)
router.put("/removeSubscriptionFeature", removeSubscriptionFeature)

export default router