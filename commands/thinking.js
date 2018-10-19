const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let thnkicon = message.author.displayAvatarURL;
      let thnkembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is thinking...`, thnkicon)
      .setImage (`https://66.media.tumblr.com/5553b25982fe4281d88eaa3c72fab9e9/tumblr_inline_pb3qitNB2g1qzbkx8_540.gif`);
      return message.channel.send(thnkembed);
    }
    if(result === 1) {
      let thnkicon = message.author.displayAvatarURL;
      let thnkembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      .setAuthor(`${message.author.username} is thinking...`, thnkicon)
      .setImage (`https://66.media.tumblr.com/5553b25982fe4281d88eaa3c72fab9e9/tumblr_inline_pb3qitNB2g1qzbkx8_540.gif`);
      return message.channel.send(thnkembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is doing some deep thinking. Do not disturb!***`);

  let thnkicon = message.author.displayAvatarURL;
  let thnkembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Thinking 🤔", thnkicon)
  .setDescription(`***${message.author.username} is thinking about ${rUser.user.username}.***\nWhat exactly are you thinking about? 😏`)
  .setImage (`https://66.media.tumblr.com/5553b25982fe4281d88eaa3c72fab9e9/tumblr_inline_pb3qitNB2g1qzbkx8_540.gif`);
  return message.channel.send(thnkembed);
}

module.exports.help = {
  name: "thinking"
}
