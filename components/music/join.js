const Discord = require('discord.js-commando');

class JoinChannelCommand extends Discord.Command{

    constructor(client){
        super(client,{
            name: 'join',
            group: 'music',
            memberName: 'join',
            description: 'Joins the voice channel of the admin'
        });
    }

    async run (msg, args){
        if(msg.member.voiceChannel){
            if (!msg.guild.voiceConnection){
                msg.member.voiceChannel.join().then(connection =>{
                    msg.reply("I've been Summoned!!!");
                })
            }
        }
        else{
            msg.reply('You must be in a voice channel to summon me');
        }

    }

}
module.exports = JoinChannelCommand;