const Discord = require('discord.js-commando');
const YTDL = require('ytdl-core');

function play(connection, msg){
 var server = servers[msg.guild.id]
 server.dispatcher = connection.playStream(YTDL(server.queue[0],{filter:"audioonly"}));
 console.log(server.queue[0]);
 server.queue.shift();
 server.dispatcher.on("end", function(){
     if (server.queue[0]){
         play(connection,msg)
     }
     else{
         connection.disconnect();
     }
 })
}
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

        const modRole = msg.guild.roles.find(role => role.name === "Admin");
        const deleteCount = 100;
        // This command removes all messages from all users in the channel, up to 100.
    
        if (!modRole)
        return console.log("The Mods role does not exist");
    
        if (!msg.member.roles.has(modRole.id))
        return msg.reply("You can't use this command.");

        if(msg.member.voiceChannel){
            if (!msg.guild.voiceConnection){
                if (!servers[msg.guild.id]){
                    servers[msg.guild.id] = {queue: []}
                }
                //var server = servers[msg.guild.id]
                msg.member.voiceChannel.join().then(connection =>{
                    var server = servers[msg.guild.id]
                    msg.reply("I've been Summoned!!!");
                    server.queue.push(args);
                    //console.log(msg);
                    play(connection,msg);

                })
            }
        }
        else{
            msg.reply('You must be in a voice channel to summon me');
        }

    }

}
module.exports = JoinChannelCommand;