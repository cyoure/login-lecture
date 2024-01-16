"use strict";

const users = {
  id: ["wwj9559", "카리나", "원터"],
  psword: ["1234", "1234", "123456"],
};

const output = {
  hello: (req, res) => {
    res.render("home/index");
  },
  login: (req, res) => {
    res.render("home/login");
  },
};
const process = {
  login: (req, res) => {
    console.log(req.body)
    const id = req.body.id,
      psword = req.body.psword;

    if (users.id.includes(id)) {
      const idx = users.id.indexOf(id);
      if (users.psword[idx] === psword) {
        return res.json({
          success: true,
        });
      }
    }
    return res.json({
      success : false,
      msg : "로그인에 실패 하셨습니다.",
    });
  }
};

module.exports = {
  output,
  process,
};
