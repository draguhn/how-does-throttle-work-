//Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.


function throttle (func, wait) {

  var alreadExecuted = false;

  return function () {

    if (alreadExecuted === false) {
      func.call();
      alreadExecuted = true;

      setTimeout(function () {
        alreadExecuted = false;
        }, wait);
    }
  }
}

const btn = document.getElementById("btn");

function buttonClick () {
  let div = document.createElement("div");
  div.innerHTML="holis";
  div1.appendChild(div);
}

btn.addEventListener("click", throttle(buttonClick,2000));