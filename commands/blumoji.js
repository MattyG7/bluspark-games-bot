const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  //let replies = ["0", "1", "2", "3", "4"];
  //let result = Math.floor((Math.random() * replies.length));

  if(args[0] === "happy") {
    return message.channel.send(`<:happy:502494527425347605>`);
  }
  if(args[0] === "sad") {
    return message.channel.send(`...`);
  }
  if(args[0] === "sleepy") {
    return message.channel.send(`...`);
  }
}

module.exports.help = {
  name: "blumoji"
}
