import { expect } from "chai";
import  request from "../utils/helpers/request.js"
import { users } from "../utils/data/getRequestData.js"
import { baseUrl}  from "../utils/endpoint/baseUrl.js"

describe("Request status test", () => {
  let response;

  before(async function(){
    response = await request(`${baseUrl.url}${users.uri}`, users)
  })
  
  it("Test should check that headers content type matches the expected", async () => {
    expect((await response).headers["content-type"]).equal("application/json; charset=utf-8");
  });
});