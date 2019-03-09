const Discord = require("discord.js-commando");
const discordjs = require("discord.js");
class casualCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'casualrules',
        group: 'rules',
        memberName: 'casualrules',
        description: 'Inform users of Server-Rules in the Casual Conversations Channels'
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
module.exports =casualCommand;