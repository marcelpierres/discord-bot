const Discord = require("discord.js-commando");
const discordjs = require("discord.js");

class feedbackCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'feedbackrules',
        group: 'rules',
        memberName: 'feedbackrules',
        description: 'Inform users of Server-Rules in the Server Feedback Channel'
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
        .setTitle('__**SEVER FEEDBACK RULES**__')
        .addField("SERVER FEED BACK","Have any feedback to improve the server? I am here to fulfill those needs.")
        msg.channel.sendEmbed(myInfo);


        }
      
}
module.exports =feedbackCommand;