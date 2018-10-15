const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let rUser = message.mentions.members.first();
  if(!rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} feels proud. ☺️***`);

  let replies = ["0", "1", "2", "3"];
  let result = Math.floor((Math.random() * replies.length));

  if(result === 0) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`http://images6.fanpop.com/image/photos/40900000/charlotte-ayumi-otosaka-charlotte-anime-40994003-540-304.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 1) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`http://i.imgur.com/cNYdJ8U.png`);
    return message.channel.send(cngrtembed);
  }
  if(result === 2) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://66.media.tumblr.com/fcd1e8ca7563c4e07c3027537eab1b14/tumblr_oph9r9XtyN1vj3zbeo1_500.gif`);
    return message.channel.send(cngrtembed);
  }
  if(result === 3) {
    let cngrticon = message.author.displayAvatarURL;
    let cngrtembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor("Congrats 🎊", cngrticon)
    .setDescription(`***${message.author.username} says "Congratulations, ${rUser.user.username}"!***\n🎉🎉🎉`)
    .setImage (`https://data.whicdn.com/images/217035852/original.gif`);
    return message.channel.send(cngrtembed);
  }
}

module.exports.help = {
  name: "congratulations"
}
