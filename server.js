// var Web3 = require('web3');

// var web3 = new Web3(new Web3.providers.HttpProvider('https://goerli.infura.io/v3/45328e52ee8a41d4ab8f55de72566b25'));

// let address = '0x12858f5b368940594c7c2E9FFCeCaF3F3F484747';

// web3.eth.getBalance(address).then((result)=>{console.log(result)});

// let Web3 = require('web3');

const express = require('express');
const path = require('path');

const app = express();

app.get('/', (req,res)=>{
    res.sendFile(path.join(__dirname+"/index.html"));
})

const server = app.listen(5000);
const portNumber = server.address().port;
console.log(`iam listening on port ${portNumber}`);