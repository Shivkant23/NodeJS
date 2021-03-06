console.log('This example is different!');
console.log('The result is displayed in the Command Line Interface');

// var http  = reqiure('http');
// http.createServer(function(req, ))

function avg(a, b){
    return (a+b)/2;
}

var c = avg(2,6);
console.log(c);

var arr = [1,3,2,4,5,6];
// for(let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

arr.forEach(function(e){
    console.log(e);
});

var element = document.getElementById('click');
console.log(element);
console.log(element.innerHTML);
console.log(element.innerText);

var ele = document.getElementsByClassName('container');
console.log(ele);