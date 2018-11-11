const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if(!args[0]) {
    let thmprkicon = message.author.displayAvatarURL;
    let thmprkembed = new Discord.RichEmbed()
    .setColor("#1fd1c8")
    .setAuthor(`${message.author.username} is on a rollercoaster.`, thmprkicon)
    .setImage (`https://vignette.wikia.nocookie.net/charlotte-anime/images/8/86/Yuuscream.gif/revision/latest?cb=20160405234941`);
    return message.channel.send(thmprkembed);
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is on a rollercoaster. You look scared...***`);

  let thmprkicon = message.author.displayAvatarURL;
  let thmprkembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Theme Park 🎢", thmprkicon)
  .setDescription(`***${rUser.user.username} is on a rollercoaster with ${message.author.username}.***\nWeeeeee!`)
  .setImage (`https://vignette.wikia.nocookie.net/charlotte-anime/images/d/dd/Tumblr_o4x8k82yuH1rxe51eo1_540.gif/revision/latest?cb=20160405192605`);
  return message.channel.send(thmprkembed);
}

module.exports.help = {
  name: "themepark"
}
