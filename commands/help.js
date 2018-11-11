const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Commands:**")
  .setColor("#1fd1c8")
  .addField("Profile Stuff", "`profile, wallet, level, daily, setup`", )
  .addField("Greets", "`hello, hi, hey, goodbye, bye, goodnight, night, seasonal`")
  .addField("Other Phrases", "`ilikeyou, iloveyou, ihateyou`")
  .addField("Actions", "`poke, punch, kill, greet, slap, lick, pinch, pat, hug, kiss, snog, bite, eat, stickouttongue, happy, sad, cry, laugh, cheer, congrats, scare, dance, brushhair, excited, thinking, cute, bored, insult, blush, mad, loli, endlessgift, themepark`")
  .addField("Emotions & Solo Actions", "`happy, sad, cry, laugh, cheer, dance, brushhair, excited, thinking, cute, bored, insult, blush, mad, endlessgift, themepark`")
  //.addField("Actions", "`stop, run`")
  //.addField("Emotions", "`dizzy`")
  .addField("Games", "`flip, roll, bowl, penalty, rps, memory, deal, dontgetbit`")
  .addField("Fun", "`8ball, flip, roll, bowl, penalty, say, blumoji`")
  .addField("Randomising", "`sing, colour, emoji, anime, fortune, loli`")
  .addField("Education", "`calc`")
  .addField("Admin Only", "`clear, steal, spam`")
  .addBlankField(true)
  .addField("***For examples***", "*type ~helpx*");
  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}
