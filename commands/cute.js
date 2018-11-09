const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let thnkicon = message.author.displayAvatarURL;
      let thnkembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is feeling cute ☺️`, thnkicon)
      .setImage (`https://media.tenor.com/images/a290e077a0c27d60648a53f74584f034/tenor.gif`);
      return message.channel.send(thnkembed);
    }
    if(result === 1) {
      let thnkicon = message.author.displayAvatarURL;
      let thnkembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is feeling cute ☺️`, thnkicon)
      .setImage (`https://media.tenor.com/images/a290e077a0c27d60648a53f74584f034/tenor.gif`);
      return message.channel.send(thnkembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} thinks that they're cute. Well...I don't disagree!***`);

  let thnkicon = message.author.displayAvatarURL;
  let thnkembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Thinking 🤔", thnkicon)
  .setDescription(`***${message.author.username} thinks ${rUser.user.username} is cute.***\nI can see why 😍`)
  .setImage (`http://68.media.tumblr.com/53ca3d877092b34ca450c6722ab29a20/tumblr_ovcydrVAcl1qa94xto1_540.gif`);
  return message.channel.send(thnkembed);
}

module.exports.help = {
  name: "cute"
}
