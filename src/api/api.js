const axios = require("axios");

let key = "49df12cf33eaa281b7e2f194b16195bd";


let getForecast = location => {
  return axios.get(`api.openweathermap.org/data/2.5/forecast?q=${location}APPID=${key}`);
};
