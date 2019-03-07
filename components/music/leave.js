const Discord = require('discord.js-commando');

class LeaveChannelCommand extends Discord.Command{

    constructor(client){
        super(client,{
            name: 'leave',
            group: 'music',
            memberName: 'leave',
            description: 'leaves the voice channel of the admin'
        });
    }

    async run (msg, args){
        const modRole = msg.guild.roles.find(role => role.name === "Admin");
        const deleteCount = 100;
        // This command removes all messages from all users in the channel, up to 100.
    
        if (!modRole)
        return console.log("The Mods role does not exist");
    
        if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");

        if (msg.guild.voiceConnection){
            msg.guild.voiceConnection.disconnect();
        }
        else{
            msg.reply("I must be in a voice channel to be removed");
        }

    }

}
module.exports = LeaveChannelCommand;