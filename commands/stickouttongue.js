const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} stood infront of a mirror and stuck their tongue out at their reflection. Why?***`);

  let replies = ["0", "1"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://media.giphy.com/media/13kZCZHYwlpues/giphy.gif`);
    return message.channel.send(tngembed);
  }
  if(result === 1) {
    let tngicon = message.author.displayAvatarURL;
    let tngembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Stick Out Tongue 👅", tngicon)
    .setDescription(`***${message.author.username} stuck out their tongue at ${rUser.user.username}.***\nNnmmm. 😝`)
    .setImage (`https://media1.tenor.com/images/83b0fd40eb0018a1cad129c927f91c06/tenor.gif?itemid=4956482`);
    return message.channel.send(tngembed);
  }
}

module.exports.help = {
  name: "stickouttongue"
}
