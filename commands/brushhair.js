const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let brshicon = message.author.displayAvatarURL;
    let brshembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor(`${message.author.username} is brushing their hair.`, brshicon)
    .setImage (`https://66.media.tumblr.com/7fb61893ff820fed476a866dbad6d5f0/tumblr_o6fkieLJVk1uhe91xo1_500.gif`);
    return message.channel.send(brshembed);
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is brushing their hair. Going out somewhere?***`);

  let brshicon = message.author.displayAvatarURL;
  let brshembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Brush Hair 💆", brshicon)
  .setDescription(`***${message.author.username} is brushing ${rUser.user.username}'s hair.***\nAww, how nice. 😊`)
  .setImage (`https://steamusercontent-a.akamaihd.net/ugc/2436887475161476368/3F4A58ED2A714800FADFF57C7CD5274628A4648A/`);
  return message.channel.send(brshembed);
}

module.exports.help = {
  name: "brushhair"
}
