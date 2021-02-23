"use strict";

import express from "express";
import ListController from "../controllers/list.controller";

const router = express.Router();

router.post("/receive", ListController.getList);


export default router;