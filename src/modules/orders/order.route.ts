import express from "express";
import { OrderControllers } from "./order.controller";

const router = express.Router();

router.post("/", OrderControllers.createOrder);
router.get("/", OrderControllers.getAllOrder);
router.get("/", OrderControllers.searchOrders);

export const OrderRoutes = router;
