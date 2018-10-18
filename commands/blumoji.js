const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let blmjiembed = new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription(`:spark:`)
    return message.channel.send(blmjiembed);
  }
  if(result === 1) {
    let blmjiembed = new Discord.RichEmbed()
    .setColor("#000000")
    .setDescription(`:masterball:`)
    return message.channel.send(blmjiembed);
  }
}

module.exports.help = {
  name: "blumoji"
}
