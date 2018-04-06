const Discord = require("discord.js")

module.exports.run = (bot, message, args) => {

   //!8ball question
   if(!args[1]) return message.channel.send("**See how well two users love each other by mentioning at least one user.** Usage: ium bond <user>");
   
   //var bondLevelResults = ["​🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤", "​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤", "♥♥🖤🖤🖤🖤🖤🖤🖤🖤", "♥♥♥🖤🖤🖤🖤🖤🖤🖤", "♥♥♥♥🖤🖤🖤🖤🖤🖤", "♥♥♥♥♥🖤🖤🖤🖤🖤", "♥♥♥♥♥♥🖤🖤🖤🖤", "♥♥♥♥♥♥♥🖤🖤🖤", "♥♥♥♥♥♥♥♥🖤🖤", "♥♥♥♥♥♥♥♥♥🖤", "♥♥♥♥♥♥♥♥♥♥", "♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥"];

   //var bondLevel = Math.floor((Math.random() * bondLevelResults.length));
   var bondLevel = Math.floor(Math.random() * 102);

    if (bondLevel > 100 ) {
        var ship = 'Perfect Couple <3_<3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel == 100) {
        var ship = 'Lit Couple <3 :ok_hand:'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥♥`
    } else
    if (bondLevel >= 90 && bondLevel < 100) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥♥🖤`
    } else
    if (bondLevel >= 80 && bondLevel < 90) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥♥🖤🖤`
    } else
    if (bondLevel >= 75 && bondLevel < 80) {
        var ship = 'Great Couple <3'
        var bondLevelResults = `♥♥♥♥♥♥♥🖤🖤🖤`
    } else
    if (bondLevel >= 70 && bondLevel < 75) {
        var ship = 'A littly risky but can work out! '
        var bondLevelResults = '♥♥♥♥♥♥♥🖤🖤🖤'
    } else
    if (bondLevel >= 60 && bondLevel < 70) {
        var ship = 'Eh.'
        var bondLevelResults = '♥♥♥♥♥♥🖤🖤🖤🖤'
    } else
    if (bondLevel >= 50 && bondLevel < 60) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥♥🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 40 && bondLevel < 50) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥♥🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 30 && bondLevel < 40) {
        var ship = 'Eh. '
        var bondLevelResults = `♥♥♥🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 25 && bondLevel < 30) {
        var ship = 'No Comment'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 20 && bondLevel < 25) {
        var ship = 'Rip'
        var bondLevelResults = `♥♥🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 10 && bondLevel < 20) {
        var ship = 'Rip'
        var bondLevelResults = `​♥🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } else
    if (bondLevel >= 0 && bondLevel < 10) {
        var ship = 'Not even possible...'
        var bondLevelResults = `🖤🖤🖤🖤🖤🖤🖤🖤🖤🖤`
    } 
   

   var bondEmbed = new Discord.RichEmbed()

   //.setAuthor(`${message.author} x ${bondPartner2}`)
   .setColor("#000000")
   .addField("Users", `${args[0]} x ${args[1]}`)
   .addField("Bond Score", `${bondLevel}%`)
   .addField("Bond Bar", bondLevelResults)
   .addField("Summary", ship);


   message.channel.send(bondEmbed)


}


module.exports.help = {
    name: "bond"
}