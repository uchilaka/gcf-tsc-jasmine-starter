"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
// tslint:disable:no-implicit-dependencies
require("jasmine");
const MockHttp = require("supertest");
// Import the main app
const main_1 = require("./main");
const show_endpoint_1 = require("./middleware/show-endpoint");
describe("MainEndpoint", () => {
    const WHERE_AM_I_ENDPOINT = "/test/whereami";
    beforeAll(() => {
        // mock endpoint
        main_1.default.use(WHERE_AM_I_ENDPOINT, show_endpoint_1.WhereAmIEndpoint);
    });
    describe("WhereAmI", () => {
        it("returns success (200)", (done) => __awaiter(this, void 0, void 0, function* () {
            const response = yield MockHttp(main_1.default)
                .get(WHERE_AM_I_ENDPOINT)
                .set("Accept", "application/json");
            console.log("response::", response.body);
            expect(response.status).toEqual(200);
            done();
        }));
    });
});
//# sourceMappingURL=main.spec.js.map