const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!message.member.hasPermissions("MANAGE_ROLES")) return message.reply("You don't have premmsions to do that!");
  let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
  if(!rMember) return message.reply("User not found.");
  let role = args.join(" ").slice(22);
  if(!role) return message.reply("Specify a role!");
  let gRole = message.guild.roles.find(`name`, role);
  if(!gRole) return message.reply("Role not found. ");

  if(rMember.roles.has(gRole.id)) return message.reply("This user already has that role.");
  await(rMember.addRole(gRole.id));

    await message.channel.send(`**${rMember} has the role ${gRole.name} now!**`)
}

module.exports.help = {
  name: "addrole"
}
