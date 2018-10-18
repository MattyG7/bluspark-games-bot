const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    const spark = client.emojis.find(emoji => emoji.name === "spark");
    return message.channel.send(spark);
  }
  if(result === 1) {
    const masterball = client.emojis.find(emoji => emoji.name === "masterball");
    return message.channel.send(masterball);
  }
}

module.exports.help = {
  name: "blumoji"
}
