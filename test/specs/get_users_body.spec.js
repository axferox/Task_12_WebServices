import { expect } from "chai";
import  request from "../utils/helpers/request.js"
import { users } from "../utils/data/getRequestData.js"
import { baseUrl}  from "../utils/endpoint/baseUrl.js"

describe("Body containment test", () => {
  let response;

  before(async function(){
    response = await request(`${baseUrl.url}${users.uri}`, users)
  })

  it("Test should check the amont of objects retrieved in body", async () => {
    expect((await response.data).length).equal(10)
  });
});

