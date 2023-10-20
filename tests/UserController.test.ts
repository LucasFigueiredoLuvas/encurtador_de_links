import { TestServer } from "./jest.setup";

describe("UserController requests and responses", () => {

  it("GET/usuario/cadastro should return status-code 200", async () => {
    const response = await TestServer.get("/");
    expect(response.status).toBe(200);
  });

  it("POST/usuario should return status-code 201 when Valid payload is send", async () => {
    const user = { 
      name: "Lucas", 
      email: "lucas@domain.com", 
      password: "skjfro1#",
      passwordConfirmation: "skjfro1#"
    };
    
    const request = await TestServer.post("/usuario").send(user);
    expect(request.status).toBe(201);
  });

  it("POST/usuario should return status-code 400 when INvalid payload is send", async () => {
    const user = { 
      name: "L", 
      email: "lucas-email", 
      password: "abcde123",
      passwordConfirmation: "abcde123"
    };
    
    const request = await TestServer.post("/usuario").send(user);
    expect(request.status).toBe(400);
  });

  it("PUT/usuario should return status-code 200 when payload User has successfully updated", async () => {
    const user = {
      id: "2839baa0-b1f3-44ec-b8bf-249ca91712c8",
      name: "Lucas Figueiredo", 
      email: "lucas@algum.com", 
      password: "f3z%pql24ijhs#123%",
      passwordConfirmation: "f3z%pql24ijhs#123%"
    };
    
    const request = await TestServer.post("/usuario").send(user);
    expect(request.status).toBe(200);
  });

});
