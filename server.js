import express from "express";

import {dirname} from "path";
import {fileURLToPath} from "url";


const port = 3000;
const _dirname = dirname(fileURLToPath(import.meta.url))
const app = express();
app.use(express.json(),express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
    res.sendFile(_dirname + "/Q1.html");
});

app.listen(port, () => {
    console.log('server running on port 3000.');
})

//calculating the summation
app.post('/findSummation',(req,res)=>{
    const N = req.body.n;
    const result = findSummation(N);
    if(result===false){
        res.send("Invalid input");
    }
    else{
        res.send(`The summation of 1 to ${N} is ${result}`);
    }
});

function findSummation (N =1){
    let sum = 0;
    if(isNaN(N)||N<0){
        return false;
    }
    for(let i = 1;i <= N;i++){
        sum += i;
    }
    return sum;
}

//Capitalize the first letter and last letter of a String
app.post('/uppercaseFirstAndLast',(req,res)=>{
    const word = req.body.word;
    const result = uppercaseFirstAndLast(word);
    if(result===false){
        res.send("Invalid input");
    }
    else{
        res.send(`The modified word is ${result}`);
    }
});

function uppercaseFirstAndLast(word){
    if(typeof word != "string"){
        return false;
    }
    let modifiedWord = word.charAt(0).toUpperCase()+word.substring(1,word.length-1)+word.charAt(word.length-1).toUpperCase();
    return modifiedWord;
}

//getting the average and median 
app.post('/findAverageAndMedian',(req,res)=>{
    const numbersArr = req.body.arr;
    const result = findAverageAndMedian(numbersArr);
    if(result===false){
        res.send("Invalid input");
    }
    else{
        res.send(`The average is ${result[0]} and the median is ${result[1]}`);
    }
});

function findAverageAndMedian(numbers){
    const arr = numbers.split(",");
    if(!(Array.isArray(arr))){
        return false;
    }
    let sum = 0;
    for(let i = 0;i<arr.length;i++){
        sum += parseInt(arr[i]);
    }
    let average = sum/(arr.length);
    let median=0;

    const mid= Math.floor(arr.length/2);
    arr.sort((a,b)=>a-b);
    if(arr.length%2 != 0){
        median = arr[mid];
    }
    else {
        median = (parseFloat(arr[mid - 1]) + parseFloat(arr[mid])) / 2;
    }
    let result = [average,median];
    return result;
}

//getting the 
app.post('/findFourDigits',(req,res)=>{
    const stringOfNumbers = req.body.stringOfNumbers;
    const result = findFourDigits(stringOfNumbers);
    if(result===false){
        res.send("Invalid input");
    }
    else{
        res.send(`The first four digits are ${result}`);
    }
});

function findFourDigits(stringOfNumbers){
    if(typeof stringOfNumbers != "string"||stringOfNumbers.length<4){
        return false;
    }
    let arr = stringOfNumbers.split(" ");
    const fourDigits=[];
    for(let i = 0;i<arr.length&&i<4;i++){
        fourDigits.push(arr[i]);
    }
    return fourDigits;
}