import express from "express";
import {protect} from "../middleware/authMiddleware.js";
import Report from "../models/Report.js";

const router = express.Router();