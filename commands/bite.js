const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} just bit themself. Ouch!***`);

  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let bticon = message.author.displayAvatarURL;
    let btembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bite 😁", bticon)
    .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
    .setImage (`https://media1.tenor.com/images/a65ebdd440e6dfe12a6ad897c999032d/tenor.gif?itemid=12090625`);
    return message.channel.send(btembed);
  }
  if(result === 1) {
    let bticon = message.author.displayAvatarURL;
    let btembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Bite 😁", bticon)
    .setDescription(`***${message.author.username} just bit ${rUser.user.username}.***\nOww! 😱`)
    .setImage (`https://nerdultlife.files.wordpress.com/2015/09/7ilh93o.gif`);
    return message.channel.send(btembed);
  }
}

module.exports.help = {
  name: "bite"
}
