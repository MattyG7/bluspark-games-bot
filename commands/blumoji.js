const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    return message.channel.send(<:spark:>);
  }
  if(result === 1) {
    return message.channel.send(:masterball:);
  }
}

module.exports.help = {
  name: "blumoji"
}
