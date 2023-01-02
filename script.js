"use strict";
let KM_PER_Points = 5;
let MAX_POINTS = 12;
let SPEED_LIMIT = 70;

function checkSpeed(speed) {
  if (speed <= SPEED_LIMIT + KM_PER_Points) {
    console.log("OK");
    return;
  }
  let points = Math.floor((speed - SPEED_LIMIT) / KM_PER_Points);
  if (points >= SPEED_LIMIT) {
    console.log("Guvohnoma olib qo'yiladi");
  } else {
    console.log(points);
  }
}
checkSpeed(80);
