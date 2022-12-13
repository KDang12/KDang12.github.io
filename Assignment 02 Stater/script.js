"use strict";
const dislayEmail = function (mail) {
  document.querySelector(".mail").textContent = mail;
};
const dislayView = function (view) {
  document.querySelector(".exp").textContent = view;
};
const dislayView1 = function (view) {
  document.querySelector(".sk").textContent = view;
};
const dislayView2 = function (view) {
  document.querySelector(".lang").textContent = view;
};
const dislayView3 = function (view) {
  document.querySelector(".act").textContent = view;
};
const dislayView4 = function (view) {
  document.querySelector(".learn").textContent = view;
};
const dislayView5 = function (view) {
  document.querySelector(".like1").textContent = view;
};
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".check").addEventListener("click", function () {
  const email = document.querySelector("input").value;
  if (!email) {
    document.querySelector(".mail").classList.add("color");
    dislayEmail("Please enter email!");
  } else if (regex.test(email)) {
    document.querySelector(".check-mail").classList.add("hiden");
    document.querySelector(".inf").classList.remove("hiden");
  } else {
    document.querySelector(".mail").classList.add("color");
    dislayEmail("Please enter the correct email!");
  }
});
window.addEventListener("load", function () {
  document.querySelector(".check-mail").classList.remove("hiden");
  document.querySelector(".inf").classList.add("hiden");
  document.querySelector(".exp1").classList.add("hiden");
  document.querySelector(".sk1").classList.add("hiden");
  document.querySelector(".lang1").classList.add("hiden");
  document.querySelector(".act1").classList.add("hiden");
  document.querySelector(".learn1").classList.add("hiden");
  document.querySelector(".like").classList.add("hiden");
});

document.querySelector(".exp").addEventListener("click", function () {
  if (document.querySelector(".exp1").classList.contains("hiden")) {
    dislayView("View less");
    document.querySelector(".exp1").classList.remove("hiden");
  } else {
    dislayView("View more");
    document.querySelector(".exp1").classList.add("hiden");
  }
});

document.querySelector(".sk").addEventListener("click", function () {
  if (document.querySelector(".sk1").classList.contains("hiden")) {
    dislayView1("View less");
    document.querySelector(".sk1").classList.remove("hiden");
  } else {
    dislayView1("View more");
    document.querySelector(".sk1").classList.add("hiden");
  }
});

document.querySelector(".lang").addEventListener("click", function () {
  if (document.querySelector(".lang1").classList.contains("hiden")) {
    dislayView2("View less");
    document.querySelector(".lang1").classList.remove("hiden");
  } else {
    dislayView2("View more");
    document.querySelector(".lang1").classList.add("hiden");
  }
});

document.querySelector(".act").addEventListener("click", function () {
  if (document.querySelector(".act1").classList.contains("hiden")) {
    dislayView3("View less");
    document.querySelector(".act1").classList.remove("hiden");
  } else {
    dislayView3("View more");
    document.querySelector(".act1").classList.add("hiden");
  }
});

document.querySelector(".learn").addEventListener("click", function () {
  if (document.querySelector(".learn1").classList.contains("hiden")) {
    dislayView4("View less");
    document.querySelector(".learn1").classList.remove("hiden");
  } else {
    dislayView4("View more");
    document.querySelector(".learn1").classList.add("hiden");
  }
});

document.querySelector(".like1").addEventListener("click", function () {
  if (document.querySelector(".like").classList.contains("hidenl")) {
    dislayView5("View less");
    document.querySelector(".like").classList.remove("hidenl");
  } else {
    dislayView5("View more");
    document.querySelector(".like").classList.add("hidenl");
  }
});
