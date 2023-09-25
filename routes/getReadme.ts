import express from "express";
import { Request, Response} from "express";
import { getReadme } from "../models/octokit";

const readmeRouter = express.Router();

// route handler - GET request for readme
readmeRouter.get("/:id", async function (req: Request, res: Response) {
  try {
    
    const id : string = req.params.id;
    const readme = await getReadme(id);
    res.status(200).json({ success: true, payload: readme });
    console.log("these are the results", readme);
    console.log(id);
  
  } catch (error: any) {
    
    res.status(400).json({ error: error.message });
    
  }
});

export { readmeRouter as default };

