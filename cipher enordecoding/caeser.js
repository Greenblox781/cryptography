'use strict'
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function encode(message, shift){
    let newstring = '';
    for(let i = 0; i< message.length; i++){
        let charCode = message.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
        charCode = ((charCode - 65 + shift) % 26) + 65;
        }else if(charCode >= 97 && charCode <= 122){
        charCode = ((charCode - 97 + shift)%26) + 97;
        }
        newstring += String.fromCharCode(charCode);
    
    
    }
    return newstring;
}


function decode(message, shift){
    let newstring = '';
    for(let i = 0; i< message.length; i++){
        let charCode = message.charCodeAt(i);
        if(charCode >= 65 && charCode <= 90){
        charCode = ((charCode - 65 - shift) % 26) + 65;
        }else if(charCode >= 97 && charCode <= 122){
        charCode = ((charCode - 97 - shift)%26) + 97;
        }
        newstring += String.fromCharCode(charCode);
    
    
    }
    return newstring;
}

function main(){
 rl.question('Enter 1 to encode, 2 for decode', (choice)=>{
    rl.question("Enter the message", (message)=>{
        rl.question("Enter the shift",(shift)=>{
            shift = Number(shift);
            if(choice == 1){
                encode(message, shift)
            }else if(choice == 2){
                decode(message, shift)
            }
        })
    })
    
 })
}
main();