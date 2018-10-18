const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(`<:spark:501492938212245524>`);
  }
  if(result === 1) {
    return message.channel.send(`<:masterball:501490551468720138>`);
  }
}

module.exports.help = {
  name: "blumoji"
}
