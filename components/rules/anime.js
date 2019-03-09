const Discord = require("discord.js-commando");
const discordjs = require("discord.js");
class animeCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'animerules',
        group: 'rules',
        memberName: 'animerules',
        description: 'Inform users of Server-Rules in the Anime Channel'
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
        .setDescription('**SERVER RULES**')
        msg.channel.sendEmbed(myInfo);


        }
      
}
module.exports =animeCommand;