import express from "express";
import {searchRepositorys} from "../models/octokit.js";

const Router = express.Router();

// searching repositiory using name
Router.get("/:name", async function (req, res) {

  try {
    
    const word : string = req.params.name;
    const results = await searchRepositorys(word);
    res.status(200).json({ success: true, payload: results });
    // console.log("this is the name", results);
    // console.log(word);

  } catch (error: any) {
    
    res.status(500).json({ error: error.message });
    
  }

});


export { Router as default };


