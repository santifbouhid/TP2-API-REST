import playersController from "../controllers/players.controller.js";
import express from "express"

const router = express.Router();

router.get("/players", playersController.getPlayers);
router.post("/players", playersController.postPlayers);
router.patch("/players/update/:id", playersController.patchPlayers);



export default router
