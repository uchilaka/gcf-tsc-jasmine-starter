"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// Import endpoint
const main_1 = require("./main");
// Version microservice
const endpoint = express();
endpoint.use("/v1", main_1.default);
exports.MicroService = endpoint;
//# sourceMappingURL=index.js.map