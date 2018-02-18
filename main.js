const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (".");

bot.on('ready', () => {
    console.log("Bot pret!");
});

bot.on('message', message => {
    if(message.author.bot) return;
        if(message.content.startsWith(prefix + "annoncesrp ")){
            message.channel.categoryChannel("Kadic").sendMessage(message.content.replace(prefix + "annoncesrp ", ""));
        }
                                     
        if(message.content.startsWith(prefix + "changestate ")){
            bot.user.setPresence({ game: { name: message.content.replace(prefix + "changestate ", ""), type: 0 } });
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "a ")){
            if(message.member.roles.find("name", "Aelita")){
            message.channel.sendMessage(message.content.replace(prefix + "a ", "<:aelita:410149295619047458> **:** "));
            message.delete();
        }}

        if(message.content.startsWith(prefix + "pj ")){
            message.channel.sendMessage(message.content.replace(prefix + "pj ", "<:perejeremy:411920801999224853> **:** "));
            message.delete();
        }
        
        if(message.content.startsWith(prefix + "mj")){
            message.channel.sendMessage(message.content.replace(prefix + "mj ", "**Mère de Jérémie :** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "jim ")){
            message.channel.sendMessage(message.content.replace(prefix + "jim ", "<:jim:410149301210054656> **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "sis ")){
            message.channel.sendMessage(message.content.replace(prefix + "sis ", "<:sissi:410149300929167360> **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "del ")){
            message.channel.sendMessage(message.content.replace(prefix + "del ", "<:delmas:410149296881532953> **:** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "yol ")){
            message.channel.sendMessage(message.content.replace(prefix + "yol ", "<:yolande:410531706295156737> **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "j ")){
            if(message.member.roles.find("name", "Jérémie")){
            message.channel.sendMessage(message.content.replace(prefix + "j ", "<:jeremy:410149297619992587> **:** "));
            message.delete();
        }}

        if(message.content.startsWith(prefix + "y ")){
            if(message.member.roles.find("name", "Yumi")){
            message.channel.sendMessage(message.content.replace(prefix + "y ", "<:yumi:410149300203683841> **:** "));
            message.delete();
        }}
    
        if(message.content.startsWith(prefix + "py ")){
            message.channel.sendMessage(message.content.replace(prefix + "py ", "**Mr Ishiyama :** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "my ")){
            message.channel.sendMessage(message.content.replace(prefix + "my ", "**Mme Ishiyama :** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "hir ")){
            message.channel.sendMessage(message.content.replace(prefix + "hir ", "<:hiroki:411920802787885057> **:** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "u ")){
            if(message.member.roles.find("name", "Ulrich")){
            message.channel.sendMessage(message.content.replace(prefix + "u ", "<:ulrich:410149299444383765> **:** "));
            message.delete();
        }}

        if(message.content.startsWith(prefix + "o ")){
            if(message.member.roles.find("name", "Odd")){
            message.channel.sendMessage(message.content.replace(prefix + "o ", "<:odd:410149300094631937> **:** "));
            message.delete();
        }}

        if(message.content.startsWith(prefix + "s ")){
            message.channel.sendMessage(message.content.replace(prefix + "s ", "**Sam :** "));
            message.delete();
        }

        if(message.content.startsWith(prefix + "w ")){
            if(message.member.roles.find("name", "William")){
            message.channel.sendMessage(message.content.replace(prefix + "w ", "<:william:410149301029830658> **:** "));
            message.delete();
        }}
    
        if(message.content.startsWith(prefix + "mil ")){
            message.channel.sendMessage(message.content.replace(prefix + "mil ", "<:milly:410541886051450881> **:** "));
            message.delete();
        }
            
        if(message.content.startsWith(prefix + "tam ")){
            message.channel.sendMessage(message.content.replace(prefix + "tam ", "**Tamiya :** "));
            message.delete();
        }
            
        if(message.content.startsWith(prefix + "her ")){
            message.channel.sendMessage(message.content.replace(prefix + "her ", "<:herve:410854434642329600> **:** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "nic ")){
            message.channel.sendMessage(message.content.replace(prefix + "nic ", "<:nicolas:410862213163646977> **:** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "hel ")){
            message.channel.sendMessage(message.content.replace(prefix + "hel ", "**Héloïse :** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "hert ")){
            message.channel.sendMessage(message.content.replace(prefix + "hert ", "<:hertz:411920803723214859> **:** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "mey ")){
            message.channel.sendMessage(message.content.replace(prefix + "mey ", "**Mme Meyer :** "));
            message.delete();
        }
    
        if(message.content.startsWith(prefix + "p ")){
            if(message.member.roles.find("name", "Pauline")){
            message.channel.sendMessage(message.content.replace(prefix + "p ", "**Pauline :** "));
            message.delete();
        }}

        if(message.content.startsWith(prefix + "x ")){
            message.channel.sendMessage(message.content.replace(prefix + "x ", "<:xana:410149299717013507> **") + "**");
            message.delete();
        }

        if(message.content.startsWith(prefix + "sms ")){
            if(message.member.roles.find("name", "Yumi")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message de Yumi !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "Ulrich")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message d'Ulrich !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "Odd")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message d'Odd !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "Jérémie")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message de Jérémie !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "Aelita")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message d'Aelita !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "William")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message de William !** ```") + "```");
            }
            
            if(message.member.roles.find("name", "Pauline")){
               message.channel.sendMessage(message.content.replace(prefix + "sms ", "@here **Nouveau message de Pauline !** ```") + "```");
            }
            
            message.delete();
        }
});

bot.login(process.env.BOT_TOKEN);
