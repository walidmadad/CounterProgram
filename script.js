// Count program in JavaScript

const countLabel = document.getElementById('count');
const decreaseBtn = document.getElementById('decreaseBtn');
const increaseBtn = document.getElementById('increaseBtn');
const resetBtn = document.getElementById('resetBtn');

let count = Number(countLabel.innerHTML);

decreaseBtn.onclick = function(){
    count--;
    countLabel.textContent = count;
}
increaseBtn.onclick = function(){
    count++;
    countLabel.textContent = count;
}
resetBtn.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}
