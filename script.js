"use strict";

// display date

const app1 = document.querySelector(".top");

const now = new Date();

const formatDate = function (date) {
  const day = `${date.getDate()}`.padStart(2, 0);
  const month = `${date.getMonth() + 1}`.padStart(2, 0);
  const year = date.getFullYear();
  const hours = date.getHours();
  const min = `${date.getMinutes()}`.padStart(2, 0);
  if (hours < 13) {
    return `${month}/${day}/${year}, ${hours}:${min} AM`;
  } else {
    return `${month}/${day}/${year}, ${hours - 12}:${min} PM`;
  }
};

const tag1 = `<p>Current Time: <b>${formatDate(now)}</b></p>`;

app1.insertAdjacentHTML("beforeend", tag1);
