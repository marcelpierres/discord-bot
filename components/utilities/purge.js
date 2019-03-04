const Discord = require("discord.js-commando");

class PurgeCommand extends Discord.Command{
constructor(client){
    super(client,{
        name: 'purge',
        group: 'utilities',
        memberName: 'purge',
        description: 'Wipes a channel of up too 100 texts'
    });
}

    async run(msg, args){
        const modRole = msg.guild.roles.find(role => role.name === "Admin");
        const deleteCount = 100;
        // This command removes all messages from all users in the channel, up to 100.
    
        if (!modRole)
        return console.log("The Mods role does not exist");
    
        if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");
        
         msg.channel.bulkDelete(deleteCount);
        }
      
}
module.exports =PurgeCommand;