const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  if (!args[0]) {
    let replies = ["0", "1"];
    let result = Math.floor((Math.random() * replies.length));

    if(result === 0) {
      let lghicon = message.author.displayAvatarURL;
      let lghembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor("Laugh 😂", tngicon)
      .setAuthor(`${message.author.username} finds that very funny!`, lghicon)
      .setImage (`https://media1.tenor.com/images/f7d0b534e95c24a53b9767b480e76df3/tenor.gif?itemid=11203476`);
      return message.channel.send(lghembed);
    }
    if(result === 1) {
      let lghicon = message.author.displayAvatarURL;
      let lghembed = new Discord.RichEmbed()
      .setColor("#1fd1c8")
      //.setAuthor("Laugh 😂", tngicon)
      .setAuthor(`${message.author.username} finds that quite funny!`, lghicon)
      .setImage (`https://media1.tenor.com/images/2dcfc6694bb1a931c60bb67a6323e40d/tenor.gif?itemid=10067925`);
      return message.channel.send(lghembed);
    }
  }
  let rUser = message.mentions.members.first();
  if(args[0] && !rUser) return message.channel.send(`User not found! 😕`);
  if(rUser.id === message.author.id) return message.channel.send(`***${message.author.username} is laughing at themself. Everyone, back away slowly...***`);

  let lghicon = message.author.displayAvatarURL;
  let lghembed = new Discord.RichEmbed()
  .setColor("#1fd1c8")
  .setAuthor("Laugh 😂", lghicon)
  .setDescription(`***${message.author.username} is laughing at ${rUser.user.username}.***\nWhat's so funny? 😅`)
  .setImage (`https://media1.tenor.com/images/b3e0ecd965e324aa328a0137c38a44f1/tenor.gif`);
  return message.channel.send(lghembed);
}

module.exports.help = {
  name: "laugh"
}
