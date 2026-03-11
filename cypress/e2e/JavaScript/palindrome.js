
function ispalindrome(data){

let data1=data.split('').reverse().join('');
return(data==data1)?"is palindrome":"is not palindrome";
}
console.log(ispalindrome("121"));