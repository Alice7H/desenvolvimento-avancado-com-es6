// callbacks
function doSomething(callback) {
  setTimeout(function () {
    callback('First data');
  }, 1000);
}

function doOtherThing(callback) {
  setTimeout(function () {
    callback('Second data');
  }, 1000);
}
// callback hell
function doAll() {
  try {
    doSomething(function (data) {
      var processedData = data.split('');
      try {
        doOtherThing(function (data2) {
          var processData2 = data2.split('');
          try {
            setTimeout(function () {
              console.log(processedData, processData2);
            }, 1000);
          } catch (err) {
            // handle error
          }
        });
      } catch (err) {
        // handle error
      }
    });
  } catch (err) {
    // handle error
  }
}
doAll();

// promises
const doSomethingPromise = () => new Promise((resolve, reject) => {
  // throw new Error('Something went wrong 1');
  setTimeout(function () {
    resolve('First data');
  }, 1000);
});

const doOtherThingPromise = () => new Promise((resolve, reject) => {
  // throw new Error('Something went wrong 2');
  setTimeout(function () {
    resolve('Second data');
  }, 1000);
});

doSomethingPromise()
  .then(data => {
    console.log(data.split(''));
    return doOtherThingPromise();
  })
  .then(data2 => console.log(data2.split('')))
  .catch(error => console.log('Oops', error));

Promise.all([doSomethingPromise(), doOtherThingPromise()])
  .then((data) => {
    for (let value of data) {
      console.log(value.split(''));
    }
  }).catch(err => {
    console.log(err);
  });

// pending
//console.log('pending:', doSomethingPromise());

// fulfilled
//doSomethingPromise().then(data => console.log('fulfilled:', data));

// reject
/*
  doOtherThingPromise()
    .then(data => console.log('not rejected:', data))
    .catch(error => console.log('reject:', error));
*/
