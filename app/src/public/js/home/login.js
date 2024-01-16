"use strict";

const id = document.querySelector("#id"),
    psword = document.querySelector("#psword"),
    loginBin = document.querySelector("button");

loginBin.addEventListener("click", login);

function login(){
    const req = {
        id : id.value
    };
    console.log(req);
}

