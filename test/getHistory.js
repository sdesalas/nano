const axios = require("axios");

axios.get("https://api.nano.to/history/nano_37y6iq8m1zx9inwkkcgqh34kqsihzpjfwgp9jir8xpb9jrcwhkmoxpo61f4o").then(res=>{
    console.log(res.data);
}).catch(error=>{
    console.log(error.response.data);
});