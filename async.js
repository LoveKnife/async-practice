const axios = require(`axios`);

const localhost = `http://localhost:5000/constellations`

async function printTheThing(url){
    try{
    let urlresponses = await  Promise.all([
        axios.get(url),
        axios.put(url,{"Test Constellation" : "Wah"})
    ])
    return urlresponse
    }
    catch (error){
        return `something went wrong: ( ${error} )`;
    }
}

printTheThing(localhost).then((response)=>{console.log(response)})