// Import stylesheets
import './style.css';

const appDiv = document.getElementById('app');
appDiv.innerHTML; 

const useTheMap = function() {
  const myNum = [1, 2, 3, 4, 5, 6];
  const squareNum = myNum.map(num => num * num);
  
  console.log(squareNum);
  // should print : 
  // [ 1, 4, 9, 16, 25, 36 ]
}; 
useTheMap(); // call the function 
