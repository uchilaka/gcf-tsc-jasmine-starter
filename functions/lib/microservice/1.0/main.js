"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Separated to allow for express testing without GCP Functions running locally
const express = require("express");
const show_endpoint_1 = require("./middleware/show-endpoint");
// Configure microservice
const app = express();
// GET or POST /where/am/i
app.use("/where/am/i", show_endpoint_1.WhereAmIEndpoint);
// Publish
exports.default = app;
//# sourceMappingURL=main.js.map