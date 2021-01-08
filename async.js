const axios = require(`axios`);

const localhost = `http://localhost:5000/constellations`

async function printTheThing(url){
    let urlresponse = await axios.get(url)

    return urlresponse
}