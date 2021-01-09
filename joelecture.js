const axios = require("axios");
const gitapi = `https://api.github.com/users/`

function fetchUser(username){
    return axios.get(`${gitapi}${username}`);
}

async function main(){
    try{
    let result = await fetchUser(`LoveKnife`)
    return result
    }
    catch (error){
    return `Something broke ==> ${error}`
    }
}

main().then((response)=>{console.log(response.data.name)});