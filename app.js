// TERMINAL: bash -c "ulimit -s 65500; exec /usr/local/bin/node --stack-size=65500 /Users/brainilio/Desktop/School/Programmeren_09_blockchain/app.js"


const blockhain = require('./blockchain');
const https = require('https');
const axios = require('axios')

let url = 'https://programmeren9.cmgt.hr.nl:8000/api/blockchain'

//log out the getblock function
console.log(getBlock());

function getBlock() { 

//pull data from url
https.get(url + '/next',
res => {
    let body = '';
    let response;
    let block; 

//add data to the body, then json parse the body, then allow the data to go through the functions and 
//add them to variable block
    res.on('data', data => { 
        body += data; 
        response = JSON.parse(body);
        block = hashBlock(response);
    })

//this is what the response on the end should be for us: you want the function to return block when you call it
    res.on('end', () => {
        console.log('timeout:', response.countdown)
        return block
    });
  
}).on('error', error => console.error(error.message));
}

function hashBlock(prevBlock) { 

//you want the blockchain field from the data
    let hashedBlock = prevBlock.blockchain; 
    
//combine all fields necessary to one string
    let hash = (hashedBlock.hash + hashedBlock.data[0].from + 
        hashedBlock.data[0].to + hashedBlock.data[0].amount + 
        hashedBlock.data[0].timestamp + hashedBlock.timestamp + hashedBlock.nonce );

//combined string should go through your algorithm 
    let arrayHash = blockhain.algorithm(hash);
  
//hashed array should be combined with the other necessary fields without the nonce
    let newHash = ( arrayHash + prevBlock.transactions[0].from + prevBlock.transactions[0].to + prevBlock.transactions[0].amount + 
        prevBlock.transactions[0].timestamp + prevBlock.timestamp );

 
//log your hash
console.log('newhash:', newHash); 

       
//put your new string in a function and give a nonce 0
mineBlock(newHash, 0);


}

function mineBlock(string, nonce) {
//combine your string with the nonce
    let newStr = (string + nonce) 
//log out your new string
    console.log(newStr)
//let your new combined string go through your algorithm
    let newHash = blockhain.algorithm(newStr); 

//when your newhash starts with 0000, you want to send your nonce through the postit function to send it to the server
    if (newHash.startsWith('0000')) { 

        postIt(nonce);
        console.log(newHash);
        console.log('nonce:', nonce);

        return newHash;

    } 
//you want to try out multiple nonces from 0 all the way to ...... 
    nonce = nonce+1; 

//call function until you have the desired nonce
    mineBlock(string, nonce)
    
};

function postIt(nonce) { 
    console.log('Nonce is', nonce); 
//post your nonce with the following information to the api
    axios.post(url, {
    user: "Brainilio 0924777",
    nonce: nonce
})
//this is your response if it goes through!
.then((res) => {
  console.log("dit is de response", res.data)
})
.catch((error) => {
  console.error(error)
})

}


