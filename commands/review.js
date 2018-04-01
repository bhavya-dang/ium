const db = require('quick.db')

exports.run = (bot, message, args, func) => {

    if (!message.mentions.members.first()) return message.channel.send('**Please specify a user**\nExample > *~review __@user__ <message> --#*');
    if (!args.join(" ")) return message.channel.send('**Please specify a message**\nExample > *~review @user __<message>__ --#*');

    // Variables
    let rating;
    let msg = args.join(" ");
    let mentioned = message.mentions.members.first();

    // Check if they specified a rating ★☆ < This will be in the description
    if (msg.includes("--5")) rating = '​★★★★★';
    else if (msg.includes("--4")) rating = '​★★★★☆';
    else if (msg.includes("--3")) rating = '​★★★☆☆';
    else if (msg.includes("--2")) rating = '​★★☆☆☆';
    else if (msg.includes("--1")) rating = '​★☆☆☆☆';
    else return message.channel.send('**Please specify a rating of 1-5 at the end of the message**\n Example > *~review @user <message> __--#__*')

    // Clear the message of all ratings & mention
    msg = msg.trim().replace('--5', '').replace('--4', '').replace('--3', '').replace('--2', '').replace('--1', '').replace(mentioned, '');

    // First, we need to fetch the current reviews, so we can add the new one to the top.
    db.fetchObject(`userReviews_${mentioned.user.id + message.guild.id}`).then(i => {

        // We're actually going to move this here also, since if review mentioned someone, it will always return true, but now we only have the message
        if (!msg) return message.channel.send('**Please specify a message**\nExample > *~review @user __<message>__ --#*');

        // New Review
        let review = `${message.author.tag} - ${rating}\n` // We should newline here or else it would look weird.
        review += ` > *${msg.trim()}*\n\n` // Make sure we do two newlines, so it shows when we call it, and in the database.

        // Append the new review to the current reviews
        let text = review + i.text; // This adds the new review to the top of the reviews.

        // Finally, update the userReview_ID object.
        db.updateText(`userReviews_${mentioned.user.id + message.guild.id}`, text.trim()).then(o => {

            // Post in chat that the review was posted
            message.channel.send(`**${message.author.tag} reviewed ${mentioned.user.tag}**\n > *${msg.trim()}*`)

        })


    })


}