// import axios from "axios";


const axios = require("axios");
function generateFullUrl() {
  const domain =
    process.env.NODE_ENV === "production"
      ? process.env.REACT_APP_DOMAIN
      : "localhost:5000";
  const http = process.env.NODE_ENV === "production" ? "https" : "http";
  return `${http}://${domain}`;
}

const api = axios.create({
  baseURL: generateFullUrl() + "/api",
});
export const GetUsers = api.get('/users');
export const getAllGuides = api.get("/password").then(res => {
    console.log('res.data',res.data)
 
    return res.data
  
}).catch(err => {
  console.log(err);
});
console.log('generateFullUrl()',api)
export const searchGuideById = (id) => api.get(`/password/:${id}`).then(res =>{
  console.log('res',res);
  return res
});


export const whatsapp = api.post('/whatsapp').then(res =>{
  console.log('whatsapp', res)
  return res
})
export const searchGuides = (country, lang, city, cost, comments) =>
  api.get(
    `search?${new URLSearchParams({
      country,
      lang,
      city,
      cost,
      comments,
    }).toString()}`
  );

const apis = { getAllGuides, searchGuides,whatsapp ,GetUsers};

export default apis;


