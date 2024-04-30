/* function lessThan100(a,b){
  let sum = a + b;
  if(sum < 100){
    return true;
  }else{
    return false;
  }
}
let ans = lessThan100(30,10);
console.log(ans) 


function animals(chicken, cow, goat){
  return (chicken * 2) + (cow * 4) + (goat * 4);
}
let ans = animals(1,2,3);
console.log(ans); 

function profitableGamble(prob, prize, pay){
  let win = prob * prize;
  if(win > pay){
    return true; 
  }else{
    return false;
  }
}
console.log(profitableGamble(0.9, 1, 2)) 

function boolToString(flag){
  if(flag){
    return "true";
  }else{
    return "false"
  }
}

let ans = boolToString(true);
console.log(typeof(ans))
console.log(ans)  

function makesTen(a,b){
  let c = a + b;
  if(a==10 || b==10 || c == 10){
    return true;
  }else{
    return false;
  }
}
let ans = makesTen(1,1);
console.log(ans);     


function addUp(num){
  let sum = 0;
  for(let i = 1; i<=num; i++){
    sum += i;
  }
  return sum
}
let ans = addUp(6);
console.log(ans);    

function minMax(arr) {
  let min = arr[0];
  let max = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < min) {
      min = arr[i];
    }
    if (arr[i] > max) {
      max = arr[i];
    }
  }
  return [min, max];
}
let ans = minMax([1, 2, 3, 4, 5, 6]);
console.log(ans);  


function whichIsLarger(f, g) {
  let resultF = f();
  let resultG = g();
  
  if (resultF > resultG) {
      return 'f';
  } else if (resultF < resultG) {
      return 'g';
  } else {
      return 'neither';
  }
}

console.log(whichIsLarger(() => 20, () => 10));    


function canNest(arr1, arr2){
  let minArr1 = Math.min(...arr1);
  let maxArr1 = Math.max(...arr1);
  let minArr2 = Math.min(...arr2);
  let maxArr2 = Math.max(...arr2);

  if(minArr1 > minArr2 && maxArr1 < maxArr2){
    return true;
  }else{
    return false;
  }

}
console.log(canNest([1, 2, 3, 4], [0, 6]));  

function minMax(arr){
  let min = arr[0];
  let max = arr[0];
  for(let i = 0; i<arr.length; i++){
    if(arr[i]<min){
      min = arr[i]
    }else if(arr[i] > max){
      max = arr[i]
    }else{
      console.log('error')
    }
  }
  return [min, max]
}

let ans = minMax([2,2,3,4,9,5,6,1,7]);
console.log(ans); 

function removeDupicate(arr){
  let uniqueElement = [];
  for(let i = 0; i<arr.length; i++){
    if(uniqueElement.indexOf(arr[i])=== -1){
      uniqueElement.push(arr[i])
    }
  }
  return uniqueElement;
}
console.log(removeDupicate([1,2,2,1,4,5,3,6,7])) 



// Arrow Function
// 1. Fat Arrow function (basic)
let fnc = (a,b) => {
return a + b;
}
console.log(fnc(2,2));

// 2. Fat Arrow function with one parameter

let a  = (para)=> {
return para
}
console.log(a(12))

// 3. Fat Arrow function with implicit return

let b = () => 12;
console.log(b()) 


// Rest Operator => isko hum jab use krte jab humko bache hue values ko ek hi variable mai daalna ho

function abcd(a,b,c,...d){
console.log(a,b,c, d)
}
abcd(1,2,3,4,5,6,7) 

// Destructuring => jaise ki hum array ki values ko alag alag variable mai lena cha rahe hai to waha hum destructuring use krte hai
// Array
let a = [1, 2, 3];
let [b, c, d, e] = a;

// Object

let obj = {
  Name: "suhail",
  age: 21
};

let {age} = obj
let {Name} = obj 

for(let i = 10; i>=1; i--){
  console.log(i)
} */


