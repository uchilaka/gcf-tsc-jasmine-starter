// tslint:disable:no-implicit-dependencies
import "jasmine";
import * as MockHttp from "supertest";

// Import the main app
import app from "./main";

import { WhereAmIEndpoint } from "./middleware/show-endpoint";

describe("MainEndpoint", () => {
  const WHERE_AM_I_ENDPOINT = "/test/whereami";

  beforeAll(() => {
    // mock endpoint
    app.use(WHERE_AM_I_ENDPOINT, WhereAmIEndpoint);
  });

  describe("WhereAmI", () => {
    it("returns success (200)", async (done: DoneFn) => {
      const response = await MockHttp(app)
        .get(WHERE_AM_I_ENDPOINT)
        .set("Accept", "application/json");

      console.log("response::", response.body);

      expect(response.status).toEqual(200);

      done();
    });
  });
});
