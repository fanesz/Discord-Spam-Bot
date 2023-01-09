# Discord-Spam-Bot
A self-bot discord program to automatically send a message(s) to multiple channel at once!

## How to use
1. `Download and install "NodeJS"`
2. `Put all this file into one folder`
3. `Open "config.json", edit what you need,` [config.json Explanation](#config-json-explanation)
4. `Open "_run.bat" and wait the installation done, the bot will start by it self`
5. `At first, you may see an error, close the prompt`


## <a id="config-json-explanation"></a>config.json Explanation
![6](https://user-images.githubusercontent.com/91197642/211317238-b8a68f7e-3569-43cc-9e5f-10bdeb0071e8.png)
1. **Token**, your bot token, use user token (not a bot token). How to get? youtube.
2. **sendOnStart**, it means the message automatically send after the bot start.
3. **prefix**, to execute the bot command, [what command?](#command).
4. **repeatMsg**, to enable repeat feature, it means the message will keep spamming every x second.
5. **repeatMsgDelay**, explained at number 4.
6. **commandExecutor**, userID, optional, it means another user to execute the bot command, keep it empty so only the user that used to self-bot can use the command.
7. **msg**, the message. Keep on eye about formating, don't end up with ",".
8. **target**, for the channel target. the format is ["guildID1", "channelID1"], ["guildID2", "channelID2"], etc... how to get? google.


## <a id="command"></a>Bot Command
Who can execute the command?
- The account that you use for self-botting
- The user that you put at config file
What command i can use?
1. 
