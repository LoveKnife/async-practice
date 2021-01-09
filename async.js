const axios = require(`axios`);

const localhost = `http://localhost:5000/constellations`

async function printTheThing(url){
    try{
    let urlresponse = await axios.get(url)
    return urlresponse
    }
    catch (error){
        return `something went wrong: ( ${error} )`;
    }
}

printTheThing(localhost).then((response)=>{console.log(response)})