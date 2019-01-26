import * as express from "express";

// Import endpoint
import main from "./main";

// Version microservice
const endpoint = express();

endpoint.use("/v1", main);

export const MicroService = endpoint;
