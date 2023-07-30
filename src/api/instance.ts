import axios from "axios";

export const instance = axios.create({
  baseURL: "https://ott-details.p.rapidapi.com",
  timeout: 1000,
  headers: { 'X-RapidAPI-Key': '1ec75ba5cdmshafc4bec1682387dp1dde8djsn89c5c2a83d68', 'X-RapidAPI-Host': 'ott-details.p.rapidapi.com' },
});



