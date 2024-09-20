import axios from "axios";

async function fetcher(url: string) {
  let data = await axios.get(url).then((res) => res.data);
  if (!data) data = { success: false, message: "An error ocurred!" };
  return data;
}

export default fetcher;
