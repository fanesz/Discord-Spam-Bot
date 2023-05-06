# Discord-Spam-Bot
A self-bot discord program to automatically send a message(s) to multiple channel at once!<br>
Module used : [discord.js-selfbot-v13](https://github.com/aiko-chan-ai/discord.js-selfbot-v13).

## Feature
**Automatically send a message(s) to multiple channel.**<br>
![1](https://user-images.githubusercontent.com/91197642/211321638-1318048b-a573-4380-a6de-2184e0c50561.png)

**Giving debug when the bot can't send the message.**<br>
![2](https://user-images.githubusercontent.com/91197642/211321646-ccfefe66-a0af-42dc-b44a-d5d88bc3e5c7.png)

**Repeat Function, to keep the bot spamming.**<br>
![4](https://user-images.githubusercontent.com/91197642/211321666-1abebd2c-a02e-4676-8729-bde338914ee2.png)

**Undo the message that was sent.**<br>
![5](https://user-images.githubusercontent.com/91197642/211321669-e49b028a-ee59-41bb-a075-dae1c7a58c57.png)


## How to use
1. Download and install [NodeJS](https://nodejs.org/en/download/)
2. Put all this file into one folder
3. Open "config.json", edit what you need, [config.json Explanation](#config-json-explanation)
4. Open "_run.bat" and wait the installation done, the bot will start by it self
note: at the first time, it will install the module so it will take some minutes.


## <a id="config-json-explanation"></a>config.json Explanation
![6](https://user-images.githubusercontent.com/91197642/211317238-b8a68f7e-3569-43cc-9e5f-10bdeb0071e8.png)
1. **Token**, your bot token, use user token (not a bot token). How to get the token? [Click here](#get-token).
2. **sendOnStart**, it means the message automatically send after the bot start.
3. **prefix**, to execute the bot command, [what command?](#command).
4. **repeatMsg**, to enable repeat feature, it means the message will keep spamming every x second.
5. **repeatMsgDelay**, explained at number 4.
6. **commandExecutor**, userID, optional, it means another user to execute the bot command, keep it empty so only the user that used to self-bot can use the command.
7. **msg**, the message, if you set more than 1, it will be randomized. Keep on eye about formating, don't end up with ",".
8. **target**, for the channel target. the format is ["guildID1", "channelID1"], ["guildID2", "channelID2"], etc... how to get? google.


## <a id="command"></a>Bot Command
Who can execute the command?
- The account that you use for self-botting
- The user that you put at config file
What command i can use?
1. `!!run` to run the bot, it used if you turn off "sendOnStart" at config, or if you turn off "repeatMsg".
2. `!!undo` to undo last sent message. But if you enabling repeatMsg, let say sending 4 message per 10 second, it only undo the last 4 message.
3. `!!undoall` same as number 2, but to undo every single message that you sent since you start the bot, if you close the bot console, it reset.
4. `!!repeatoff` to disable the repeat task but keep the bot online, incase you do something wrong about the message and want to undo it.
5. `!!repeaton` to enable the repeat task but keep the bot online.


## <a id="get-token"></a>Get User Token
Open Discord at browser, press Ctrl + Shift + i, paste and enter code below to the console.
```js
window.webpackChunkdiscord_app.push([
  [Math.random()],
  {},
  req => {
    for (const m of Object.keys(req.c)
      .map(x => req.c[x].exports)
      .filter(x => x)) {
      if (m.default && m.default.getToken !== undefined) {
        return copy(m.default.getToken());
      }
      if (m.getToken !== undefined) {
        return copy(m.getToken());
      }
    }
  },
]);
console.log('%cWorked!', 'font-size: 50px');
console.log(`%cYou now have your token in the clipboard!`, 'font-size: 16px');
```

## <a id="troubleshooting"></a>Troubleshooting
1. If there is something error about token, this script can't use "bot" token, get user token for self-botting from `Developer Tools > Toggle Device Emulation (ctrl+shift+M) > Application > Local Storage > https://discord.com > Find "Token"`
2. If there is error about "FAILED sent to xx", it means the user don't have access to the channel or wrong Guild/Channel ID.
3. If there is error said like `HTTPError [AbortError]: The user aborted the request.`, it's connection problem, don't use VPN, or you can keep retry it.
4. If you want to make the spam msg have multiple line at config.json, make it become one line, but every new line, put \n. So like this `This is first line \n This is second line \n etc` or change the double quote (") to backquote (`), and it works for multiple lines.
