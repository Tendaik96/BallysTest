import express from "express";
import {searchRepositorys} from "../models/octokit";

const Router = express.Router();

// route handler - GET request for searching repositiories by name
Router.get("/:name", async function (req, res) {

  try {
    
    const word : string = req.params.name;
    const results = await searchRepositorys(word);
    res.status(200).json({ success: true, payload: results });
    console.log("these are the results", results);
    console.log(word);
    

  } catch (error: any) {
    
    res.status(400).json({ error: error.message });
    
  }

});


export { Router as default };


