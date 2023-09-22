import express from "express";
import { Request, Response} from "express";
import { getRepositoryById } from "../models/octokit";

const idRouter = express.Router();

// searching repositiory using id
idRouter.get("/:id", async function (req: Request, res: Response) {
  
  try{ 
  const id = Number(req.params.id);
  const results = await getRepositoryById(id);
  res.status(200).json({ success: true, payload: results });
  console.log("this is the name", results);
    console.log(id);
  }catch (error: any) {
    
    res.status(500).json({ error: error.message });
    
  }
  
});

export { idRouter as default };

