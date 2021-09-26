//input = PaKiStAn
//output = pAkIsTaN
// let str = "PaKiStAn";
// let temp = "";
// let nStr = "";
// for(let i = 0; i < str.length; i++){
//     if((str.charCodeAt(i) >= 65) && (str.charCodeAt(i) <= 91)){
//         temp = str.charCodeAt(i);
//         nStr += String.fromCharCode(temp+32);
//     }
//     else if((str.charCodeAt(i) >= 97) && (str.charCodeAt(i) <= 123)){
//         temp = str.charCodeAt(i);
//         nStr += String.fromCharCode(temp-32);
//     }
// }
// console.log(`Input:  ${str}
// Output: ${nStr}`);

//input = I love my Country
//output = Country my love I
// let str = "I love my Country";
// let arr = str.split(' ');
// str = "";
// for(let i = arr.length-1; i >= 0; i--){
//     str += arr[i] + " ";
// }
// console.log(str);

//input = Madam     Output = Palindrome
//input = Sir       Output = Not Palindrome
let str = "madam";
let flag = true;
for(let i = 0; i < parseInt(str.length/2); i++){
    if(str[i] !== str[(str.length-1)-i]){
        flag = false;
    }
}
if(flag === true){
    console.log("Palindrome");
}
else{
    console.log("Not Palindrome");
}