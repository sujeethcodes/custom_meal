import express from "express"
const router = express.Router()
import userRoutes from "./routes/user.js"
import subscriptionRoutes from "./routes/subscription.js"
router.use("/user",userRoutes)
router.use("/subscription",subscriptionRoutes)
export default router