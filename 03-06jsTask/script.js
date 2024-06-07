





//timer

let x= setInterval(function(name){
    alert("Hello mr.Rambabu wellcome")
},5000,"Rambabu");
console.log(x)
// clearInterval(x)




function greet() {
    document.getElementById("ram").textContent = "Hello mr.Rambabu Bhukya"
  }
  
  let timeoutID = setTimeout(greet, 5000);
  
  // Cancels the timeout
//   clearTimeout(timeoutID);

  


//3rd task DOM Project with Timers:
function startCountdown(duration) {
  let remainingTime = duration;
  document.getElementById('countdown1').textContent = remainingTime;

  let intervalID = setInterval(function() {
    remainingTime--;
     document.getElementById('countdown1').textContent = remainingTime;

     if (remainingTime <= 0) {
     clearInterval(intervalID);
     document.getElementById('countdown1').textContent = 'Time\'s up!';
     }
   }, 1000);
}

startCountdown(5); 



// function createMultiplier(multiplier) {
//     return function (number) {
//       return number * multiplier;
//     };
//   }
  
//   const double = createMultiplier(2);
//   console.log(double(10)); 
  
//   const triple = createMultiplier(3);
//   console.log(triple(5)); 



//1.task
  function processNumber(number, callback) {
    return callback(number);
  }
  
  function double(number) {
    return number * 2;
  }
  
  function triple(number) {
    return number * 3;
  }
  
  console.log(processNumber(5, double));
  console.log(processNumber(5, triple));




  //spread operatorm on arrays
  let array1=["Ram","Raghu", "Dilip"];
  let array2 = ["Shiva", "Shirisha", "Shravry"]

  let array3=[
    ...array1,
    ...array2
  ]
  document.getElementById("spread").innerHTML=array3;





  //rest on arrays
const[fst,second ,...restofTheValues]=array3;
console.log(fst);
console.log(second);
console.log(restofTheValues);





obj1= {
  name : "Ram",
  age: 26,
  study: "btech",
  cgpa:8.28

}
const{name, age, ...restofKys}=obj1
console.log(name);
console.log(restofKys)




//task given by rakesh sir

var1 =["a","b,","c","d","e","f","g","h","i","j","k","l","m",'n','o',"p","q","r","s","t","u","v","w","x","y","z"];
var2 =["a",'e',"i","o","u"]
var3 =[];
for(values of var2){
  if(var1.includes(values)) {
    var3.push(values);
  }
}
document.getElementById("var3").innerHTML=`The vowels in var3 are ${ var3}`



//this
const person = {
  firstName: 'Rambabu', 
  lastName: 'Bhukya', 
  
  fullName: function() { 
    return this.firstName + ' ' + this.lastName; // 'this' refers to the person object
    let ram= person.fullName()
  }
  
};

console.log(person.fullName()); 





//dom
 function myFunction(duration1) {

  
 }