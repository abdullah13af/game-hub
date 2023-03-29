import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "1b8df32f01d941f7b8ec17da8a6efc7f"
  }
});