const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349039996138";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349039996138";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "true"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "available" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,2349039996138";

global.api_smd = "https://api.kyuurzy.site/api/download/aio" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_18_11_10_13_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMjE1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk1LFxuICAgICAgICAxOTAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA0LFxuICAgICAgICAxODgsXG4gICAgICAgIDk5LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4OCxcbiAgICAgICAgMjQsXG4gICAgICAgIDUzLFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwLFxuICAgICAgICAxMjQsXG4gICAgICAgIDM0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEsXG4gICAgICAgIDM2LFxuICAgICAgICA4OSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk3LFxuICAgICAgICAyMTIsXG4gICAgICAgIDM4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDQxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxOTQsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDUsXG4gICAgICAgIDE2MCxcbiAgICAgICAgNzIsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjAsXG4gICAgICAgIDI0LFxuICAgICAgICAyMjgsXG4gICAgICAgIDExNixcbiAgICAgICAgMTA3LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTQsXG4gICAgICAgIDExMSxcbiAgICAgICAgNzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjE0LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDcwLFxuICAgICAgICAxODEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjIxLFxuICAgICAgICAxOTQsXG4gICAgICAgIDY3LFxuICAgICAgICAxOTcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgOTcsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMDEsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzYsXG4gICAgICAgIDMxLFxuICAgICAgICAxNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgNzUsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTIsXG4gICAgICAgIDU4LFxuICAgICAgICA2LFxuICAgICAgICAzOSxcbiAgICAgICAgOTAsXG4gICAgICAgIDYwLFxuICAgICAgICAzNixcbiAgICAgICAgNzQsXG4gICAgICAgIDM3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDUwLFxuICAgICAgICA5NSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjcsXG4gICAgICAgIDU3LFxuICAgICAgICAxMzcsXG4gICAgICAgIDEyOSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIwNyxcbiAgICAgICAgNDYsXG4gICAgICAgIDM5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDY0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQyLFxuICAgICAgICA4OCxcbiAgICAgICAgMjEyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDM2LFxuICAgICAgICAyLFxuICAgICAgICA5OCxcbiAgICAgICAgMjU0LFxuICAgICAgICA4MCxcbiAgICAgICAgNjgsXG4gICAgICAgIDE0LFxuICAgICAgICA0NyxcbiAgICAgICAgMjI2LFxuICAgICAgICA3NixcbiAgICAgICAgOTYsXG4gICAgICAgIDQ1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICA3MCxcbiAgICAgICAgMTI0LFxuICAgICAgICAxMDRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUxLFxuICAgICAgICA4LFxuICAgICAgICAyOCxcbiAgICAgICAgMjE3LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjAyLFxuICAgICAgICAxODIsXG4gICAgICAgIDE4NixcbiAgICAgICAgMjU1LFxuICAgICAgICAyMDAsXG4gICAgICAgIDI1MCxcbiAgICAgICAgNDksXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAyMyxcbiAgICAgICAgMTY2LFxuICAgICAgICA2LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgNTAsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNSxcbiAgICAgICAgMjcsXG4gICAgICAgIDQsXG4gICAgICAgIDM3LFxuICAgICAgICA0NCxcbiAgICAgICAgNjVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjA5LFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDIsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDkwLFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICA4NVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTU2LFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAxNjcsXG4gICAgICAgICAgOCxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgNDBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MSxcbiAgICAgICAgOSxcbiAgICAgICAgMTkyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNTgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzksXG4gICAgICAgIDg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI5LFxuICAgICAgICA2OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDYzLFxuICAgICAgICA2NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDY0LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc4LFxuICAgICAgICA2MSxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NCxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE2MSxcbiAgICAgICAgNSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMzksXG4gICAgICAgIDU3LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjM3LFxuICAgICAgICA1MyxcbiAgICAgICAgOTMsXG4gICAgICAgIDE4LFxuICAgICAgICAyMyxcbiAgICAgICAgMTksXG4gICAgICAgIDExNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE2MCxcbiAgICAgICAgMTEsXG4gICAgICAgIDEwLFxuICAgICAgICA5NSxcbiAgICAgICAgMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTE2LFxuICBcImFkdlNlY3JldEtleVwiOiBcInp5NGViaVBEV21ZQW0rMXE5M2pmbmdXeTJVdXlNaEtTUmRyR1hNU2dNbGs9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTk5NjEzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0E0QTkwQjNFQkJBOUI3RUE0MEJcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4ODQzMTE0XG4gICAgfSxcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0OTAzOTk5NjEzOEBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiM0EwRjAwNjg5MUIzODczQjUzQ0RcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzI4ODQzMTE4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMSxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkFBZWlzSVNFU2k2WmtDVVl1Zl92cXdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYzgwYWEzMjctOWQzNy00ZmNkLWFlZWUtZTdjZmU3ZjZiYzc0XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDYwLFxuICAgICAgMjM5LFxuICAgICAgOTEsXG4gICAgICAyMTMsXG4gICAgICAxMjgsXG4gICAgICAyMzMsXG4gICAgICA4OCxcbiAgICAgIDIxNCxcbiAgICAgIDgzLFxuICAgICAgMCxcbiAgICAgIDIwOSxcbiAgICAgIDE0MCxcbiAgICAgIDE5NSxcbiAgICAgIDcwLFxuICAgICAgMTQ3LFxuICAgICAgMTk3LFxuICAgICAgNzksXG4gICAgICAxMjAsXG4gICAgICAxNjYsXG4gICAgICAyMTVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTYyLFxuICAgICAgNjcsXG4gICAgICAxMTQsXG4gICAgICAxNSxcbiAgICAgIDExOSxcbiAgICAgIDE1NSxcbiAgICAgIDIxNixcbiAgICAgIDIxNyxcbiAgICAgIDY3LFxuICAgICAgMjU1LFxuICAgICAgMjI5LFxuICAgICAgMjAzLFxuICAgICAgMTM1LFxuICAgICAgNTAsXG4gICAgICAyMyxcbiAgICAgIDE0MCxcbiAgICAgIDY1LFxuICAgICAgMTI3LFxuICAgICAgMTM0LFxuICAgICAgMTFcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiQVNNTTJZMUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDkwMzk5OTYxMzg6MTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjU0ODM0NDAxMTI4NjQ4OjE2QGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIkVWRVJHUkVFTlwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0xHZHh6QVE0NXF3dUFZWUFTQUFLQUE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiZmQwZ09ZV2dndkRNVnBqYWlYTWpPcmJlcmtUT0lXR0dERWpXb1NtT3lDST1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJLd3JPZGgxVDBDcTZSUHpUS2tvTjJNbVlIQlE4SEpQUXA1ZFl6cjJmZkQ5Q1ZUSWlCYThVcWVLUC9FMTl6ZEFxako5YXlESUhWUDZodE1IMmNUajFDUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJoN3ZhRTRpMFZxS1o4cVd6M01RSWV0TE8vNTFEOTFPNjZDVzFHMWNoU0c0ekExUmVQVmR5Wmk4RG8yU0VXWWZyTDh0VGw2WWJjOWJFSTRCZTBkYkJCQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM5OTk2MTM4OjE2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAzMixcbiAgICAgICAgICA1NyxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE3NCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMDYsXG4gICAgICAgICAgMzMsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTM0LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAzNFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3Mjg4NDMxMTEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFHMU1cIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUcxTS5qc29uIjogIntcImtleURhdGFcIjpcInFLMTJid0FiamNLOUtUR29EcmFwVm02eGxKMnE1akVJUHVyV1hLQ0hQcnM9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTAxODMwMzIxLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMSwwXX0sXCJ0aW1lc3RhbXBcIjpcIjE3Mjg4NDMxMTIzNDRcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "EVERGREEN",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
