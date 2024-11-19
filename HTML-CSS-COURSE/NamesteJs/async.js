// always Returns a promise

const p = new Promise((resolve, reject) =>{
    resolve("Promise resloved Value");

})
// always returns a promise
async function getData(){
return p;
}

const dataPromise = getData();

dataPromise.then((res) => {
    console.log(res);
})


const p1 = new Promise((resolve , reject) => {
   setTimeout(()=> {
    resolve("Promise resloved Value1");
   },5000);
});

const p2 = new Promise((resolve , reject) => {
    setTimeout(()=> {
     resolve("Promise resloved Value2");
    },10000);
 });

// await can only be used inside an async function

async function handlePromise(){

    //JS Engine wait for the Promise to be resloved
    const val = await p1;
    console.log("Nameste Javascript");
    console.log(val);

    const val2 = await p2;
    console.log("Nameste Javascript 2");
    console.log(val2);

}

handlePromise();

//https://invalidUser
//https://api.github.com/users/Anjali598


const API_URL = "https://api.github.com/users/Anjali598";

//await can only be used inside an async function

async function handlePromiseUrl() {

   try{
    const  response = await fetch(API_URL);
   const result = await response.json();
   console.log(result);
   }
   catch(error){
    console.log(error);

   }
    
}

handlePromiseUrl();

// Another  Tredinational way to handle a async function

async function handlePromiseUrl1() {
 
    const  response = await fetch(API_URL);
    const result = await response.json();
    console.log(result);
             
 }
 
 handlePromiseUrl1().catch((error) => {
    console.log(error);
 });