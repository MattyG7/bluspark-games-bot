const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://pa1.narvii.com/6093/71b38743e19360974208c5e50667477de6ec938d_hq.gif`);
      return message.channel.send(excembed);
    }
    if(result === 1) {
      let excicon = message.author.displayAvatarURL;
      let excembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is excited!`, excicon)
      .setImage (`https://pa1.narvii.com/6093/71b38743e19360974208c5e50667477de6ec938d_hq.gif`);
      return message.channel.send(excembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is excited!***`);

  let excicon = message.author.displayAvatarURL;
  let excembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Excited 😄", excicon)
  .setDescription(`***${message.author.username} is excited about what ${rUser.user.username} just said!***\nYay! 😁`)
  .setImage (`https://pa1.narvii.com/6093/71b38743e19360974208c5e50667477de6ec938d_hq.gif`);
  return message.channel.send(excembed);
}

module.exports.help = {
  name: "excited"
}
