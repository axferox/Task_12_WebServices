import { expect } from "chai";
import  request from "../utils/helpers/request.js"
import { users } from "../utils/data/getRequestData.js"
import { baseUrl}  from "../utils/endpoint/baseUrl.js"

describe("Header containment test", () => {
  let response;

  before(async function(){
    response = await request(`${baseUrl.url}${users.uri}`, users)
  })

  it("Test should check that response code is 200 and the status is OK", async () => {
    const statusCode = (await response).status
    const statusText = (await response).statusText
    expect(`${statusCode} ${statusText}`).equal("200 OK");
  });
});