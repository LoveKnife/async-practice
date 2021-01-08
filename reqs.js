const axios = require('axios');

function justPrintTheDataMan(url){
    axios.get(url).then((response) => {return response.data.find((element)=> element.name === 'Crater')})
    .then((result)=>{result.name = "wow"; return result
}).then((lastresult)=>{console.log(lastresult)}).catch((error)=> console.log(`we caught the error:${error}`));
};
justPrintTheDataMan(`http://localhost:5000/constellations`);