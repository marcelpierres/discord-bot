const Discord = require("discord.js-commando");
const discordjs = require("discord.js");
const token = require("./config");
const client = new Discord.Client();
const BotStats =['Protecting the Chat','Watching Over Users', 'Scanning', 'Threat Found', 'Eliminating Threat', 'Maintaining The Balance'];
const WakeStats = ['I Have Risen!','Good Morning Everyone!','I Am Back!', 'Lets Get This Bread','Another Day.... More Technology','Hey Everyone, Its Time to Program', 'Its Time to Learn','Ive Been Reborn','The Group Grows Stronger'];
var duration = 10000;
global.servers = {};
// locations of commands
client.registry.registerGroup('utilities','Utilities');
client.registry.registerGroup('rules','Admin-Rules');
client.registry.registerDefaults();
client.registry.registerCommandsIn(__dirname +"/components")

// ready event
client.on('ready',  () => {
  console.log(`Logged in as ${client.user.tag}!`);
  let OnStat = WakeStats[Math.floor(Math.random()*WakeStats.length)];
  client.channels.find(x => x.name ==="bot-docs").send(OnStat);

  //changing the status
  setInterval(function(){
    let status = BotStats[Math.floor(Math.random()*BotStats.length)];
    client.user.setPresence({game: {name: status}, status:'online'});
    duration =Math.random() * (300000 - 10000) + 10000;
  },duration)
});

//Join Event Welcome-Page 
client.on('guildMemberAdd', member =>{
 console.log(member.user.username+" has joined our server!");
 console.log(member);

 var role = member.guild.roles.find('name','New Users');
 member.addRole(role);

 member.guild.channels.get('488538691334307843').send('<@'+member.user.id+'>'+' has joined the team!!!!!!   :pray:');
 var myInfo = new discordjs.RichEmbed()
        .setTitle('__**WELCOME**__')
        .addField("Make Sure To Read #server-rules and #announcements"," WELCOME TO THE COMMUNITY!!!! Make sure to read all server rules and announcements.")
        .addField("Want To Promote Yourself?"," **IF YOU WOULD LIKE TO ADVERTISE OR PROMOTE YOUR OWN WORK** that is relevant to this community, you may do so ONLY in the #promote-yourself channel.")
        .addField("Have Fun!"," Most importantly have fun! Again, welcome to the community of Afro/Black Developers")
        .setFooter("**If You Have Any FeedBack Post It In The #server-feedback Channel**")
        member.guild.channels.get('488538691334307843').sendEmbed(myInfo);
});


 
// message events
client.on('message', async msg => {
   
   // ensure bot doesnt repond to other bots 
  if (msg.author.bot) return;
  if(msg.content.indexOf(token.prefix) !== 0) return;

  //commands
  //const args = msg.content.slice(token.prefix.length).trim().split(/ +/g);
  //const command = args.shift().toLowerCase();

 /* if (command === 'ping') {
    msg.reply('pong');
  }*/


  /*if(command === "purge") {
    const modRole = msg.guild.roles.find(role => role.name === "Admin");
    const deleteCount = 100;
    // This command removes all messages from all users in the channel, up to 100.

    if (!modRole)
    return console.log("The Mods role does not exist");

    if (!msg.member.roles.has(modRole.id))
    return msg.reply("You can't use this command.");
    
     msg.channel.bulkDelete(deleteCount);
    }
  */

});

client.login(token.token);