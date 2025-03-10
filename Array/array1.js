var oddsum=0, evensum=0, arr = [67 , 88 , 55 , 99 , 87 , 124 , 65, 34 , 90 , 78];

for(i=0; i<arr.length; i++){
    if(arr[i] % 2 == 0)
        evensum += arr[i];
    else
        oddsum += arr[i];
}

console.log("Sum of odd numbers: ", oddsum);
console.log("Sum of even numbers: ", evensum);