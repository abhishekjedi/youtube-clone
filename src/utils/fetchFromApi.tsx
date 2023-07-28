import axios from "axios";
export const URL = "https://youtube-v31.p.rapidapi.com";
const options = {
  params: {
    maxResult: 50,
  },
  headers: {
    "X-RapidAPI-Key": "65eef8291emshc2c39c91259e8d7p15297ajsn35da30c10aa5",
    "X-RapidAPI-Host": "youtube-v31.p.rapidapi.com",
  },
};

export const fetchFromAPI = async (url: string) => {
  const { data } = await axios.get(`${URL}/${url}`, options);

  return data;
};
