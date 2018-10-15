const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***Aww. Are you on your own, ${message.author.username}?***`);

  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://media.giphy.com/media/fGHjOa7MC2J56/giphy.gif`);
    return message.channel.send(grtembed);
  }
  if(result === 1) {
    let grticon = message.author.displayAvatarURL;
    let grtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Greet 👋", grticon)
    .setDescription(`***${message.author.username} greeted ${rUser.user.username}.***\n😄`)
    .setImage (`https://k35.kn3.net/taringa/8/8/8/1/6/0/6/zlerj/902.gif?9182`);
    return message.channel.send(grtembed);
  }
}

module.exports.help = {
  name: "greet"
}
