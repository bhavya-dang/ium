const Discord = require("discord.js")

exports.run = async (bot, message, args) => {

   let literally = ["**literally** shut up", "Sam is ****literally**** me", "You **literally** become what you think about", "I'm **literally** all over the place",
   "Don't ever fall in love. It **literally** sucks.", "**literally** just going to work out till I die", "Your eyes are **literally** so pretty",
   "Shrinkage is **literally** the devil", "Black licorice jelly beans are **literally** the worst thing in the world", "**literally** kill my family",
   "Having to poop while driving is **literally** a nightmare", "**literally** me", "I talk to **literally** no one", "Call me a discord bot and I'm dead, **literally** dead",
   "**literally** fuming!!!", "I **literally** gained 11 upvotes today... what", "When I read your tweets to us I **literally** could start crying.", "I **literally** taste death",
   "Getting ignore **literally** makes my heart sink to the ground", "Summer **literally** flew past us, can we just hit restart", "My house **literally** just turned into a high class starbucks",
   "I **literally** burned down my house, **literally**", "I'm dying, **literally**", "His smile **literally** lights up my life", "I'm **literally** done with him"
   ,"My heart **literally** broke into a million pieces", "There is **literally** a lady in my house", "**literally** give up", "**literally** living life", "**literally** shoot me",
   "**literally** who gave you the right to be this cute?", "**literally** going to go insane", "Those wannabes **literally** need to stop", "**literally** cannot deal with my mother today"
   ,"Your **literally** hitler", "My friend is **literally** a furry", "I **literally** saw hitler today", "**literally** my fursona", "My fursuits are **literally** cute"];
   let result = Math.floor((Math.random() * literally.length));

   let literallyE = new Discord.RichEmbed()
   .setColor("#000000")
   .setDescription(literally[result]);

   message.channel.send(literallyE)
}

module.exports.help = {
    name: "literally"
}
