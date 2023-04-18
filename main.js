const { Client } = require('discord.js-selfbot-v13');
const client = new Client({restRequestTimeout: 60000,checkUpdate: false});
const config = require("./config.json")


let repeat = config.repeatMsg;
let delay = config.repeatMsgDelay;

console.log("[!] Launching the bot...");
client.on("ready", async() =>{
    console.log("Logged in as "+client.user.tag);
    if(config.sendOnStart){
        await mainPromotion();
    }
    await getCommandGetter();
})

let sentMessagesAll = [];
let sentMessages = [];
async function mainPromotion(){
    const promotionMsg = config.msg;
    let sent = 0;
    sentMessages = [];
    for (let i = 0; i < config.target.length; i++) {
        if(config.target[i][0] == "") break;
        let guildId = config.target[i][0];
        let channelId = config.target[i][1];
        try{
            let getTarget = await client.guilds.cache.get(guildId).channels.cache.get(channelId);
            let currentMsg = await getTarget.send(promotionMsg[Math.floor(Math.random() * promotionMsg.length)]);
            sentMessages.push(currentMsg); sentMessagesAll.push(currentMsg); sent+=1;
            console.log(`[${i+1}/${config.target.length}] sent to ${getTarget.guild.name} | #${getTarget.name}`);
        }catch(e){
            console.log(`[${i+1}/${config.target.length}] FAILED sent to ${guildId} | ${channelId}`);
        }
    }
    console.log("============================================");
    console.log(`Sucessfully sent promotion message to ${sent}/${config.target.length}`);
    console.log("============================================");
    if(repeat){ 
        console.log(`[!] Repeating task in ${delay} second.`)
        setTimeout(async ()=>{
            await mainPromotion();
        }, delay * 1000)
    };
}


async function getCommandGetter(){
    client.on('messageCreate', async msg =>{
        if(msg.author.id != client.user.id) return;
        if(config.commandExecutor[0].length > 1 && msg.author.id != config.commandExecutor) return;
        
        if(msg.content == config.prefix+"run"){ mainPromotion(); }
        if(msg.content == config.prefix+"undo"){ deleteMsg(sentMessages, 1) }
        if(msg.content == config.prefix+"undoall"){ deleteMsg(sentMessagesAll, 2) }
        if(msg.content == config.prefix+"repeaton"){ repeat = true; }
        if(msg.content == config.prefix+"repeatoff"){ repeat = false; }
    })
}

async function deleteMsg(msgList, choice){
    let deleted = 0;
    for (let i = 0; i < msgList.length; i++) {
            try{
                await msgList[i].delete(); deleted+=1;
                if(choice == 1) { sentMessagesAll.pop(); }
                console.log(`[${i+1}/${msgList.length}] deleted from ${msgList[i].guild.name} | #${msgList[i].channel.name}`);
            }catch(e){
                console.log(`[${i+1}/${msgList.length}] FAILED from ${msgList[i].guild.name} | #${msgList[i].channel.name}`);
            }
    }
    console.log("============================================");
    console.log(`Successfully deleting ${deleted}/${msgList.length} promotion message!`);
    console.log("============================================");
    if(choice == 1){ sentMessages = []; } else { sentMessages = []; sentMessagesAll = []; }
}

client.login(config.token)


