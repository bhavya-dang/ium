const Discord = require("discord.js")

module.exports.run = async (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.reply("**See how well two users love each other by mentioning at least one user.** Usage: ium match <user> <user>");
   
   //let bondLevelResults = ["​█", "██", "███", "████", "█████", "██████", "███████", "████████", "█████████", "██████████"];
   let bondLevelPercentage = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%", "100%"];

   let bondLevel = Math.floor((Math.random() * bondLevelPercentage.length));

   /** 
 //I'm so bad at coding, and I couldnt think of any more effective way to do this so...
 if (bondLevelResults == "1"){
    let bondLevelBox = ["​█"];
    let bondLevelPercentage = ["10%"];
}else
if (bondLevelResults == "2"){
    let bondLevelBox = ["██"]
    let bondLevelPercentage = ["20%"];
}else
if (bondLevelResults == "3"){
    let bondLevelBox = ["███"]
    let bondLevelPercentage = ["30%"];
}else
if (bondLevelResults == "4"){
    let bondLevelBox = ["████"]
    let bondLevelPercentage = ["40%"];
}else
if (bondLevelResults == "5"){
    let bondLevelBox = ["█████"]
    let bondLevelPercentage = ["50%"];
}else
if (bondLevelResults == "6"){
    let bondLevelBox = ["███████​"]
    let bondLevelPercentage = ["60%"];
}else
if (bondLevelResults == "7"){
    let bondLevelBox = ["████████​"]
    let bondLevelPercentage = ["70%"];
}else
if (bondLevelResults == "8"){
    let bondLevelBox = ["████████​█"]
    let bondLevelPercentage = ["80%"];
}else
if (bondLevelResults == "9"){
    let bondLevelBox = ["█████████"]
    let bondLevelPercentage = ["90%"];
} else
if (bondLevelResults == "10"){
    let bondLevelBox = ["██████████"]
    let bondLevelPercentage = ["100%"];
}
*/


   //Two Users
   let bondPartner1 = message.mentions.users.first();

   let bondEmbed = new Discord.RichEmbed()

   //.setAuthor(`${message.author} x ${bondPartner2}`)
   .setColor("#000000")
   .addField("Users:", `${message.author} x ${bondPartner1}`)
   .addField("Bond Level", ` ${bondLevel}`);

   message.channel.send(bondEmbed)


}