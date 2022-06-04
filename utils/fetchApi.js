import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      "X-RapidAPI-Key": "60dc67b27fmshb08dd7a2044af3ap1c8e0ejsnbf765fcff5a0",
    },
  });
  return data;
};
