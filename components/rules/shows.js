const Discord = require("discord.js-commando");
const discordjs = require("discord.js");
class showsCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'showsrules',
        group: 'rules',
        memberName: 'showsrules',
        description: 'Inform users of Server-Rules in the Shows Channel'
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
        .setTitle('__**SHOWS MOVIES AND MUSIC RULES**__')
        .addField("Offensiveness","1.) Use of offensive words, phrases, or insults towards other people to include but not limited to insulting other races, ethnicities, nationalities, religions, cultures, professions, genders or sexual orientations is strictly prohibited.")
        .addField("Shows-Movies-and-Music","This channel is used to talk about and share your favourite Shows, Movies, and Music. As a developer, we must take breaks and have fun too! Socializing is very important!!!")
        .addField("Breaking The Rules?","If you see anyone breaking #server-rules let them know. If they do not stop be sure to report them by @mentioning any 'Cyber Users' or 'Admin' if none are available. If you don't do this, little sympathy will be shown if you decide to rat someone out the moment you get in trouble.")
        .setFooter("**If You Have Any FeedBack Post It In The #server-feedback Channel**")
        msg.channel.sendEmbed(myInfo);


        }
      
}
module.exports =showsCommand;