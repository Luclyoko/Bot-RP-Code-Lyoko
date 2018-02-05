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
            message.channel.sendMessage(message.content.replace(prefix + "a ", ":aelita: **:** "));
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
            message.channel.sendMessage(message.content.replace(prefix + "jim ", ":jim: **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "sis ")){
            message.channel.sendMessage(message.content.replace(prefix + "sis ", ":sissi: **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "del ")){
            message.channel.sendMessage(message.content.replace(prefix + "del ", ":delmas: **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "j ")){
            message.channel.sendMessage(message.content.replace(prefix + "j ", ":jeremy: **:**"));
            message.delete();
        }

        if(message.content.startsWith(prefix + "y ")){
            message.channel.sendMessage(message.content.replace(prefix + "y ", ":yumi:410149300203683841 **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "u ")){
            message.channel.sendMessage(message.content.replace(prefix + "u ", ":ulrich: **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "o ")){
            message.channel.sendMessage(message.content.replace(prefix + "o ", ":odd: **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "s ")){
            message.channel.sendMessage(message.content.replace(prefix + "s ", "__**Sam :**__ "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "w ")){
            message.channel.sendMessage(message.content.replace(prefix + "w ", ":william: **:** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "mil ")){
            message.channel.sendMessage(message.content.replace(prefix + "mil ", "__**Milly :**__ "));
            message.delete();
        }
            
        if(message.content.startsWith(prefix + "tam ")){
            message.channel.sendMessage(message.content.replace(prefix + "tam ", "__**Tamiya :**__ "));
            message.delete();
        }
            
        if(message.content.startsWith(prefix + "her ")){
            message.channel.sendMessage(message.content.replace(prefix + "her ", "__**Hervé :**__ "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "nic ")){
            message.channel.sendMessage(message.content.replace(prefix + "nic ", "__**Nicolas :**__ "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "hel ")){
            message.channel.sendMessage(message.content.replace(prefix + "hel ", "__**Héloïse :**__ "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "hert ")){
            message.channel.sendMessage(message.content.replace(prefix + "hert ", "__**Mme Hertz :**__ "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "mey ")){
            message.channel.sendMessage(message.content.replace(prefix + "mey ", "__**Mme Meyer :**__ "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "p ")){
            message.channel.sendMessage("Tu n'as pas accès à cette commande !");
            message.delete();
        }

        if(message.content.startsWith(prefix + "x ")){
            message.channel.sendMessage(message.content.replace(prefix + "x ", ":xana: _**") + "**_");
            message.delete();
        }

        if(message.content.startsWith(prefix + "sms ")){
            message.channel.sendMessage("@here ```" + message.content.replace(prefix + "sms ", "") + "```");
            message.delete();
        }
});

bot.login(process.env.BOT_TOKEN);
