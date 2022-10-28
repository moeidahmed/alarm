function myPromise(executor) {
  this.then = function (myFun) {
    onResolve = myFun;
    return this;
  };
  this.catch = function (myFun) {
    onReject = myFun;
    return this;
  };
  function resolve(v) {
    onResolve(v);
  }
  function reject(v) {
    let failure = (document.getElementById("show").innerHTML = v);
    onReject(failure);
  }
  executor(resolve, reject);
}

function btn() {
  let userName = document.getElementById("uname").value;
  let userAlarm = document.getElementById("alarm").value;
  // console.log(userName, userAlarm);
  CustomAlarm(userName, userAlarm)
    .then((res) => console.log(res))
    .catch((rej) => console.log(rej));
}

function CustomAlarm(n, a) {
  const promise = new myPromise((resolve, reject) => {
    setTimeout(() => {
      if (a % 1000 == 0) {
        let result = (document.getElementById(
          "show"
        ).innerHTML = `Wakeup ${n}`);
        resolve(result);
      } else {
        const err = new Error("Please enter valid milliseconds");
        reject(err);
      }
    }, a);
  });
  console.log(promise);
  return promise;
}
