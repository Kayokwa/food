import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer swBaOCOQsfOrJ3V6HOWPh9C2YciVmk4uhpz4AMvfHCApE0vBzzHX_oSUJHCgKsemg8QBh5JXwNhvbAO32NvWUtrlyjkbSM1THeSQNppa-Zf_wVXkBXVAx-mzLIrrYXYx",
  },
});
