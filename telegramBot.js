const TelegramBot = require('node-telegram-bot-api');
const { settings } = require('./settings');

const token = settings.tokenBot;

const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/echo (.+)/, (msg, match) => {

  const chatId = msg.chat.id;
  const resp = match[1];

  bot.sendMessage(chatId, resp);
});

bot.on('message', (msg) => {
  const chatId = msg.chat.id;

  bot.sendMessage(chatId, 'Received your message');
});


module.exports.sendTelegranMessage = function (obj) {
  if (obj.type == 'error') {

    bot.sendMessage(settings.mainId, obj.message);

  }
}