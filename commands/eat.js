const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***How do you taste, ${message.author.username}?***`);

  let replies = ["0", "1", "2"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://media.giphy.com/media/SasDDqOSRclNu/giphy.gif`);
    return message.channel.send(etembed);
  }
  if(result === 1) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://i.kym-cdn.com/photos/images/original/001/128/078/94a.gif`);
    return message.channel.send(etembed);
  }
  if(result === 2) {
    let eticon = message.author.displayAvatarURL;
    let etembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Eat 🍴", eticon)
    .setDescription(`***${message.author.username} ate ${rUser.user.username}.***\n😦`)
    .setImage (`https://i.pinimg.com/originals/83/f0/b9/83f0b9bab10e38ec034e2d32992bf4c8.gif`);
    return message.channel.send(etembed);
  }
}

module.exports.help = {
  name: "eat"
}
