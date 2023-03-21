class App {
  constructor() {
    this.bind();
  }

  bind() {
    document.querySelector('.button-add').addEventListener('click', () => {
      this.handleClick(1);
    });

    document.querySelector('.button-subtract').addEventListener('click', () => {
      this.handleClick(-1);
    });
  }

  handleClick(val) {
    const counterEl = document.querySelector('.counter');
    const value = parseInt(counterEl.innerText);

    counterEl.innerText = value + val;
  }
}

new App();


// console.log('Black text');
// console.warn('Yellow text with alert');
// console.error('Red error text');

// console.trace();

// console.group('My group');
// console.log('Into inside group');
// console.log('More info inside group');
// console.groupEnd('My group');

/*
  console.time('Log time');
  setTimeout(()=>{
    console.timeEnd('Log time');
  }, 2000);
*/

// console.table(['Maria Aparecida', 'Digital Innovation One']);
// console.assert(1 === 1, 'Message error');
// console.log('%c styled log', 'color: blue; font-size: 14px;');