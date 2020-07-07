const request = require("supertest");
const app = require("../../app");
const endpointUrl = "https://generator.swagger.io/api/gen/clients/ada";

describe(endpointUrl, () => {
  it("GET " + endpointUrl, async () => {
    const response = await request(app)
      .get(endpointUrl)
    expect(response.statusCode).toBe(200);
  });
  it(
    "should return error 500 on malformed data with GET" + endpointUrl,
    async () => {
      const response = await request(app)
        .get(endpointUrl)
      expect(response.statusCode).toBe(500);
    }
  );
});
