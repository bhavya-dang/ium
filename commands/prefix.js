const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  //if(!message.member.hasPermission("MANAGE_SERVER")) return message.channel.send("You do not have permission to do that!");
  if(!args[0] || args[0 == "help"]) return message.channel.send("Usage: ium prefix <desired prefix here>");

  let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"));

  prefixes[message.guild.id] = {
    prefixes: args[0]
  };

  fs.writeFile("./prefixes.json", JSON.stringify(prefixes), (err) => {
    if (err) console.log(err)
  });

  let prefixEmbed = new Discord.RichEmbed()
  .setColor("#f5a3fa")
  .setTitle("Prefix")
  .setDescription(`Prefix has been set to ${args[0]}`);

  message.channel.send(prefixEmbed);

}

module.exports.help = {
    name: "prefix"
  }
