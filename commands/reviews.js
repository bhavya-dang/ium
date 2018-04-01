const db = require('quick.db')

exports.run = (bot, message, args, func) => {

    // Check if a user was specified
    if (!message.mentions.members.first()) return message.channel.send('**Please specify a user**\n\n Example > *~reviews __@user__*')

    // Variables
    let mentioned = message.mentions.members.first()

    // Fetch reviews
    db.fetchObject(`userReviews_${mentioned.user.id + message.guild.id}`).then(i => {

        // If i.text is empty (no reviews found) run this...
        if (!i.text) return message.channel.send('**This person has not been reviewed yet!**\n > *~review @user <message> --# (# = 1-5)*')

        // We need to create a function, because it will be over 2048 characters eventually...
        func.splitEmbed(message.channel, `**Reviews for ${mentioned.user.tag}**\n\n` + i.text, 120000) // Sends the current reviews to the channel, then deletes them after 2 minutes.

    })
    
}