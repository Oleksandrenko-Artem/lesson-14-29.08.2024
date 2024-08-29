const root = document.getElementById('root');

let isRuning = false;
let countSecond = 0;
let idInterval = null;

function startStopWatch(event) { 
    const startButton = event.target;
    const h1 = event.target.parentElement.previousElementSibling;
    if (isRuning === false) {
        isRuning = true;
        startButton.textContent = 'Stop';
        idInterval = setInterval(() => {
            countSecond++;
            h1.textContent = new Date(new Date(0, 0, 0, 0, 0, 0).setSeconds(countSecond)).toLocaleTimeString('en-GB');
        }, 1000);
    } else {
        clearInterval(idInterval);
        isRuning = false;
        startButton.textContent = 'Start';
    }
}
function clearStopWatch(event) {
    console.dir(event.target.parentElement.previousElementSibling);
    const h1 = event.target.parentElement.previousElementSibling;
    h1.textContent = '00:00:00';
    const startButton = event.target.previousElementSibling;
    startButton.textContent = 'Start';
    isRuning = false;
    clearInterval(idInterval);
    countSecond = 0;
}

const renderStopWatch = () => {
    const section = document.createElement('section');
    section.classList.add('stopwatch');
    const h1 = document.createElement('h1');
    h1.textContent = '00:00:00';
    const div = document.createElement('div');
    const startButton = document.createElement('button');
    startButton.textContent = 'Start';
    startButton.classList.add('start');
    startButton.addEventListener('click', startStopWatch);
    const clearButton = document.createElement('button');
    clearButton.textContent = 'Clear';
    clearButton.classList.add('clear');
    clearButton.addEventListener('click', clearStopWatch);
    div.append(startButton, clearButton);
    section.append(h1,  div);
    return section;
}

root.append(renderStopWatch());