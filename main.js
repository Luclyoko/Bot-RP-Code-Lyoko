const Discord = require('discord.js');

var bot = new Discord.Client();
var prefix = (".");

bot.on('ready', () => {
    console.log("Bot pret!");
});

bot.on('message', message => {
    if(message.author.bot) return;
        if(message.content.startsWith(prefix + "annoncesrp ")){
            if(message.member.roles.find("name", "Narrateur")){
                message.channel.sendMessage(message.content.replace(prefix + "annoncesrp ", "@here ***") + "***");
            }
                message.delete();
        }
                                     
        if(message.content.startsWith(prefix + "changestate ")){
            if(message.member.roles.find("name", "Admin") || message.member.roles.find("name", "Boteur")){
            bot.user.setPresence({ game: { name: message.content.replace(prefix + "changestate ", ""), type: 0 } });
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "a ")){
            if(message.member.roles.find("name", "Aelita")){
            message.channel.sendMessage(message.content.replace(prefix + "a ", "<:aelita:410149295619047458> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "pj ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "pj ", "<:perejeremy:411920801999224853> **:** "));
            }
                message.delete();
        }
        
        if(message.content.startsWith(prefix + "mj ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "mj ", "**Mère de Jérémie :** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "jim ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "jim ", "<:jim:410149301210054656> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "sis ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "sis ", "<:sissi:410149300929167360> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "del ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "del ", "<:delmas:410149296881532953> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "mas ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "mas ", "**Mr Massart :** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "yol ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "yol ", "<:yolande:410531706295156737> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "j ")){
            if(message.member.roles.find("name", "Jérémie")){
            message.channel.sendMessage(message.content.replace(prefix + "j ", "<:jeremy:410149297619992587> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "y ")){
            if(message.member.roles.find("name", "Yumi")){
            message.channel.sendMessage(message.content.replace(prefix + "y ", "<:yumi:410149300203683841> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "py ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "py ", "**Mr Ishiyama :** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "my ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "my ", "**Mme Ishiyama :** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "hir ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "hir ", "<:hiroki:411920802787885057> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "u ")){
            if(message.member.roles.find("name", "Ulrich")){
            message.channel.sendMessage(message.content.replace(prefix + "u ", "<:ulrich:410149299444383765> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "o ")){
            if(message.member.roles.find("name", "Odd")){
            message.channel.sendMessage(message.content.replace(prefix + "o ", "<:odd:410149300094631937> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "s ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "s ", "**Sam :** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "w ")){
            if(message.member.roles.find("name", "William")){
            message.channel.sendMessage(message.content.replace(prefix + "w ", "<:william:410149301029830658> **:** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "p ")){
            if(message.member.roles.find("name", "Pauline")){
            message.channel.sendMessage(message.content.replace(prefix + "p ", "**Pauline :** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "tyr ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "tyr ", "**Tyron :** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "mil ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "mil ", "<:milly:410541886051450881> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "l ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "l ", "**Luna :** "));
            }
                message.delete();
        }
            
        if(message.content.startsWith(prefix + "tam ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "tam ", "**Tamiya :** "));
            }
                message.delete();
        }
            
        if(message.content.startsWith(prefix + "her ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "her ", "<:herve:410854434642329600> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "nic ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "nic ", "<:nicolas:410862213163646977> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "hert ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "hert ", "<:hertz:411920803723214859> **:** "));
            }
                message.delete();
        }
    
        if(message.content.startsWith(prefix + "mey ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "mey ", "**Mme Meyer :** "));
            }
                message.delete();
        }

        if(message.content.startsWith(prefix + "x ")){
            if(message.member.roles.find("name", "Persos secondaires")){
            message.channel.sendMessage(message.content.replace(prefix + "x ", "<:xana:410149299717013507> **") + "**");
            }
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
    
        if(message.content === prefix + 'help'){
            message.channel.sendMessage("__**Liste des commandes du bot RP Code Lyoko** (partie 1/2 >> **.help 2** pour la deuxième partie) :__" + "\nUn **ADM** devant une commande signifie que seuls les admins peuvent l'utiliser !\n\n**ADM .changestate** >> Permet de modifier l'êtat du bot\n**.annoncesrp** >> Permet d'afficher une annonce pour le rp dans le salon narration (rôle Narrateur requis)\n**.sms** >> Permet d'envoyer des SMS dans les salons appropriés (détecte votre rôle dans le RP)\n**.a** >> Permet de parler avec Aelita (rôle Aelita requis)\n**.j** >> Permet de parler avec Jérémie (rôle Jérémie requis)\n**.o** >> Permet de parler avec Odd (rôle Odd requis)\n**.u** >> Permet de parler avec Ulrich (rôle Ulrich requis)\n**.y** >> Permet de parler avec Yumi (rôle Yumi requis)\n**.w** >> Permet de parler avec William (rôle William requis)\n**.p** >> Permet de parler avec Pauline (rôle Pauline requis)\n**.tyr** >> Permet de parler avec Tyron (rôle Persos secondaires requis)\n**.s** >> Permet de parler avec Samantha (rôle Persos secondaires requis)\n**.sis** >> Permet de parler avec Sissi (rôle Persos secondaires requis)\n**.jim** >> Permet de parler avec Jim (rôle Persos secondaires requis)\n**.del** >> Permet de parler avec Delmas (rôle Persos secondaires requis)\n**.hert** >> Permet de parler avec Hertz (rôle Persos secondaires requis)");
            message.delete();
        }
    
        if(message.content === prefix + 'help 2'){
            message.channel.sendMessage("__**Liste des commandes du bot RP Code Lyoko** (partie 2/2 >> **.help** pour la première partie) :__" + "\nUn **ADM** devant une commande signifie que seuls les admins peuvent l'utiliser !\n\n**.l** >> Permet de parler avec Luna (rôle Persos secondaires requis)\n**.her** >> Permet de parler avec Hervé (rôle Persos secondaires requis)\n**.nic** >> Permet de parler avec Nicolas (rôle Persos secondaires requis)\n**.yol** >> Permet de parler avec Yolande (rôle Persos secondaires requis)\n**.hir** >> Permet de parler avec Hiroki (rôle Persos secondaires requis)\n**.py** >> Permet de parler avec Mr.Ishiyama (rôle Persos secondaires requis)\n**.my** >> Permet de parler avec Mme.Ishiyama (rôle Persos secondaires requis)\n**.mil** >> Permet de parler avec Milly (rôle Persos secondaires requis)\n**.tam** >> Permet de parler avec Tamiya (rôle Persos secondaires requis)\n**.mey** >> Permet de parler avec Mme.Meyer (rôle Persos secondaires requis)\n**.mas** >> Permet de parler avec Mr.Massart (rôle Persos secondaires requis)\n**.pj** >> Permet de parler avec Mr.Belpois (rôle Persos secondaires requis)\n**.mj** >> Permet de parler avec Mme.Belpois (rôle Persos secondaires requis)\n**.x** >> Permet de parler avec X.A.N.A. (rôle Persos secondaires requis)");
            message.delete();
        }

});

bot.login(process.env.BOT_TOKEN);
