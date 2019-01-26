import * as functions from "firebase-functions";

// Import microservice
import { MicroService } from "./microservice/1.0";

// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
export const api = functions.https.onRequest(MicroService);

module.exports = {
  api
};
