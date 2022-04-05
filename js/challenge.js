'use strict';
const counter = document.getElementById('counter');
const btnPause = document.getElementById('pause');
btnPause.textContent = 'pause';
const btnPlus = document.getElementById('plus');
const btnMinus = document.getElementById('minus');
const btnHeart = document.getElementById('heart');
const likeList = document.querySelector('.likes');
const commentsList = document.getElementById('list');
const form = document.getElementById('comment-form');

const ticker = function () {
   countNum += 1;
   counter.textContent = countNum;
};

let countNum = parseInt(counter.textContent, 10);
let timer = setInterval(ticker, 1000);
const likesObj = {};
let likes = 0;

btnPause.addEventListener('click', () => {
   if (btnPause.textContent === 'pause') {
      clearInterval(timer);
      btnPause.textContent = 'resume';
      btnPlus.disabled = true;
      btnMinus.disabled = true;
      btnHeart.disabled = true;
   } else {
      timer = setInterval(ticker, 1000);
      btnPause.textContent = 'pause';
      btnPlus.disabled = false;
      btnMinus.disabled = false;
      btnHeart.disabled = false;
   }
});

btnPlus.addEventListener('click', () => {
   clearInterval(timer);
   countNum += 1;
   btnPause.textContent = 'pause';
   counter.textContent = countNum;
   timer = setInterval(ticker, 1000);
});

btnMinus.addEventListener('click', () => {
   clearInterval(timer);
   countNum -= 1;
   btnPause.textContent = 'pause';
   counter.textContent = countNum;
   timer = setInterval(ticker, 1000);
});

btnHeart.addEventListener('click', () => {
   // test to see if countNum property exists
   if (likesObj[countNum] !== undefined) {
      likesObj[countNum] += 1;
      document.getElementById(
         countNum
      ).textContent = `${countNum} is liked ${likesObj[countNum]} times.`;
   } else {
      likes = 0;
      likesObj[countNum] = likes += 1;
      const likeItem = document.createElement('li');
      likeItem.id = countNum;
      likeItem.textContent = `${countNum} is liked ${likesObj[countNum]} time.`;
      likeList.appendChild(likeItem);
   }
});

form.addEventListener('submit', (e) => {
   e.preventDefault();
   const commentItem = document.createElement('p');
   commentItem.textContent = document.getElementById('comment-input').value;
   commentsList.appendChild(commentItem);
   form.reset();
});
