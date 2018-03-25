const Discord = require("discord.js");
const fs = require("fs");

exports.run = async (bot, message, args, prefix) => {
    if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("No no no.");
  if(!args[0] || args[0 == "help"]) return message.reply(`Usage: ${prefix}prefix <desired prefix here>`);

  let prefixes = JSON.parse(fs.readFileSync("./prefix.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let prefixEmbed = new Discord.RichEmbed()
  .setColor("#000000")
  .setTitle("Prefix")
  .setDescription(`Set to ${args[0]}`);

  message.channel.send(prefixEmbed);
}
