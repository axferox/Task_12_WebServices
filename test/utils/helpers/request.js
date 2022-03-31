import axios from "axios";

export default async function request(url, options) {
  const response = await axios(url, options)
  return response;
}
