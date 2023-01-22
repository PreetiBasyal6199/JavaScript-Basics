// How would you implement this:

const array = [3,2,4];

function getMaxNumber(arr){
  //code here  
  let max = arr[0]
  for(i=0; i<array.length; i++){
    if (array[i+1]> max){
        max=array[i+1]
    }
  }
  return max
}

console.log(getMaxNumber(array)) // should return 3