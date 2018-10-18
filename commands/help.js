const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
  let helpembed = new Discord.RichEmbed()
  .setDescription("**Commands:**")
  .setColor("#1fd1c8")
  .addField("Profile Stuff", "`profile, wallet, level, daily, setup`", )
  .addField("Greets", "`hello, hi, hey, goodbye, bye, goodnight, night`")
  .addField("Other Phrases", "`ilikeyou, iloveyou, ihateyou`")
  .addField("Actions", "`poke, punch, kill, greet, slap, lick, pinch, pat, hug, kiss, snog, bite, eat, stickouttongue, sad, cry, laugh, congrats, scare, dance, brushhair`")
  .addField("Emotions & Solo Actions", "`sad, cry, laugh, dance, brushhair`")
  //.addField("Actions", "`insult, mad, endlessgift, themepark, stop, run`")
  //.addField("Emotions", "`cute, excited, bored, thinking, happy, cheer, mad, blush, themepark, dizzy`")
  .addField("Games", "`flip, roll, bowl, penalty, rps, memory, deal, dontgetbit`")
  .addField("Fun", "`8ball, flip, roll, bowl, penalty, say, blumoji`")
  .addField("Randomising", "`sing, colour, emoji, anime, fortune`")
  .addField("Education", "`calc`")
  .addField("Admin Only", "`clear, steal, spam`")
  .addBlankField(true)
  .addField("***For examples***", "*type ~helpx*");
  return message.channel.send(helpembed);
}

module.exports.help = {
  name: "help"
}
