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
        if (msg.guild.voiceConnection){
            msg.guild.voiceConnection.disconnect();
        }
        else{
            msg.reply("I must be in a voice channel to be removed Master");
        }

    }

}
module.exports = LeaveChannelCommand;