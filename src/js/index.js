/* eslint-disable */

import "file-loader?name=[name].[ext]!../index.html";
import "../assets/img/rigo-baby.jpg";
import "../assets/img/4geeks.ico";
//import 'breathecode-dom'; //DOM override to make JS easier to use
import "../style/index.scss";

function cambiar() {
  let numbers = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  let suits = ["hearts", "clubs", "diamons", "spades"];

  let number = numbers[[Math.floor(Math.random() * numbers.length)]];
  let suit = suits[Math.floor(Math.random() * suits.length)];

  let st = undefined;

  if (suit == "hearts") {
    st = "\u2665";
    document.querySelector(".suit-up").innerHTML = st;
    document.querySelector(".suit-bottom").innerHTML = st;
    document.querySelector(".suit-up").style.color = "red";
    document.querySelector(".suit-bottom").style.color = "red";
    document.querySelector(".number").innerHTML = number;
    document.querySelector(".number").style.color = "red";
  }
  if (suit == "clubs") {
    st = "\u2663";
    document.querySelector(".suit-up").innerHTML = st;
    document.querySelector(".suit-bottom").innerHTML = st;
    document.querySelector(".number").innerHTML = number;
  }
  if (suit == "diamons") {
    st = "\u2666";
    document.querySelector(".suit-up").innerHTML = st;
    document.querySelector(".suit-bottom").innerHTML = st;
    document.querySelector(".suit-up").style.color = "red";
    document.querySelector(".suit-bottom").style.color = "red";
    document.querySelector(".number").innerHTML = number;
    document.querySelector(".number").style.color = "red";
  }
  if (suit == "spades") {
    st = "\u2660";
    document.querySelector(".suit-up").innerHTML = st;
    document.querySelector(".suit-bottom").innerHTML = st;
    document.querySelector(".number").innerHTML = number;
  }
}

window.onload = cambiar();

document.getElementById("btn").addEventListener("click", cambiar);
