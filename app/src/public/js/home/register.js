"use strict";

const id = document.querySelector("#id"),
  name = document.querySelector("#name"),
  psword = document.querySelector("#psword"),
  comfirmPsword = document.querySelector("#confirm-psword"),
  registerBin = document.querySelector("#button");

registerBin.addEventListener("click", register);

function register() {
  const req = {
    id: id.value,
    name: name.value,
    psword: psword.value,
    comfirmPsword: comfirmPsword.value,
  };
  fetch("/register", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req),
  })
    .then((res) => res.json())
    .then((res) => {
      if (res.success) {
        location.href = "/login";
      } else {
        alert(res.msg);
      }
    })
    .catch((err) => {
      console.error("로그인 중 에  러 발생");
    });
}
