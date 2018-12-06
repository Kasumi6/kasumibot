const Discord = require("discord.js");
const client = new Discord.Client();

client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
    client.user.setActivity(`PN!help | By Kasumi | PN`,{type:"LISTENING"})
    })
    client.on("message", message => {

        if(message.content.includes("PN!help")){
            var help_embed = new Discord.RichEmbed()
            .setAuthor("Help")
            .setColor("E46525")
            .setTitle("🤖 Voici les commandes du bot :")
            .setDescription("----------------------")
            .addField("PN!blacklist", "Le bot vous envois la liste de tous les anti-raideurs.")
            .addField("PN!bot", "Le bot vous envois la liste de tous les bots raid et si ils sont connectés ou non.")
            .setFooter("By Kasumi | PN")
            message.channel.send(help_embed)
            console.log(`Help par ${message.author.tag}`)
        }
    })
    client.on("guildMemberAdd", member => {
        member.createDM().then(channel => {
            var bienvenue = new Discord.RichEmbed()
            .setAuthor(`🎉 Bienvenue sur le serveur ${member.guild.name} ! 🎉`)
            .setColor("E46525")
            .setFooter("By Kasumi | PN")
            return channel.send(bienvenue)
            console.log(`${member.displayName} a rejoins le serveur`)
        }).catch(console.error)
    })
    client.on("message", message => {
    if (message.content.includes("PN!clear")){
        if (message.channel.type === "dm") return;
        var clear_no_perms = new Discord.RichEmbed()
        .setAuthor("CLEAR")
        .setColor("E46525")
        .addField(`Vous n'avez pas assez de permissions ${message.author.tag}`)
        .setFooter("By Kasumi | PN")
        if (!message.guild.member(message.author).hasPermission("MANAGE_CHANNELS")) return message.channel.send(clear_no_perms)
        async function clear() {
            message.delete();
            const fetched = await message.channel.fetchMessages({limit: 99});
            message.channel.bulkDelete(fetched);
        }
        clear();
        console.log(`clear par ${message.author.username + "#" + message.author.discriminator}`)
    }
})

    
client.on("message", message => {
if (message.content.includes("PN!info")) {
        var memberavatar = message.author.avatarURL
        var membername = message.author.username
           var mentionned = message.mentions.users.first();
          var getvalueof;
          if(mentionned){
              var getvalueof = mentionned;
          } else {
              var getvalueof = message.author;
          }
    
          if(getvalueof.bot == true){
              var checkbot = "L'utilisateur est un bot";
          } else {
              var checkbot = "N'est pas un bot";
          }
          if(getvalueof.presence.status == 'online'){
            var status = "En ligne"; 
          }else {
            var status = "Hors ligne";
          }
    
        message.channel.sendMessage({
            embed: {
              type: 'rich',
              description: '',
              fields: [{
                name: 'Pseudo',
                value: getvalueof.username,
                inline: true
              }, {
                name: 'User id',
                value: getvalueof.id,
                inline: true
              },{
                name: 'Tag',
                value: getvalueof.discriminator,
                inline: true
    },{
                name: 'Status',
                value: status,
                inline: true
    },{
                name: 'Bot',
                value: checkbot,
                inline: true
    }],
            image: {
          url: getvalueof.avatarURL
            },
              color: 0xE46525,
              footer: {
                text: 'by Kasumi | PN',
                proxy_icon_url: ' '
              },
    
              author: {
                name: membername,
                icon_url: memberavatar,
                proxy_icon_url: ' '
              }
            }
    });
    console.log(`Info par ${message.author.tag}`)
    }
})
client.on("message", message => {
if (message.content.includes("PN!bot")){
    var bot_info = new Discord.RichEmbed()
    .setAuthor("BOTS")
    .setColor("E46525")
    .setTitle("🤖 Voici la liste des bots : 🤖")
    .addField("1er", `AntiRaid's BOT#8260`)
    .setFooter("By Kasumi | PN")
    message.channel.sendEmbed(bot_info)
}

if (message.content.includes("PN!blacklist")){
    var blacklist = new Discord.RichEmbed()
    .setAuthor("BLACKLIST")
    .setTitle("Voici les anti-raideurs :")
    .setColor("E46525")
    .addField("1er", "OcelusPRO#1250")
    .addField("2ème", "-Thomas-#9287")
    .addField("3ème", "Vicalf#5831")
    .setFooter("By Kasumi | PN")
    var blacklist2 = new Discord.RichEmbed()
    .setAuthor("BLACKLIST")
    .setColor("E46525")
    .setTitle(`Blacklist de ${message.author.tag}`)
    .setFooter("By Kasumi | PN")
    message.channel.send(blacklist2)
    message.member.send(blacklist)
}
let messageKick = message.content.split(" ");
let args = messageKick.slice(1);
if (message.content.startsWith("PN!kick")){
if (message.channel.type === "dm") return;
if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("vous n'avez pas la permission")

if (message.mentions.users.size === 0) {
    var nomention = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
    .setFooter("By Kasumi | PN")
    message.channel.send(nomention)
    return
}
let raison = args.join(" ").slice(22)
if (!raison){
    var noraison = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle("Je n'ai pas la permission")
    .setFooter("By Kasumi | PN")
    message.channel.send(noraison)
    return
}
let bUser = message.guild.member(message.mentions.users.first())
var ban = message.guild.member(message.mentions.users.first());
if (!ban) {
    return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
}
if (!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    var pasperm = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Je n'ai pas la permission ! :x:")
    .setFooter("By Kasumi | PN")
    message.channel.send(pasperm)
    return
}

ban.kick().then(member => {
    var kick_embed = new Discord.RichEmbed()
        .setColor("E46525")
        .addField("[Kick]", `${member.user} a été kick par ${message.author} !`)
        .addField("Raison :","${raison}")
        .setFooter("By Kasumi | PN")
    message.channel.send(kick_embed)
})

}
  let messageBan = message.content.split(" ");
        let arge = messageBan.slice(1);
        if (message.content.startsWith("PN!ban")){
            if (message.channel.type === "dm") return;
            if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la permission !")

            if (message.mentions.users.size === 0) {
                var nomention = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
                .setFooter("By Kasumi | PN")
                message.channel.send(nomention)
                return
            }
            let raison = arge.join(" ").slice(22)
            if (!raison){
                var noraison = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle("Je n'ai pas la permission !")
                .setFooter("By Kasumi | PN")
                message.channel.send(noraison)
                return
            }
            let bUser = message.guild.member(message.mentions.users.first())

            var ban = message.guild.member(message.mentions.users.first());
            if (!ban) {
                return message.reply("l'utilisateur mentionné est introuvable ou n'existe pas !")
            }
            if (!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
                var pasperm = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Je n'ai pas la permission ! :x:")
                .setFooter("By Kasumi | PN")
                message.channel.send(pasperm)
                return
            }

            ban.ban().then(member => {
                var ban_embed = new Discord.RichEmbed()
                    .setColor("E46525")
                    .addField("[Ban]", `${member.user} a été banni par ${message.author} !`)
                    .addField("Raison :",`\`${raison}\``)
                    .setFooter("By Kasumi | PN")
                message.channel.send(ban_embed)
                })
        }
        if(message.content.includes("ar!serverinfo")){
            let serverinfo = new Discord.RichEmbed()
            .setTitle(`${message.guild} informations !`)
            .setColor("E46525")
            .addField("Créateur", message.guild.owner, true)
            .addField("ID", message.guild.id, true)
            .addField("Rôles", message.guild.roles.size, true)
            .addField("Région", message.guild.region, true)
            .addField("Membres", message.guild.memberCount, true)
            .addField("Créer le", message.guild.createdAt, true)
            .setThumbnail(message.guild.iconURL, true)
            .setFooter("By Kasumi | PN")
            message.channel.sendEmbed(serverinfo)
        }
})
    
    client.login(process.env.token)
