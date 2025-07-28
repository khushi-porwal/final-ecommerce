// routes/public/contactRoute.js

import express from "express";
import { sendContactEmail } from "../../controllers/contact/contactController.js";

const router = express.Router();

router.post("/contact", sendContactEmail);

export default router;
