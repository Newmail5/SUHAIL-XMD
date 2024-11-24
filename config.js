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

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_06_36_11_24_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNDAsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDk0LFxuICAgICAgICAyMzcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTk4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgODIsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMzMsXG4gICAgICAgIDgyLFxuICAgICAgICAyMDEsXG4gICAgICAgIDYzLFxuICAgICAgICA4MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjQsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTk1LFxuICAgICAgICA4NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDk3LFxuICAgICAgICA0OSxcbiAgICAgICAgMTg0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDEyMixcbiAgICAgICAgMTQyLFxuICAgICAgICAxMzQsXG4gICAgICAgIDEyMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOTUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAzOSxcbiAgICAgICAgMTcyLFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNjIsXG4gICAgICAgIDgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDg2LFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTkyLFxuICAgICAgICAxMjgsXG4gICAgICAgIDIyNyxcbiAgICAgICAgNjksXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDE4OSxcbiAgICAgICAgODgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgNixcbiAgICAgICAgMTE3LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTAwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgNzksXG4gICAgICAgIDE1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTI1LFxuICAgICAgICA0MyxcbiAgICAgICAgNzgsXG4gICAgICAgIDg2LFxuICAgICAgICA3NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDY0LFxuICAgICAgICAxMjUsXG4gICAgICAgIDg5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDUsXG4gICAgICAgIDgsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOTAsXG4gICAgICAgIDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDgsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTczLFxuICAgICAgICAxNDAsXG4gICAgICAgIDE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTg1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjM0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NixcbiAgICAgICAgNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNzAsXG4gICAgICAgIDY3LFxuICAgICAgICA5NyxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNjIsXG4gICAgICAgIDExMyxcbiAgICAgICAgMjgsXG4gICAgICAgIDMzLFxuICAgICAgICA0LFxuICAgICAgICAxMTBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMzksXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjYsXG4gICAgICAgIDE2LFxuICAgICAgICAzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExLFxuICAgICAgICAxNzYsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNDQsXG4gICAgICAgIDEsXG4gICAgICAgIDMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDI2LFxuICAgICAgICAxMDQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgOTgsXG4gICAgICAgIDExMixcbiAgICAgICAgMTAsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTM2LFxuICAgICAgICAyNixcbiAgICAgICAgNyxcbiAgICAgICAgOTYsXG4gICAgICAgIDY5LFxuICAgICAgICAyMzksXG4gICAgICAgIDYzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDIsXG4gICAgICAgIDExMFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzAsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMjI3LFxuICAgICAgICA4MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTU4LFxuICAgICAgICA4MyxcbiAgICAgICAgNzMsXG4gICAgICAgIDExNCxcbiAgICAgICAgOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMjksXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTk5LFxuICAgICAgICA0MyxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDIxMixcbiAgICAgICAgODAsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMjE3LFxuICAgICAgICAxMDgsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyOCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTksXG4gICAgICAgICAgMjksXG4gICAgICAgICAgMjUzLFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgNTQsXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDI0NSxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAzNCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjksXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMjQyLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjMyLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA0MVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2MyxcbiAgICAgICAgNDIsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDksXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE5NyxcbiAgICAgICAgODMsXG4gICAgICAgIDAsXG4gICAgICAgIDMyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgODUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMDIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMwLFxuICAgICAgICA3NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMxLFxuICAgICAgICAxNyxcbiAgICAgICAgNjAsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3OSxcbiAgICAgICAgMCxcbiAgICAgICAgMTI2LFxuICAgICAgICA4LFxuICAgICAgICA2MyxcbiAgICAgICAgOTIsXG4gICAgICAgIDEwLFxuICAgICAgICAyNTEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgNzUsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjIzLFxuICAgICAgICA3MCxcbiAgICAgICAgNDUsXG4gICAgICAgIDg0LFxuICAgICAgICAyMTYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMzgsXG4gICAgICAgIDIxNixcbiAgICAgICAgNzQsXG4gICAgICAgIDI0NyxcbiAgICAgICAgNixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMDEsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibE5pdFhJQjFNSXNFclhWTlNycmRQY2I4ZjRXeVFSdEtoN1dTNSt6ZURDVT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwicjV0U3g1NHVSZHlCejIzZkxUcUxVZ1wiLFxuICBcInBob25lSWRcIjogXCIyOTJiNTNiMC0yMTViLTRiMjMtYmUzNS00OGIzMWE0OWNiM2FcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgMjQzLFxuICAgICAgMTkyLFxuICAgICAgMjQzLFxuICAgICAgNjAsXG4gICAgICAxNTYsXG4gICAgICAxMDksXG4gICAgICAxNzksXG4gICAgICA0LFxuICAgICAgMTQsXG4gICAgICA4MyxcbiAgICAgIDE3NyxcbiAgICAgIDE1MSxcbiAgICAgIDIzMSxcbiAgICAgIDIwMixcbiAgICAgIDE3MSxcbiAgICAgIDIwMyxcbiAgICAgIDE1OCxcbiAgICAgIDEzMixcbiAgICAgIDE3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0NCxcbiAgICAgIDkxLFxuICAgICAgMjAzLFxuICAgICAgOTAsXG4gICAgICA3NixcbiAgICAgIDcwLFxuICAgICAgMTQ0LFxuICAgICAgMTc4LFxuICAgICAgMzcsXG4gICAgICAxOTksXG4gICAgICAxODUsXG4gICAgICAxMDUsXG4gICAgICAyMDcsXG4gICAgICAyNyxcbiAgICAgIDIyMCxcbiAgICAgIDE2NixcbiAgICAgIDU3LFxuICAgICAgMTE2LFxuICAgICAgMTAxLFxuICAgICAgMTI0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjVTUzlNUVhKXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM5OTk2MTM4OjMyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI1NDgzNDQwMTEyODY0ODozMkBsaWRcIixcbiAgICBcIm5hbWVcIjogXCLwn4ez8J+HrEVWRVJHUkVFTvCfp4NcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNLemV1ZEFHRVBDU2k3b0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInEwNHFJa2RwL29UUmMzY0pPbTA5K3dSTitWcVJHMkdrcW5mS1lZZVJseEE9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQ1ljUnQ3SHkxMElrRFlHTm9VV1BDTTRMeG9rK253SXcyc3VkTjRsMy8wU2kzYi9qRDR5aUFjY2JzSVhUV0xhOTBVVWpqRmNXRjhMaUlBWU9pc3hORHc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwib1l3VXVCQzUwcEV5dGtaa3JFK0s3YlJmTlJpVmRGa1loamtYdDdkV2NGUm9IVVZ4TVE2ZmZxK2IvNkZEdFJ2cG5TTXE2N3h0Z21sWUdIZFZpZ2FYQ2c9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAzOTk5NjEzODozMkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICA0MixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMTQ1LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiaXBob25lXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzI0MzAxOTUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFJZjdcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUlmNy5qc29uIjogIntcImtleURhdGFcIjpcInFlWjR6ajVsVmVIaUVPT0M2MjRSZThubXNseVBYYzR4ZXg0Z1RLSnl4YWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MTc3OTMzMDg2MCxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzMyNDMwMTk1NzA3XCJ9Igp9"  // PUT your SESSION_ID 


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
