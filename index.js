
const CronJob = require('cron').CronJob;
const request = require('request');

new CronJob('0 * * * * * *', ()=>{
    getLogs()
}, null, true, 'America/Montevideo');

getLogs =  () =>{
    request.post('http://localhost:4444', {
        json: {"jsonrpc":"2.0","method":"eth_getLogs","params":[{  "address":"0xde2D53e8d0E673A4b1D9054cE83091777F2fd8Ce", "fromBlock": "0x0", "toBlock": "latest" }],"id":74}

    }, (error, res, body) => {
        if (error) {
            console.error(error)
            return
        }
        console.log(`statusCode: ${res.statusCode}`);
        console.log(res.body.result)
    })
}