const { sendTelegranMessage } = require("./telegramBot.js");

setInterval(() => {
  sendTelegranMessage({ type: "error", message: "У НАС ВСЕ ГОРИИИИТ!Т!!!!" });
}, 40000);

setInterval(() => {
  sendTelegranMessage({ type: "warning", id: 476670750, message: "Вася, у нас проблемы, напиши мне" });
}, 20000);
