"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const functions = require("firebase-functions");
// Import microservice
const _1_0_1 = require("./microservice/1.0");
// // Start writing Firebase Functions
// // https://firebase.google.com/docs/functions/typescript
//
exports.api = functions.https.onRequest(_1_0_1.MicroService);
module.exports = {
    api: exports.api
};
//# sourceMappingURL=index.js.map