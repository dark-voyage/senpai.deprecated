const { composer, middleware } = require("../../core/bot");

const consoles = require("../../layouts/consoles");
const message = require("../../layouts/messages");
const keyboard = require("../../layouts/keyboards");
const database = require("../../database/db");

composer.help(async (ctx) => {
  if (
    database.users["eternal"].includes(ctx.from.id) ||
    database.users["temporary"].includes(ctx.from.username)
  ) {
    await ctx.replyWithHTML(message.help(true), {
      parse_mode: "HTML",
      reply_markup: keyboard.help,
    });
  } else {
    await ctx.replyWithHTML(message.help(false), {
      parse_mode: "HTML",
      reply_markup: keyboard.help,
    });
  }
});

middleware(composer);
consoles.module(__filename);
