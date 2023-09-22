import express from "express";
import { Request, Response} from "express";
import { getReadme } from "../models/octokit";

const readmeRouter = express.Router();

// router for searching readme using the id of the repositiory
readmeRouter.get("/:id", async function (req: Request, res: Response) {
  try {
    
    const id = Number(req.params.id);
    const readme = await getReadme(id);
    res.status(200).json({ success: true, payload: readme });
    console.log("this is the name", readme);
    console.log(id);
  
  } catch (error: any) {
    
    res.status(500).json({ error: error.message });
    
  }
});

export { readmeRouter as default };

