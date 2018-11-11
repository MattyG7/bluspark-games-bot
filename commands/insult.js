const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1", "2"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let inslticon = message.author.displayAvatarURL;
      let insltembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is insulted!`, inslticon)
      .setImage (`https://i.imgur.com/0Libm89.gif`);
      return message.channel.send(insltembed);
    }
    if(result === 1) {
      let inslticon = message.author.displayAvatarURL;
      let insltembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is insulted!`, inslticon)
      .setImage (`https://img1.ak.crunchyroll.com/i/spire3/94befc6b8045b4fee64cfe393d280f191453324715_full.gif`);
      return message.channel.send(insltembed);
    }
    if(result === 2) {
      let inslticon = message.author.displayAvatarURL;
      let insltembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is insulted!`, inslticon)
      .setImage (`https://media.giphy.com/media/13PZmq2wCkuCbK/giphy.gif`);
      return message.channel.send(insltembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} insulted themself. You're not the only one who does that, don't worry.***`);

  let replies = ["0", "1", "2", "3"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let inslticon = message.author.displayAvatarURL;
    let insltembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Insult 😝", inslticon)
    .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
    .setImage (`http://i.imgur.com/0Libm89.gif`);
    return message.channel.send(insltembed);
  }
  if(result === 1) {
    let inslticon = message.author.displayAvatarURL;
    let insltembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Insult 😝", inslticon)
    .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
    .setImage (`https://img1.ak.crunchyroll.com/i/spire3/94befc6b8045b4fee64cfe393d280f191453324715_full.gif`);
    return message.channel.send(insltembed);
  }
  if(result === 2) {
    let inslticon = message.author.displayAvatarURL;
    let insltembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Insult 😝", inslticon)
    .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
    .setImage (`https://media.tenor.com/images/c97680c9aafdb5e7e0a6c8ff1f35d1e1/tenor.gif`);
    return message.channel.send(insltembed);
  }
  if(result === 3) {
    let inslticon = message.author.displayAvatarURL;
    let insltembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Insult 😝", inslticon)
    .setDescription(`***${rUser.user.username} insulted ${message.author.username}.***\nWas that necessary? 😐`)
    .setImage (`https://i.imgur.com/vu3Q8U8.gif`);
    return message.channel.send(insltembed);
  }
}

module.exports.help = {
  name: "insult"
}
