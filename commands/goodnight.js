const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  return message.channel.send(`Goodnight ${message.author.username}. I hope you have nightmares. ;)`);
}

module.exports.help = {
  name: "goodnight"
}
