const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = ("!");

bot.on('ready', () => {
    bot.user.setPresence({ game: { name: "vec les dialogues !", type: 0}});
    console.log("Bot pret!");
});

bot.on('message', message => {
    if(message.author.bot) return;
        if(message.content.startsWith(prefix + "a ")){
            message.channel.sendMessage(message.content.replace(prefix + "a ", "__**Aelita :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "pj ")){
            message.channel.sendMessage(message.content.replace(prefix + "pj ", "__**Père de Jérémie :**__ "));
            message.delete();
        }
        
        if(message.content.startsWith(prefix + "mj")){
            message.channel.sendMessage(message.content.replace(prefix + "mj ", "__**Mère de Jérémie :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "jim ")){
            message.channel.sendMessage(message.content.replace(prefix + "jim ", "__**Jim :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "si ")){
            message.channel.sendMessage(message.content.replace(prefix + "si ", "__**Sissi :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "del ")){
            message.channel.sendMessage(message.content.replace(prefix + "del ", "__**Mr Delmas :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "j ")){
            message.channel.sendMessage(message.content.replace(prefix + "j ", "__**Jérémie :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "y ")){
            message.channel.sendMessage(message.content.replace(prefix + "y ", "__**Yumi :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "u ")){
            message.channel.sendMessage(message.content.replace(prefix + "u ", "__**Ulrich :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "o ")){
            message.channel.sendMessage(message.content.replace(prefix + "o ", "__**Odd :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "s ")){
            message.channel.sendMessage(message.content.replace(prefix + "s ", "__**Sam :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "w ")){
            message.channel.sendMessage(message.content.replace(prefix + "w ", "__**William :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "x ")){
            message.channel.sendMessage(message.content.replace(prefix + "x ", "_**XANA ") + "**_");
            message.delete();
        }

        if(message.content.startsWith(prefix + "sms ")){
            message.channel.sendMessage("```" + message.content.replace(prefix + "sms ", "") + "```");
            message.delete();
        }
});

bot.login(process.env.BOT_TOKEN);
