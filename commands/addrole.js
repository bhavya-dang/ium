const Discord = require("discord.js");
  
exports.run = async (bot, message, args) => {
  
    if(!message.member.hasPermissions("MANAGE_MEMBERS")) return message.reply("**You do not have permission to mute them.**");
    let rMember = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);
    if(!rMember) return message.reply("**User not found.**");
    let role = args.join(" ").slice(22);
    if(!role) return message.reply("**Specify a role.**");
    let gRole = message.guild.roles.find(`name`, role);
    if(!gRole) return message.reply("**Role not found.**");
  
    if(rMember.roles.has(gRole.id)) return message.reply("User already has that role.");
    await(rMember.addRole(gRole.id));
  
    try{
      message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}.`)
    }catch(e){
      message.channel.send(`<@${rMember.id}> has been given the role ${gRole.name}`)
    }
  
}