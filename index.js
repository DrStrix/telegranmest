const { sendTelegranMessage } = require("./telegramBot.js");

setInterval(() => {
  sendTelegranMessage({ type: "error", message: "У НАС ВСЕ ГОРИИИИТ!Т!!!!" });
}, 40000);

setInterval(() => {
  sendTelegranMessage({ type: "warning", user: "Vasya Stepanov", message: "Вася, у нас проблемы, напиши мне" });
}, 20000);
