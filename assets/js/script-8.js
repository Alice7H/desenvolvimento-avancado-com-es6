/*
fetch('/assets/data.json', {
  method: 'get',
  body: JSON.stringify()
});
*/

fetch('/assets/data.json')
  .then(responseStream => {
    if (responseStream.status == 200) {
      return responseStream.json();
    } else {
      throw new Error('Request error');
    }
  })
  .then(data => console.log('Data:', data))
  .catch(err => console.log('Erro:', err));


//  async/await
// const testFunc = async function () { }

const asyncTimer = () => new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(12345);
  }, 1000);
});

const simpleFunc = async () => {
  // throw new Error('Oh no!');
  const data = await asyncTimer();
  console.log(data);
  const dataJSON = await fetch('/assets/data.json').then(resStream => resStream.json());
  return dataJSON;
}

simpleFunc()
  .then(console.log)
  .catch(console.log);


const simpleFunc2 = async () => {
  const data = await Promise.all([
    asyncTimer(),
    fetch('/assets/data.json').then(resStream => resStream.json())
  ]);
  return data;
}

simpleFunc2().then(console.log)
