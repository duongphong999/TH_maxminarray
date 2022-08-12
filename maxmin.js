function findmin(arr){
    let min = arr[0];
    for(let i =1 ;i<arr.length; i++){
        if(min>arr[i]){
            min = arr[i];

        }
    }return min;
}
let nums = [];
for(let i = 0; i<100; i++){
    nums[i]= Math.floor(Math.random()*101);

}
function findmax(arr){
    let max = arr[0];
    for(let i = 1; i< arr.length; i++){
        if(max<arr[i]){
            max = arr[i];
        }
    }
    return max;
}
let minvalue = findmin(nums);
document.write(minvalue);
document.write("<br/>");
let maxvalue = findmax(nums);
document.write(maxvalue);