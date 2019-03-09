const Discord = require("discord.js-commando");
const discordjs = require("discord.js");

class serverCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'serverrules',
        group: 'rules',
        memberName: 'serverrules',
        description: 'Inform users of Server-Rules in the Server Rules Channels'
    });
}

    async run(msg, args){
        const modRole = msg.guild.roles.find(role => role.name === "Admin");
        
        // This command removes all messages from all users in the channel, up to 100.
    
        if (!modRole)
        return console.log("The Mods role does not exist");
    
        if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");
        
         
        var myInfo = new discordjs.RichEmbed()
        .setTitle('__**SERVER RULES**__')
        .addField("Offensiveness","1.) Use of offensive words, phrases, or insults towards other people to include but not limited to insulting other races, ethnicities, nationalities, religions, cultures, professions, genders or sexual orientations is strictly prohibited.")
        .addField("Controversial Topics","2.) For controversial topics such as anything that may make others uncomfortable, please simply take them to private messages or DONT SAY IT AT ALL.")
        .addField("Casual Conversations","3.) Keep all conversations irrelevant to this community in the #casual-conversations channel ONLY. (ie: Talks about dating or rants)")
        .addField("No Offensive Jokes","4.) No offensive jokes to include but not limited to ones that involve other races, genders, religions, professions, or sexual orientations.")
        .addField("Must Be SFW (Safe For Work)","5.) No excessive profanity or overly graphic speech, images, or links.")
        .addField("Want To Promote Yourself?","6.) **IF YOU WOULD LIKE TO ADVERTISE OR PROMOTE YOUR OWN WORK** that is relevant to this community, you may do so ONLY in the #promote-yourself channel.")
        .addField("Be Respectful","7.) Be respectful toward one another. If things get heated between you and another member of the community, simply take it to private chat. ")
        .addField("Keeping The Peace","8.) Any topics or discussions that threaten the integrity, peace, or overall equilibrium of the community must be ceased upon orders from myself or @Cyber Users or @Network Security. Failure to oblige CAN result in a direct BAN without any warnings.")
        .addField("Breaking The Rules?","If you see anyone breaking #server-rules let them know. If they do not stop be sure to report them by @mentioning any 'Cyber Users' or 'Admin' if none are available. If you don't do this, little sympathy will be shown if you decide to rat someone out the moment you get in trouble.")
        .setFooter("**If You Have Any FeedBack Post It In The #server-feedback Channel**")
        msg.channel.sendEmbed(myInfo);


        }
      
}
module.exports =serverCommand;