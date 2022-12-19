import express from "express";
import { allplayer, singleplayer, updateplayer, deleteplayer} from "../CONTROLLER/controller.js";

const salesrouter = express.Router();
salesrouter.get('/player',allplayer)

// endpoint to get a single sales
salesrouter.get('/player/:id', singleplayer)


// endpoint to remove a sale from the database table
salesrouter.delete('/player/:id', deleteplayer)

// endpoint to update
salesrouter.patch('/player/:id', updateplayer)
export default salesrouter;