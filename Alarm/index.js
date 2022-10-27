function btn() {
  let userName = document.getElementById("uname").value;
  let userAlarm = document.getElementById("alarm").value;
  const promise = CustomAlarm(userName, userAlarm);
  console.log(promise);
  promise
    .then(function (val) {
      console.log(val);
    })
    .catch(function (err) {
      console.log(err.message);
    });
}

//Testing
function CustomAlarm(a, b) {
  let prom = new Promise((resolve, reject) => {
    if (b % 1000 == 0) {
      setTimeout(() => {
        let result = (document.getElementById(
          "show"
        ).innerHTML = `Wakeup ${a}`);
        resolve(result);
      }, b);
    } else {
      let err = new Error("You got an error");
      reject(err);
    }
  });
  return prom;
}
