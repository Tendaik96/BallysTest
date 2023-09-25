import express from "express";
import { Request, Response, NextFunction, Application } from "express";
import Router from "./routes/searchByName";
import idRouter from "./routes/searchById";
import readmeRouter from './routes/getReadme'

const app : Application = express(); 
const PORT = process.env.PORT || 3000;

const logger = (req : Request, res : Response, next : NextFunction) => {
  //console.log(req.method, req.url);
  
  next();
}
app.use(logger)

app.use("/api/repositories", Router);
app.use("/api/repositoryDetails", idRouter);
app.use("/api/getreadme", readmeRouter);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});

export { app as default }