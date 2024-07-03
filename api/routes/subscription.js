import express from "express";
const router = express.Router();

import {
  createSubscriptionPlan,
  getSubscriptionUser,
  removeSubscriptionFeature,
  editSubscriptionFeature,
} from "../controller/subscription.js";

router.post("/createSubscriptionPlan", createSubscriptionPlan);
router.get("/getSubscriptionUser", getSubscriptionUser);
router.put("/removeSubscriptionFeature", removeSubscriptionFeature);
router.put("/editSubscriptionFeature", editSubscriptionFeature);

export default router;
