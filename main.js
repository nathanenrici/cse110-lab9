window.addEventListener('DOMContentLoaded', init);
//constants
const LOG = 1;
const ERROR = 2;
const COUNT = 3;
const WARN = 4;
const ASSERT = 5;
const CLEAR = 6;
const DIR = 7;
const DIRXML = 8;
const GROUP_START = 9;
const GROUP_END = 10;
const TABLE = 11;
const START_TIME = 12;
const END_TIME = 13;
const TRACE = 14;
const GLOBAL_ERROR = 15;

const x = 4;
const y = 3;
const reason = "x is expected to be less than y";

let global = false;

const people = [
    {
      first: 'Nathan',
      last: 'Dnrici',
    },
    {
      first: 'Thomas',
      last: 'Powell',
      birthday: '6/6/1966',
    },
    {
      first: 'William',
      last: 'Butcher',
    }
  ];
window.onerror = function(msg, url, linenumber) {
    if (global){
        console.log("Uh OH!!!! An error occured :(  )");
    }
    
    return true;
}
function init() {
    // dealing with the form stuff
    let form = document.querySelector('form');
    form.addEventListener('submit', e => {
      e.preventDefault();
      let output = document.querySelector('output');
      let firstNum = document.querySelector('#first-num').value;
      let secondNum = document.querySelector('#second-num').value;
      let operator = document.querySelector('#operator').value;
      //uses custom error, try, catch, finally, and throw
      try{
        if (isNaN(firstNum)){
            throw(new CalculatorError("The first number is invalid"));
        }
        if (isNaN(secondNum)){
            throw(new CalculatorError("The second number is invalid"));
        }
        output.innerHTML = eval(`${firstNum} ${operator} ${secondNum}`);
        return 0;
      }catch(err) {
        console.log(err.name);
        console.error(err.message);
      }finally {
        console.log(`tried to do: ${firstNum} ${operator} ${secondNum}`);
      }
    });
    


    //error buttons
    let btns = document.querySelectorAll('button');

    btns[LOG].addEventListener('click', function() {
        console.log("this is a console log");
    });
    btns[ERROR].addEventListener('click', function() {
        console.error("this is a console error");
    });
    btns[COUNT].addEventListener('click', function() {
        console.count("count button");
    });
    btns[WARN].addEventListener('click', function() {
        console.warn("WARNING");
    });
    btns[ASSERT].addEventListener('click', function() {
        console.assert(x < y, {x, y, reason});
    });
    btns[CLEAR].addEventListener('click', function() {
        console.clear();
    });
    btns[DIR].addEventListener('click', function() {
        console.dir(document.head);
    });
    btns[DIRXML].addEventListener('click', function() {
        console.dirxml(document);
    });
    btns[GROUP_START].addEventListener('click', function() {
        console.group("EXAMPLE GROUPING");
    });
    btns[GROUP_END].addEventListener('click', function() {
        console.groupEnd("EXAMPLE GROUPING")
    });
    btns[TABLE].addEventListener('click', function() {
        console.table(people);
    });
    btns[START_TIME].addEventListener('click', function() {
        console.time();
    });
    btns[END_TIME].addEventListener('click', function() {
        console.timeEnd();
    });
    btns[TRACE].addEventListener('click', function() {
        const first = () => { second(); };
        const second = () => { console.trace(); };
        first();
    });
    btns[GLOBAL_ERROR].addEventListener('click', function() {
        global = true;
        console.Error("This error should be gotten by the global watcher");
        global = false;
    });
  }

  class CalculatorError extends Error {
    constructor(message) {
      super(message); 
      this.name = "CalculatorError"; 
    }
  }
  
  function calculateError() {
    throw new CalculatorError("Use valid numbers please");
  }
  