import axios from "axios";

const cors_proxy = 'https://intense-hollows-87072.herokuapp.com/'

export const http = axios.create({
    baseURL: `${cors_proxy}https://www.metaweather.com/api/location/`

})