// Separated to allow for express testing without GCP Functions running locally
import * as express from "express";
import * as CORS from "cors";
import { WhereAmIEndpoint } from "./middleware/show-endpoint";

// Configure microservice
const app = express();

// Parsing body content
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Configure CORS
const corsConfig: CORS.CorsOptions = {
  origin: (host, callback) => {
    return callback(null, true);
  },
  optionsSuccessStatus: 200
};
app.use(CORS(corsConfig));

// GET or POST /where/am/i
app.use("/where/am/i", WhereAmIEndpoint);

// Publish
export default app;
