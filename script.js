//your JS code here. If required.
const myPromise = new Promise(function(myResolve, myReject) {
  setTimeout(function(){ myResolve("Hello, world!"); }, 5000);
});

myPromise.then(function(value) {
  document.getElementById("output").innerHTML = value;
});
