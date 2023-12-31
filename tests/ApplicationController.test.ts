import { TestServer } from "./jest.setup";

describe("ApplicationController requests and responses", () => {

  it("Should return status-code 200", async () => {
    const response = await TestServer.get("/");
    expect(response.status).toBe(200);
    expect(response.text).toMatchSnapshot();
  });

});
