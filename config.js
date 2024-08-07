//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "94764038114";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "ture";
global.wlcm = process.env.WELCOME || "ture";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "ture";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "ture";
global.readmessage = process.env.READ_MESSAGE || "turw";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRUdiLyt6MFZXUThGSC9Ga1lPblhYOWQyc1hrcWNHUlZVckJIK2xSaXQzTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGRkRklSclFBYU5DdWRxdXRVUzFKRnJhaUxIbVJUSHo2TDZHUy8zcHpUTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJXTDVoRGFEUm0vbGFxZDdJdjNGbE1hc3hHaHkvWWNXa0x1TVNSLzBWbVhBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJjeWFVYTdudWVUcmdLUjFHZm4yVnpKMWhDZVQ5NDh2ZDM2a0VrOVZYa1ZvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjRGTm1wdUxqeFp0a0VWRXNQaCtzNER1TDd5YzFEUmRLVDBLZndjVVc1WDQ9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ikw4bElhbFVuT2NiT0pOM0xDZzV6R0JYdDN6cnJZNDJEQTE5UWJTbUV6a1U9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic0RsSk9PMDFxZDNBQjhuYUFjY3ZCb1FVZzBBeUp2U0hzNVhieDR6cU1ucz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib2RUVnBpSk1TalE1cUZuRWNZakFndlRWRjRLTXpLaDk0aU04TlpWT09oRT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkZPNnc1bVRGTmNsZE8yZ1p3RmFpbTUyUlduWEw2eTZpZFlHVXZjaW1yYk9vbS9OaEpwUjFZTkQzV3JaM0pXQ1BrS252dC9jNTRqT0Z4QmE1WDRBN2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJCS0JSMWszSDRwL2ExT285YjdYMTNMVFcrL0V5MG81b1V6VUVTMlhQY0dnPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKOGdGNmhnVVFEaW81NW1lelJ0TFpBIiwicGhvbmVJZCI6ImJjMTNiZDYzLTE0ZDktNDM0OC05NTkzLTJmOTE5YTZiODU3YyIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuM25uUW4ralRyRU0wTStxZU9oTE95a3VaMTg9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiSlRCZTVJcERjSjgzekJkb3dUVm50SkV2OFc4PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkFDN0M3REo0IiwibWUiOnsiaWQiOiI5NDc2NDAzODExNDo5NEBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiLhtL/htKzhtLbhtKzhtL7htKzhtLfLouG0tOG0rFxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxu4oCiXG5cbuKAolxuXG7igKJcblxuKPCdkIDwnZCD8J2QjPCdkIjwnZCNKSJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDSUdkNEx3Q0VOU0N5N1VHR0FnZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoialAyZ25nRGdnWTFua01nNUdwY1krN0hhRXM4VWZnb0gwL0VQbi84NnVuQT0iLCJhY2NvdW50U2lnbmF0dXJlIjoib3hCZlBCS2gyL2E0TzMxSDFDSFd3dW5nbUR0cmduWFZhMTV5UUs2KzhoUXU4cGdZdENwWnUyOVBOMGhBQkk4Y3pPRll5eW5DRGh2ZGwvc3AyT0laQkE9PSIsImRldmljZVNpZ25hdHVyZSI6InovcGwzQlIyb1dsMksyU3dMY014M0Z4RWsxS21hNEVHWS8wWkRmelJLVWZ3d0hEU0VUK0oyckpaQVZOZ3pQandHTFB0VmFObkVMNGhNK2V6ckdpUGpBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NjQwMzgxMTQ6OTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCWXo5b0o0QTRJR05aNURJT1JxWEdQdXgyaExQRkg0S0I5UHhENS8vT3JwdyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTcyMjk5MDk0NSwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFKV04ifQ=="
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`ADEE-HACKER`",
  author: process.env.PACK_AUTHER || "ADEE",
  packname: process.env.PACK_NAME || "A  D  E  E",
  botname: process.env.BOT_NAME || "ADE-V2",
  ownername: process.env.OWNER_NAME || "ADEE",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
